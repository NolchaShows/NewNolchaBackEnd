import { factories } from '@strapi/strapi';

const UID = 'api::featured-artist.featured-artist' as any;

export default factories.createCoreController(
  UID,
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          listingImage: true,
        },
      };

      return await super.find(ctx);
    },

    async findBySlug(ctx) {
      const slug = ctx.params?.slug;

      if (!slug) {
        return ctx.badRequest('Missing slug');
      }

      const entity = await strapi.db.query('api::featured-artist.featured-artist').findOne({
        where: { slug, publishedAt: { $notNull: true } },
        populate: {
          seo: { populate: ['ogImage'] },
          hero: { populate: ['video'] },
          listingImage: true,
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
        return ctx.notFound('Featured artist not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
