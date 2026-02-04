export default {
  routes: [
    {
      method: 'GET',
      path: '/designers/by-slug/:slug',
      handler: 'designer.findBySlug',
      config: {
        auth: false
      }
    }
  ],
};
