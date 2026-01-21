import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    // GraphQL: custom query to fetch an Experience Page by slug.
    // This keeps the frontend query simple and matches the REST `/by-slug/:slug` pattern.
    try {
      const extensionService = strapi.plugin('graphql')?.service('extension');
      if (!extensionService) return;

      extensionService.use(({ nexus }) => {
        const UID = 'api::experience-page.experience-page';
        const contentType = strapi.contentTypes[UID];

        // If the content type isn't registered (e.g. during bootstrap/migrations), skip.
        if (!contentType) return {};

        const { naming } = strapi.plugin('graphql').service('utils');
        const { transformArgs } = strapi.plugin('graphql').service('builders').utils;
        const { findFirst } = strapi
          .plugin('graphql')
          .service('builders')
          .get('content-api')
          .buildQueriesResolvers({ contentType });

        const typeName = naming.getTypeName(contentType);

        return {
          types: [
            nexus.extendType({
              type: 'Query',
              definition(t) {
                t.field('experiencePageBySlug', {
                  type: typeName,
                  args: {
                    slug: nexus.nonNull(nexus.stringArg()),
                  },
                  async resolve(parent, args, ctx) {
                    const transformedArgs = transformArgs(
                      { filters: { slug: { eq: args.slug } } },
                      { contentType }
                    );

                    return await findFirst(parent, transformedArgs, ctx);
                  },
                });
              },
            }),
          ],
          resolversConfig: {
            // Use the same permission scope as the built-in "find" query for this content-type.
            'Query.experiencePageBySlug': {
              auth: { scope: [`${UID}.find`] },
            },
          },
        };
      });
    } catch {
      // If GraphQL plugin isn't available, don't break Strapi startup.
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Ensure Public role can read Experience Pages via the Content API (find + findOne).
    // In Strapi v5 users-permissions stores enabled permissions as records in `up_permissions`.
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });

    if (!publicRole) return;

    const actions = [
      'api::experience-page.experience-page.find',
      'api::experience-page.experience-page.findOne',
    ];

    const existing = await strapi.db.query('plugin::users-permissions.permission').findMany({
      where: {
        role: publicRole.id,
        action: { $in: actions },
      },
    });

    const existingActions = new Set(existing.map((p: any) => p.action));
    const missing = actions.filter((a) => !existingActions.has(a));

    for (const action of missing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: {
          action,
          role: publicRole.id,
        },
      });
    }
  },
};
