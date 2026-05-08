import { factories } from '@strapi/strapi';

const UID = 'api::press-page.press-page' as any;

export default factories.createCoreController(UID, () => ({
  async find(ctx) {
    // Populate nested media for a single-call frontend fetch.
    ctx.query = {
      ...ctx.query,
      populate: {
        seo: { populate: ['ogImage'] },
        mediaCoverage: { populate: ['image'] },
        pressCards: { populate: ['newsPaperLogo', 'image'] },
      },
    };

    return await super.find(ctx);
  },
}));

