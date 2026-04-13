import { factories } from '@strapi/strapi';

const UID = 'api::project-page.project-page' as any;

export default factories.createCoreController(UID, () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
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
    };

    return await super.find(ctx);
  },
}));
