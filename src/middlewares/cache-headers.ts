export default () => async (ctx: any, next: () => Promise<void>) => {
  await next();
  if (ctx.method === 'GET' && ctx.path.startsWith('/api/home-page')) {
    ctx.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
  }
};
