import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

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
