export default {
  routes: [
    {
      method: 'GET',
      path: '/charity-pages/navigation',
      handler: 'charity-page.listPublished',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/charity-pages/by-slug/:slug',
      handler: 'charity-page.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};
