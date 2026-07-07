const CACHEABLE_GET_PREFIXES = [
  '/api/home-page',
  '/api/footer',
  '/api/navigation-menu',
  '/api/about-page',
  '/api/privacy-policy-page',
  '/api/terms-of-use-page',
  '/api/experience-categories/navigation',
  '/api/charity-pages/navigation',
];

export default () => async (ctx: any, next: () => Promise<void>) => {
  await next();

  if (ctx.method !== 'GET') return;

  const shouldCache = CACHEABLE_GET_PREFIXES.some((prefix) =>
    ctx.path.startsWith(prefix)
  );

  if (shouldCache) {
    ctx.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
  }
};
