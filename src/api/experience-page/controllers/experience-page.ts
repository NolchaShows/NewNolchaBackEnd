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
        where: { slug },
        populate: {
          seo: { populate: ['ogImage'] },
          hero: { populate: ['image'] },
          blocks: { populate: '*' },
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
