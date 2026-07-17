import { factories } from '@strapi/strapi';

const UID = 'api::home-page.home-page' as any;

/** Above-the-fold: hero + early homepage sections + shallow upcoming list for nav. */
const ABOVE_FOLD_POPULATE = {
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
        },
      },
    },
  },
};

/**
 * Below-the-fold components/media. Cross-collection relations are loaded separately
 * via the Document Service — `db.query` often omits them in Strapi 5.
 */
const BELOW_FOLD_COMPONENT_POPULATE = {
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
  texthero_section: {
    populate: {
      slides: { populate: ['main_image', 'second_image', 'logo_image'] },
    },
  },
  clients_section: {
    populate: {
      logos: true,
    },
  },
  feature_banner_one: true,
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
  contact_section: { populate: ['background_image', 'video', 'sponsors_image'] },
};

/** Relations that `db.query` drops — load with Document Service. */
const BELOW_FOLD_RELATION_POPULATE = {
  shared_tweet_carousel: { populate: ['items'] },
  shared_speaker_section: {
    populate: {
      speakers: { populate: ['image'] },
    },
  },
  // featured_experiences hidden from site + API responses
};

export default factories.createCoreController(UID, ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.db.query(UID).findOne({
      where: { publishedAt: { $notNull: true } },
      populate: ABOVE_FOLD_POPULATE,
    });

    if (!entity) {
      return ctx.notFound('Home page not found');
    }

    const sanitized = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitized);
  },

  async belowFold(ctx) {
    const [componentEntity, relationEntity] = await Promise.all([
      strapi.db.query(UID).findOne({
        where: { publishedAt: { $notNull: true } },
        populate: BELOW_FOLD_COMPONENT_POPULATE,
      }),
      strapi.documents(UID).findFirst({
        status: 'published',
        populate: BELOW_FOLD_RELATION_POPULATE,
      }),
    ]);

    if (!componentEntity && !relationEntity) {
      return ctx.notFound('Home page not found');
    }

    const merged = {
      ...(componentEntity || {}),
      shared_tweet_carousel: relationEntity?.shared_tweet_carousel ?? null,
      shared_speaker_section: relationEntity?.shared_speaker_section ?? null,
    };

    const sanitized = await this.sanitizeOutput(merged, ctx);
    return this.transformResponse(sanitized);
  },
}));
