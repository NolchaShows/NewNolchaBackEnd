import type { Core } from '@strapi/strapi';

const HOME_PAGE_UID = 'api::home-page.home-page';

type ContentManagerLayoutRow = Array<{ name?: string; size?: number }>;

type ContentManagerConfiguration = {
  layouts?: {
    list?: string[];
    edit?: ContentManagerLayoutRow[];
    editRelations?: string[];
  };
  metadatas?: Record<
    string,
    {
      edit?: { visible?: boolean; editable?: boolean; [key: string]: unknown };
      list?: Record<string, unknown>;
    }
  >;
  [key: string]: unknown;
};

async function hideHomePageFieldsInContentManager(
  strapi: Core.Strapi,
  fieldNames: string[]
) {
  try {
    const store = strapi.store({ type: 'plugin', name: 'content_manager' });
    const storeKey = `configuration_content_types::${HOME_PAGE_UID}`;
    const current = (await store.get({ key: storeKey })) as
      | ContentManagerConfiguration
      | null;

    if (!current || typeof current !== 'object') return;

    const hidden = new Set(fieldNames);
    const next: ContentManagerConfiguration = {
      ...current,
      layouts: { ...(current.layouts || {}) },
      metadatas: { ...(current.metadatas || {}) },
    };

    if (Array.isArray(next.layouts?.list)) {
      next.layouts.list = next.layouts.list.filter((name) => !hidden.has(name));
    }

    if (Array.isArray(next.layouts?.editRelations)) {
      next.layouts.editRelations = next.layouts.editRelations.filter(
        (name) => !hidden.has(name)
      );
    }

    if (Array.isArray(next.layouts?.edit)) {
      next.layouts.edit = next.layouts.edit
        .map((row) => row.filter((field) => !hidden.has(String(field?.name || ''))))
        .filter((row) => row.length > 0);
    }

    for (const fieldName of fieldNames) {
      const existingMeta = next.metadatas?.[fieldName] || {};
      next.metadatas![fieldName] = {
        ...existingMeta,
        edit: {
          ...(existingMeta.edit || {}),
          visible: false,
          editable: false,
        },
      };
    }

    await store.set({ key: storeKey, value: next });
  } catch (error) {
    strapi.log.warn(
      `Failed to hide Home page fields in Content Manager: ${String(error)}`
    );
  }
}

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

      // Experience Page by slug query
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

      // Charity Page by slug query
      extensionService.use(({ nexus }) => {
        const UID = 'api::charity-page.charity-page';
        const contentType = strapi.contentTypes[UID];

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
                t.field('charityPageBySlug', {
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
            'Query.charityPageBySlug': {
              auth: { scope: [`${UID}.find`] },
            },
          },
        };
      });

      // Designer by slug query
      extensionService.use(({ nexus }) => {
        const UID = 'api::designer.designer';
        const contentType = strapi.contentTypes[UID];

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
                t.field('designerBySlug', {
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
            'Query.designerBySlug': {
              auth: { scope: [`${UID}.find`] },
            },
          },
        };
      });

      // Featured Artist by slug query
      extensionService.use(({ nexus }) => {
        const UID = 'api::featured-artist.featured-artist';
        const contentType = strapi.contentTypes[UID];

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
                t.field('featuredArtistBySlug', {
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
            'Query.featuredArtistBySlug': {
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
    // Hide deprecated Home fields from the Content Manager edit view.
    // pluginOptions alone is not enough when a saved layout still includes them.
    await hideHomePageFieldsInContentManager(strapi, [
      'featured_experiences',
      'nolcha_experience_section',
    ]);

    // Ensure Public role can read Experience Pages via the Content API (find + findOne).
    // In Strapi v5 users-permissions stores enabled permissions as records in `up_permissions`.
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });

    if (!publicRole) return;

    const actions = [
      'api::navigation-menu.navigation-menu.find',
      'api::navigation-menu.navigation-menu.findOne',
      'api::home-page.home-page.find',
      'api::home-page.home-page.findOne',
      'api::home-page.home-page.belowFold',
      'api::experience-page.experience-page.find',
      'api::experience-page.experience-page.findOne',
      'api::experience-page.experience-page.findBySlug',
      'api::experience-category.experience-category.find',
      'api::experience-category.experience-category.findOne',
      'api::experiences-page.experiences-page.find',
      'api::experiences-page.experiences-page.findOne',
      'api::charity-page.charity-page.find',
      'api::charity-page.charity-page.findOne',
      'api::charity-page.charity-page.findBySlug',
      'api::speakers-page.speakers-page.find',
      'api::speakers-page.speakers-page.findOne',
      'api::speakers-page.speakers-page.findBySlug',
      // Press page (single type)
      'api::press-page.press-page.find',
      'api::press-page.press-page.findOne',
      // Designer pages
      'api::designer.designer.find',
      'api::designer.designer.findOne',
      'api::designer.designer.findBySlug',
      // Featured Artist pages
      'api::featured-artist.featured-artist.find',
      'api::featured-artist.featured-artist.findOne',
      // Reusable shared sections
      'api::shared-speaker-section.shared-speaker-section.find',
      'api::shared-speaker-section.shared-speaker-section.findOne',
      'api::shared-tweet-carousel.shared-tweet-carousel.find',
      'api::shared-tweet-carousel.shared-tweet-carousel.findOne',
      // Global footer
      'api::footer.footer.find',
      'api::footer.footer.findOne',
      // Legal pages
      'api::privacy-policy-page.privacy-policy-page.find',
      'api::privacy-policy-page.privacy-policy-page.findOne',
      'api::terms-of-use-page.terms-of-use-page.find',
      'api::terms-of-use-page.terms-of-use-page.findOne',
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
