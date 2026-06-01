import { factories } from '@strapi/strapi';

const UID = 'api::home-page.home-page' as any;

// Full populate shared between find and belowFold.
// Keep identical so the frontend can use either endpoint as a source of truth.
const FULL_POPULATE = {
  seo: { populate: ['ogImage'] },
  hero: { populate: ['video', 'thumbnail'] },
  build_momentum_section: {
    populate: {
      paragraphs: true,
      logos: true,
    },
  },
  image_gallery_slider: { populate: ['images'] },
  logo_slider: {
    populate: {
      logos: true,
    },
  },
  upcoming_events_section: {
    populate: {
      events: {
        populate: {
          image: true,
          nav_image: true,
          logo: true,
          mainImage: true,
          secondaryImage: true,
          tertiaryImage: true,
          galleryImages: true,
          tweet_carousel: { populate: ['items'] },
          evening_recap_section: {
            populate: {
              video: true,
              slides: { populate: ['video'] },
            },
          },
        },
      },
    },
  },
  evening_recap_section: {
    populate: {
      video: true,
      slides: { populate: ['video'] },
    },
  },
  service_section: {
    populate: {
      video: true,
      services: {
        populate: ['video'],
      },
    },
  },
  shared_speaker_section: {
    populate: {
      speakers: { populate: ['image'] },
    },
  },
  texthero_section: {
    populate: {
      slides: { populate: ['main_image', 'second_image', 'logo_image'] },
    },
  },
  shared_partner_section: {
    populate: {
      partners: {
        populate: ['primary', 'secondary'],
      },
    },
  },
  clients_section: {
    populate: {
      logos: true,
    },
  },
  feature_banner_one: true,
  nolcha_experience_section: {
    populate: {
      main_image: true,
      accordion_sections: true,
    },
  },
  press_media_image: true,
  artist_section: {
    populate: {
      media: true,
    },
  },
  feature_banner_two: true,
  gallery_section: {
    populate: {
      images: true,
      items: { populate: ['image'] },
    },
  },
  shared_tweet_carousel: { populate: ['items'] },
  featured_experiences: {
    populate: {
      hero: { populate: ['video', 'thumbnail'] },
      listingImage: true,
      detail_rows: { populate: ['tags'] },
      gallery: {
        populate: {
          standard_media: true,
          featured_media: true,
          featured_content_sections: true,
        },
      },
    },
  },
  contact_section: { populate: ['background_image', 'video', 'sponsors_image'] },
};

export default factories.createCoreController(
  UID,
  ({ strapi }) => ({
    /**
     * Full home-page payload — cached at the CDN/edge level via the
     * cache-headers middleware (s-maxage=60). Returning everything here
     * ensures the page works correctly even before the /below-fold endpoint
     * is available (e.g. before a Strapi restart after deployment).
     */
    async find(ctx) {
      const entity = await strapi.db.query(UID).findOne({
        where: { publishedAt: { $notNull: true } },
        populate: FULL_POPULATE,
      });

      if (!entity) {
        return ctx.notFound('Home page not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },

    /**
     * Below-the-fold slice — same data as find() but lets the frontend
     * fetch above-fold and below-fold in parallel for future Suspense
     * streaming support.
     */
    async belowFold(ctx) {
      const entity = await strapi.db.query(UID).findOne({
        where: { publishedAt: { $notNull: true } },
        populate: {
          upcoming_events_section: FULL_POPULATE.upcoming_events_section,
          evening_recap_section: FULL_POPULATE.evening_recap_section,
          service_section: FULL_POPULATE.service_section,
          shared_speaker_section: FULL_POPULATE.shared_speaker_section,
          texthero_section: FULL_POPULATE.texthero_section,
          shared_partner_section: FULL_POPULATE.shared_partner_section,
          feature_banner_one: true,
          nolcha_experience_section: FULL_POPULATE.nolcha_experience_section,
          press_media_image: true,
          artist_section: FULL_POPULATE.artist_section,
          feature_banner_two: true,
          gallery_section: FULL_POPULATE.gallery_section,
          shared_tweet_carousel: FULL_POPULATE.shared_tweet_carousel,
          featured_experiences: FULL_POPULATE.featured_experiences,
          contact_section: FULL_POPULATE.contact_section,
        },
      });

      if (!entity) {
        return ctx.notFound('Home page not found');
      }

      const sanitized = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitized);
    },
  })
);
