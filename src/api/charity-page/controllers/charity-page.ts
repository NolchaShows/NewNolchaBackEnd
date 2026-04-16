import { factories } from '@strapi/strapi';

const UID = 'api::charity-page.charity-page' as any;

export default factories.createCoreController(
  UID,
  ({ strapi }) => ({
    async listPublished(ctx) {
      const entities = await strapi.db.query('api::charity-page.charity-page').findMany({
        where: { publishedAt: { $notNull: true } },
        select: ['title', 'slug', 'publishedAt'],
        orderBy: { publishedAt: 'desc' },
      });

      const sanitized = await this.sanitizeOutput(entities, ctx);
      return this.transformResponse(sanitized);
    },

    async findBySlug(ctx) {
      const slug = ctx.params?.slug;

      if (!slug) {
        return ctx.badRequest('Missing slug');
      }

      const entity = await strapi.db.query('api::charity-page.charity-page').findOne({
        where: { slug, publishedAt: { $notNull: true } },
        populate: {
          seo: { populate: ['ogImage'] },
          hero: { populate: ['video'] },
          detail_rows: { populate: ['tags'] },
          gallery: {
            populate: {
              standard_media: true,
              featured_media: true,
              featured_content_sections: true,
            },
          },
        },
      });

      if (!entity) {
        return ctx.notFound('Charity page not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
