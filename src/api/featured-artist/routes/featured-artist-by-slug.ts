export default {
  routes: [
    {
      method: 'GET',
      path: '/featured-artists/by-slug/:slug',
      handler: 'featured-artist.findBySlug',
      config: {
        auth: false
      }
    }
  ],
};
