import { factories } from '@strapi/strapi';

const UID = 'api::featured-artists-page.featured-artists-page' as any;

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
              carousal_item: true,
              media: true,
            },
          },
        },
      });

      if (!entity) {
        return ctx.notFound('Featured artists page not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
