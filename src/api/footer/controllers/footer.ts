import { factories } from '@strapi/strapi';

const UID = 'api::footer.footer' as any;

export default factories.createCoreController(UID, ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.db.query(UID).findOne({
      where: { publishedAt: { $notNull: true } },
      populate: {
        logo: true,
        quick_links: { populate: { links: true } },
        resources: { populate: { links: true } },
        contact: true,
      },
    });

    if (!entity) {
      return ctx.notFound('Footer not found');
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },
}));
