import { factories } from '@strapi/strapi';

const CATEGORY_UID = 'api::experience-category.experience-category' as any;
const EXPERIENCE_UID = 'api::experience-page.experience-page' as any;

const pickListingImageUrl = (media: any): string | null => {
  if (!media) return null;
  const formats = media.formats || {};
  const rawUrl =
    formats.large?.url ||
    formats.medium?.url ||
    media.url ||
    null;
  if (!rawUrl) return null;
  if (rawUrl.startsWith('http')) return rawUrl;

  const base =
    process.env.R2_PUBLIC_URL ||
    process.env.PUBLIC_URL ||
    '';
  if (!base) return rawUrl;
  const path = rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`;
  return `${base.replace(/\/$/, '')}${path}`;
};

export default factories.createCoreController(
  CATEGORY_UID,
  ({ strapi }) => ({
    async navigation(ctx) {
      const categories = await strapi.db.query(CATEGORY_UID).findMany({
        where: { publishedAt: { $notNull: true } },
        select: ['name', 'slug'],
        populate: {
          experience_pages: {
            select: ['title', 'slug', 'publishedAt'],
            populate: { listingImage: true },
            orderBy: { title: 'asc' },
          },
        },
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      });

      const categorizedSlugs = new Set<string>();
      const items: Array<{
        label: string;
        slug: string;
        href: string;
        imageSrc: string | null;
      }> = [];

      for (const category of categories) {
        const pages = (category.experience_pages || []).filter(
          (page: { publishedAt?: string | null }) => page?.publishedAt
        );
        if (!pages.length) continue;

        pages.forEach((page: { slug?: string }) => {
          if (page?.slug) categorizedSlugs.add(page.slug);
        });

        const firstPage = pages[0];
        items.push({
          label: String(category.name || ''),
          slug: String(category.slug || ''),
          href: `/experiences#${category.slug}`,
          imageSrc: pickListingImageUrl(firstPage?.listingImage),
        });
      }

      const allExperiences = await strapi.db.query(EXPERIENCE_UID).findMany({
        where: { publishedAt: { $notNull: true } },
        select: ['title', 'slug'],
        populate: { listingImage: true },
        orderBy: { title: 'asc' },
      });

      for (const experience of allExperiences) {
        const slug = String(experience.slug || '');
        if (!slug || categorizedSlugs.has(slug)) continue;

        items.push({
          label: String(experience.title || ''),
          slug,
          href: `/experiences/${slug}`,
          imageSrc: pickListingImageUrl(experience.listingImage),
        });
      }

      return this.transformResponse(items);
    },
  })
);
