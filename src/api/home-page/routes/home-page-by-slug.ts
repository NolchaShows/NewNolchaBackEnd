export default {
  routes: [
    {
      method: 'GET',
      path: '/home-pages/by-slug/:slug',
      handler: 'home-page.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};
