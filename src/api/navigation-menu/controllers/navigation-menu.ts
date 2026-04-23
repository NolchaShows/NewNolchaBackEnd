import { factories } from '@strapi/strapi';

const UID = 'api::navigation-menu.navigation-menu' as any;

export default factories.createCoreController(UID, () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        items: {
          populate: {
            image: true,
            children: {
              populate: ['image'],
            },
          },
        },
      },
    };

    return await super.find(ctx);
  },
}));
