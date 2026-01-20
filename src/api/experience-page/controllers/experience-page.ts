import { factories } from '@strapi/strapi';

const UID = 'api::experience-page.experience-page' as any;

export default factories.createCoreController(
  UID,
  ({ strapi }) => ({
    async findBySlug(ctx) {
      const slug = ctx.params?.slug;

      if (!slug) {
        return ctx.badRequest('Missing slug');
      }

      const entity = await strapi.db.query('api::experience-page.experience-page').findOne({
        where: { slug, publishedAt: { $notNull: true } },
        populate: {
          seo: { populate: ['ogImage'] },
          hero: { populate: ['video'] },
          blocks: {
            on: {
              'blocks.three-image-row': {
                populate: ['firstImage', 'secondImage', 'thirdImage'],
              },
              'blocks.gallery': { populate: { items: { populate: ['image'] } } },
              'blocks.fashion-grid-section': {
                populate: ['topImage', 'middleImage1', 'middleImage2', 'middleImage3', 'bottomImage'],
              },
              'blocks.image-text-section': { populate: { image: true, tags: true, paragraphs: true } },
              'blocks.evening-recap-section': { populate: ['video'] },
            },
          },
        },
      });

      if (!entity) {
        return ctx.notFound('Experience page not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
