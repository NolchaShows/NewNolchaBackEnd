export default {
  routes: [
    {
      method: 'GET',
      path: '/experience-pages/by-slug/:slug',
      handler: 'experience-page.findBySlug',
      config: {
        auth: false
      }
    }
  ],
};

