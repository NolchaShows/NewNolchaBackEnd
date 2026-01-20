export default ({ env }) => {
  const publicUrl = env('PUBLIC_URL', undefined);

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    ...(publicUrl ? { url: publicUrl } : {}),
    // Render (and most PaaS) run Strapi behind a reverse proxy.
    proxy: env.bool('PROXY', true),
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};
