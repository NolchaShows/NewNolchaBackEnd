export default {
  routes: [
    {
      method: 'GET',
      path: '/experience-categories/navigation',
      handler: 'experience-category.navigation',
      config: {
        auth: false,
      },
    },
  ],
};
