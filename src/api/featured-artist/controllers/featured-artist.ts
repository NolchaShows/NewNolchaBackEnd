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
          heroImage: true,
          listingImage: true,
          paragraphs: true,
          sliderImages: { populate: ['image'] },
          socialImages: { populate: ['image'] },
          sections: { populate: ['image'] },
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
