export default {
  routes: [
    {
      method: 'GET',
      path: '/project-pages/by-slug/:slug',
      handler: 'project-page.findBySlug',
      config: {
        auth: false,
      },
    },
  ],
};
