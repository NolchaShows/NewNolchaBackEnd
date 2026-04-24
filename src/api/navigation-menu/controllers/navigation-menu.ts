import { factories } from '@strapi/strapi';

const UID = 'api::navigation-menu.navigation-menu' as any;

const normalizePathPart = (value = '') => value.replace(/^\/+|\/+$/g, '');

const normalizeMenuHref = (href = '') => {
  if (!href || href === '#') return href || '#';
  if (
    href.startsWith('/') ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('#')
  ) {
    return href;
  }

  return `/${normalizePathPart(href)}`;
};

const normalizeNavigationItems = (items: any[] = []) =>
  items.map((item) => ({
    ...item,
    href: normalizeMenuHref(item?.href),
    children: Array.isArray(item?.children)
      ? item.children.map((child) => ({
          ...child,
          href: child?.href ? normalizeMenuHref(child.href) : child?.href,
        }))
      : item?.children,
  }));

const normalizeNavigationResult = (result: any) => {
  const items = result?.data?.attributes?.items ?? result?.data?.items;
  if (!Array.isArray(items)) return result;

  const normalizedItems = normalizeNavigationItems(items);
  if (result?.data?.attributes?.items) {
    result.data.attributes.items = normalizedItems;
  } else if (result?.data?.items) {
    result.data.items = normalizedItems;
  }

  return result;
};

export default factories.createCoreController(UID, () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        items: {
          populate: {
            image: true,
            children: {
              populate: ['image'],
            },
          },
        },
      },
    };

    const result = await super.find(ctx);
    return normalizeNavigationResult(result);
  },
}));
