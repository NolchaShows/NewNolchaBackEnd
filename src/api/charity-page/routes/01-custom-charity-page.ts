export default {
  routes: [
    {
      method: 'GET',
      path: '/charity-pages/navigation',
      handler: 'charity-page.listPublished',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/charity-pages/by-slug/:slug',
      handler: 'charity-page.findBySlug',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
