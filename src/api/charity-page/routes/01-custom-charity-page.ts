export default {
  routes: [
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
