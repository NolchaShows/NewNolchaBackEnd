export default {
  routes: [
    {
      method: 'GET',
      path: '/speakers-pages/by-slug/:slug',
      handler: 'speakers-page.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};
