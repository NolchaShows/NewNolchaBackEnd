import { factories } from '@strapi/strapi';

const UID = 'api::home-page.home-page' as any;

export default factories.createCoreController(
  UID,
  ({ strapi }) => ({
    async find(ctx) {
      const entity = await strapi.db.query(UID).findOne({
        where: { publishedAt: { $notNull: true } },
        populate: {
          seo: { populate: ['ogImage'] },
          hero: { populate: ['video'] },
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
                populate: ['image', 'logo', 'mainImage', 'galleryImages'],
              },
            },
          },
          evening_recap_section: { populate: ['video'] },
          service_section: {
            populate: {
              image: true,
              services: true,
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
              carousal_item: true,
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
              hero: { populate: ['video'] },
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
          contact_section: { populate: ['background_image', 'video'] },
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
