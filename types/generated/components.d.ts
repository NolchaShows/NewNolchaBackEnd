import type { Schema, Struct } from '@strapi/strapi';

export interface ArtistPageArtistSection extends Struct.ComponentSchema {
  collectionName: 'components_artist_page_artist_sections';
  info: {
    displayName: 'artist_section';
  };
  attributes: {
    carousal_item: Schema.Attribute.Component<'global.arrays', true>;
    description: Schema.Attribute.String;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ArtistPageCard extends Struct.ComponentSchema {
  collectionName: 'components_artist_page_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CharitypartnerPageCharityPartnerSection
  extends Struct.ComponentSchema {
  collectionName: 'components_charitypartner_page_charity_partner_sections';
  info: {
    displayName: 'charity_partner_section';
  };
  attributes: {
    content_card: Schema.Attribute.Component<
      'charitypartner-page.content-card',
      false
    >;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image_text_card: Schema.Attribute.Component<
      'charitypartner-page.image-text-card',
      true
    >;
    key: Schema.Attribute.Enumeration<
      ['cerebral_palsy_foundation', 'make_a_wish', 'st_jude']
    >;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mainHeading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    text_hero: Schema.Attribute.Component<
      'charitypartner-page.text-hero',
      false
    >;
  };
}

export interface CharitypartnerPageContentCard extends Struct.ComponentSchema {
  collectionName: 'components_charitypartner_page_content_cards';
  info: {
    displayName: 'content_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CharitypartnerPageImageTextCard
  extends Struct.ComponentSchema {
  collectionName: 'components_charitypartner_page_image_text_cards';
  info: {
    displayName: 'image_text_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_position: Schema.Attribute.Enumeration<['left', 'right']>;
    subtext: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface CharitypartnerPageSlide extends Struct.ComponentSchema {
  collectionName: 'components_charitypartner_page_slides';
  info: {
    displayName: 'slide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    second_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface CharitypartnerPageTextHero extends Struct.ComponentSchema {
  collectionName: 'components_charitypartner_page_text_heroes';
  info: {
    displayName: 'text_hero';
  };
  attributes: {
    slides: Schema.Attribute.Component<'charitypartner-page.slide', true>;
  };
}

export interface DesignerPageImageItem extends Struct.ComponentSchema {
  collectionName: 'components_designer_page_image_items';
  info: {
    displayName: 'imageItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface DesignerPageMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_designer_page_media_items';
  info: {
    displayName: 'mediaItem';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface DesignerPagePressPartners extends Struct.ComponentSchema {
  collectionName: 'components_designer_page_press_partners';
  info: {
    displayName: 'PressPartners';
  };
  attributes: {
    altText: Schema.Attribute.String;
    backgroundColor: Schema.Attribute.Enumeration<['bg-black', 'bg-[#E7F0D3]']>;
    imageBlack: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageWhite: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ExperiencePageGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_experience_page_gallery_images';
  info: {
    displayName: 'galleryImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ExperiencePagePartner extends Struct.ComponentSchema {
  collectionName: 'components_experience_page_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    altText: Schema.Attribute.String;
    backgroundColor: Schema.Attribute.Enumeration<['bg-black', 'bg-[#E7F0D3]']>;
    imageBlack: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageWhite: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ExperiencePagePost extends Struct.ComponentSchema {
  collectionName: 'components_experience_page_posts';
  info: {
    displayName: 'post';
  };
  attributes: {
    altText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

export interface ExperiencePagePressCard extends Struct.ComponentSchema {
  collectionName: 'components_experience_page_press_cards';
  info: {
    displayName: 'pressCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    newsPaper: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ExperiencePageVideo extends Struct.ComponentSchema {
  collectionName: 'components_experience_page_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    videoUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GlobalArrays extends Struct.ComponentSchema {
  collectionName: 'components_global_arrays';
  info: {
    displayName: 'arrays';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface LandingPageAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_about_sections';
  info: {
    displayName: 'about_section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    link_text: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'landing-page.paragraphs', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_accordion_items';
  info: {
    displayName: 'accordion_item';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageArtistSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_artist_sections';
  info: {
    displayName: 'artist_section';
  };
  attributes: {
    carousal_item: Schema.Attribute.Component<'landing-page.multi-text', true>;
    description: Schema.Attribute.String;
    media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageCarousalItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_carousal_items';
  info: {
    displayName: 'carousal_item';
  };
  attributes: {
    alt_text: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPageContactSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_contact_sections';
  info: {
    displayName: 'contact_section';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.String;
    email_placeholder: Schema.Attribute.String;
    first_name_placeholder: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    message_placeholder: Schema.Attribute.String;
    second_name_placeholder: Schema.Attribute.String;
    submit_button_text: Schema.Attribute.String;
  };
}

export interface LandingPageEventCard extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_event_cards';
  info: {
    displayName: 'event_card';
  };
  attributes: {
    date: Schema.Attribute.Date;
    event_id: Schema.Attribute.String;
    get_tickets_url: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    learn_more_url: Schema.Attribute.String;
    name: Schema.Attribute.String;
    social_links: Schema.Attribute.Component<'landing-page.social-links', true>;
    venue: Schema.Attribute.String;
    what_to_expect: Schema.Attribute.String;
  };
}

export interface LandingPageEvents extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_events';
  info: {
    displayName: 'events';
  };
  attributes: {
    name: Schema.Attribute.String;
    video_url: Schema.Attribute.String;
  };
}

export interface LandingPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'hero_section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LandingPageImageCarousalSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_image_carousal_sections';
  info: {
    displayName: 'image_carousal_section';
  };
  attributes: {
    carousal_item: Schema.Attribute.Component<
      'landing-page.carousal-item',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageLogoSlider extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_logo_sliders';
  info: {
    displayName: 'logo_slider';
  };
  attributes: {
    logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageMultiText extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_multi_texts';
  info: {
    displayName: 'multi_text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface LandingPageNolchaExperienceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_nolcha_experience_sections';
  info: {
    displayName: 'nolcha_experience_section';
  };
  attributes: {
    accordion_sections: Schema.Attribute.Component<
      'landing-page.accordion-item',
      true
    >;
    heading: Schema.Attribute.String;
    image_caption: Schema.Attribute.String;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LandingPageParagraphs extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_paragraphs';
  info: {
    displayName: 'paragraphs';
  };
  attributes: {
    highlight: Schema.Attribute.String;
    text_after: Schema.Attribute.String;
    text_before: Schema.Attribute.String;
  };
}

export interface LandingPagePartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_partner_items';
  info: {
    displayName: 'partner_item';
  };
  attributes: {
    alt_text: Schema.Attribute.String;
    color: Schema.Attribute.Enumeration<['black', 'white']>;
    primary: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    secondary: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LandingPagePartnerSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_partner_sections';
  info: {
    displayName: 'partner_section';
  };
  attributes: {
    description: Schema.Attribute.String;
    partners: Schema.Attribute.Component<'landing-page.partner-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageRecentEvents extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_recent_events';
  info: {
    displayName: 'recent_events';
  };
  attributes: {
    events: Schema.Attribute.Component<'landing-page.events', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_service_items';
  info: {
    displayName: 'service_item';
  };
  attributes: {
    description: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    layout: Schema.Attribute.Enumeration<['single', 'double', 'stacked']>;
    service_id: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_service_sections';
  info: {
    displayName: 'service_section';
  };
  attributes: {
    services: Schema.Attribute.Component<'landing-page.service-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageSlideItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_slide_items';
  info: {
    displayName: 'slide_item';
  };
  attributes: {
    description: Schema.Attribute.String;
    logo_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface LandingPageSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_social_links';
  info: {
    displayName: 'social_links';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LandingPageSpeakerItem extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_speaker_items';
  info: {
    displayName: 'speaker_item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    social_handle: Schema.Attribute.String;
  };
}

export interface LandingPageSpeakerSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_speaker_sections';
  info: {
    displayName: 'speaker_section';
  };
  attributes: {
    speakers: Schema.Attribute.Component<'landing-page.speaker-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageTextheroSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_texthero_sections';
  info: {
    displayName: 'texthero_section';
  };
  attributes: {
    slides: Schema.Attribute.Component<'landing-page.slide-item', true>;
  };
}

export interface PressPageAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_press_page_about_sections';
  info: {
    displayName: 'about-section';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface PressPageCompany extends Struct.ComponentSchema {
  collectionName: 'components_press_page_companies';
  info: {
    displayName: 'Company';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface PressPageLogo extends Struct.ComponentSchema {
  collectionName: 'components_press_page_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface PressPagePressCard extends Struct.ComponentSchema {
  collectionName: 'components_press_page_press_cards';
  info: {
    displayName: 'press-card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    newsPaper: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SpeakersPageAnimatedCards extends Struct.ComponentSchema {
  collectionName: 'components_speakers_page_animated_cards';
  info: {
    displayName: 'animated_cards';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SpeakersPageStackSection extends Struct.ComponentSchema {
  collectionName: 'components_speakers_page_stack_sections';
  info: {
    displayName: 'stack_section';
  };
  attributes: {
    images_left: Schema.Attribute.Component<
      'speakers-page.animated-cards',
      true
    >;
    images_right: Schema.Attribute.Component<
      'speakers-page.animated-cards',
      true
    >;
    testimonials: Schema.Attribute.Component<
      'speakers-page.animated-cards',
      true
    >;
    title: Schema.Attribute.Text;
  };
}

export interface UpcomingPageEventModal extends Struct.ComponentSchema {
  collectionName: 'components_upcoming_page_event_modals';
  info: {
    displayName: 'event_modal';
  };
  attributes: {
    event_card: Schema.Attribute.Component<'landing-page.event-card', false>;
    image_carousal: Schema.Attribute.Component<
      'landing-page.image-carousal-section',
      true
    >;
    image_stack: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    media_carousal: Schema.Attribute.Component<
      'upcoming-page.media-carousal',
      true
    >;
  };
}

export interface UpcomingPageMediaCarousal extends Struct.ComponentSchema {
  collectionName: 'components_upcoming_page_media_carousals';
  info: {
    displayName: 'media_carousal';
  };
  attributes: {
    media_id: Schema.Attribute.String;
    url: Schema.Attribute.Component<'global.arrays', true>;
  };
}

export interface UpcomingPageUpcomingEvents extends Struct.ComponentSchema {
  collectionName: 'components_upcoming_page_upcoming_events';
  info: {
    displayName: 'upcoming_events';
  };
  attributes: {
    event_modal: Schema.Attribute.Component<'upcoming-page.event-modal', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tags: Schema.Attribute.Component<'global.arrays', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'artist-page.artist-section': ArtistPageArtistSection;
      'artist-page.card': ArtistPageCard;
      'charitypartner-page.charity-partner-section': CharitypartnerPageCharityPartnerSection;
      'charitypartner-page.content-card': CharitypartnerPageContentCard;
      'charitypartner-page.image-text-card': CharitypartnerPageImageTextCard;
      'charitypartner-page.slide': CharitypartnerPageSlide;
      'charitypartner-page.text-hero': CharitypartnerPageTextHero;
      'designer-page.image-item': DesignerPageImageItem;
      'designer-page.media-item': DesignerPageMediaItem;
      'designer-page.press-partners': DesignerPagePressPartners;
      'experience-page.gallery-image': ExperiencePageGalleryImage;
      'experience-page.partner': ExperiencePagePartner;
      'experience-page.post': ExperiencePagePost;
      'experience-page.press-card': ExperiencePagePressCard;
      'experience-page.video': ExperiencePageVideo;
      'global.arrays': GlobalArrays;
      'landing-page.about-section': LandingPageAboutSection;
      'landing-page.accordion-item': LandingPageAccordionItem;
      'landing-page.artist-section': LandingPageArtistSection;
      'landing-page.carousal-item': LandingPageCarousalItem;
      'landing-page.contact-section': LandingPageContactSection;
      'landing-page.event-card': LandingPageEventCard;
      'landing-page.events': LandingPageEvents;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.image-carousal-section': LandingPageImageCarousalSection;
      'landing-page.logo-slider': LandingPageLogoSlider;
      'landing-page.multi-text': LandingPageMultiText;
      'landing-page.nolcha-experience-section': LandingPageNolchaExperienceSection;
      'landing-page.paragraphs': LandingPageParagraphs;
      'landing-page.partner-item': LandingPagePartnerItem;
      'landing-page.partner-section': LandingPagePartnerSection;
      'landing-page.recent-events': LandingPageRecentEvents;
      'landing-page.service-item': LandingPageServiceItem;
      'landing-page.service-section': LandingPageServiceSection;
      'landing-page.slide-item': LandingPageSlideItem;
      'landing-page.social-links': LandingPageSocialLinks;
      'landing-page.speaker-item': LandingPageSpeakerItem;
      'landing-page.speaker-section': LandingPageSpeakerSection;
      'landing-page.texthero-section': LandingPageTextheroSection;
      'press-page.about-section': PressPageAboutSection;
      'press-page.company': PressPageCompany;
      'press-page.logo': PressPageLogo;
      'press-page.press-card': PressPagePressCard;
      'speakers-page.animated-cards': SpeakersPageAnimatedCards;
      'speakers-page.stack-section': SpeakersPageStackSection;
      'upcoming-page.event-modal': UpcomingPageEventModal;
      'upcoming-page.media-carousal': UpcomingPageMediaCarousal;
      'upcoming-page.upcoming-events': UpcomingPageUpcomingEvents;
    }
  }
}
