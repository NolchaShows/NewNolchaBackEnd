import { factories } from '@strapi/strapi';

const UID = 'api::designer-page.designer-page' as any;

export default factories.createCoreController(
  UID,
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.db.query(UID).findOne({
        where: { publishedAt: { $notNull: true } },
        populate: {
          hero: { populate: { video: true } },
          artist_section: {
            populate: {
              media: true,
            },
          },
        },
      });

      if (!entity) {
        return ctx.notFound('Designer page not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
