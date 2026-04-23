import { factories } from '@strapi/strapi';

const UID = 'api::about-page.about-page' as any;

export default factories.createCoreController(UID, () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        heroVideo: true,
        statementSection: true,
        differentiatorsSection: { populate: ['items'] },
        servicesSection: { populate: ['stories', 'video'] },
        clientsSection: { populate: ['logos'] },
        pressSection: { populate: ['featureImage'] },
      },
    };

    return await super.find(ctx);
  },
}));
