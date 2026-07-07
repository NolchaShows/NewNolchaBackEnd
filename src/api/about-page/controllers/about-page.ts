import { factories } from '@strapi/strapi';

const UID = 'api::about-page.about-page' as any;

const ABOUT_POPULATE = {
  heroVideo: true,
  statementSection: { populate: ['rightItems'] },
  differentiatorsSection: { populate: ['items'] },
  servicesSection: { populate: ['stories', 'video'] },
  clientsSection: { populate: ['logos'] },
};

export default factories.createCoreController(UID, ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.db.query(UID).findOne({
      where: { publishedAt: { $notNull: true } },
      populate: ABOUT_POPULATE,
    });

    if (!entity) {
      return ctx.notFound('About page not found');
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
