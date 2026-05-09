export default {
  routes: [
    {
      method: 'GET',
      path: '/home-page/below-fold',
      handler: 'home-page.belowFold',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
