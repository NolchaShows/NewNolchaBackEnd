import { factories } from '@strapi/strapi';

const UID = 'api::project-page.project-page' as any;

export default factories.createCoreController(
  UID,
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const slug = ctx.params?.slug;

      if (!slug) {
        return ctx.badRequest('Missing slug');
      }

      const entity = await strapi.db.query(UID).findOne({
        where: { slug, publishedAt: { $notNull: true } },
        populate: {
          seo: { populate: ['ogImage'] },
          hero: { populate: ['video'] },
          detail_rows: { populate: ['tags'] },
          gallery: {
            populate: {
              standard_media: true,
              featured_media: true,
            },
          },
        },
      });

      if (!entity) {
        return ctx.notFound('Project page not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
