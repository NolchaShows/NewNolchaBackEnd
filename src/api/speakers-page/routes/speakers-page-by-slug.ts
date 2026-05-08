export default {
  routes: [
    {
      method: 'GET',
      path: '/speakers-page/by-slug/:slug',
      handler: 'speakers-page.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};
