import { factories } from '@strapi/strapi';

const UID = 'api::speakers-page.speakers-page' as any;

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
          speaker_section: {
            populate: {
              speakers: { populate: ['image'] },
            },
          },
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
        return ctx.notFound('Speakers page not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
