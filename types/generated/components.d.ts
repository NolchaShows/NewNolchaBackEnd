import type { Schema, Struct } from '@strapi/strapi';

export interface AboutClientsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_clients_sections';
  info: {
    displayName: 'Clients';
    icon: 'users';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    logos: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutDifferentiatorItem extends Struct.ComponentSchema {
  collectionName: 'components_about_differentiator_items';
  info: {
    displayName: 'Differentiator Item';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutDifferentiatorsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_differentiators_sections';
  info: {
    displayName: 'Differentiators';
    icon: 'apps';
  };
  attributes: {
    items: Schema.Attribute.Component<'about.differentiator-item', true>;
    label: Schema.Attribute.String;
  };
}

export interface AboutPressSection extends Struct.ComponentSchema {
  collectionName: 'components_about_press_sections';
  info: {
    displayName: 'Press';
    icon: 'book';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewMoreText: Schema.Attribute.String;
    viewMoreUrl: Schema.Attribute.String;
  };
}

export interface AboutServiceStory extends Struct.ComponentSchema {
  collectionName: 'components_about_service_stories';
  info: {
    displayName: 'Service Story';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_about_services_sections';
  info: {
    displayName: 'Services';
    icon: 'layout';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    label: Schema.Attribute.String;
    stories: Schema.Attribute.Component<'about.service-story', true>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface AboutStatementSection extends Struct.ComponentSchema {
  collectionName: 'components_about_statement_sections';
  info: {
    displayName: 'Statement';
    icon: 'file';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    headline: Schema.Attribute.String;
    label: Schema.Attribute.String;
    rightItems: Schema.Attribute.Component<'about.text-item', true>;
  };
}

export interface AboutTextItem extends Struct.ComponentSchema {
  collectionName: 'components_about_text_items';
  info: {
    displayName: 'Text Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface BlocksEveningRecapSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_evening_recap_sections';
  info: {
    displayName: 'Evening Recap';
    icon: 'clock';
  };
  attributes: {
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface BlocksFashionGridSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_fashion_grid_sections';
  info: {
    displayName: 'Fashion Grid';
    icon: 'grid';
  };
  attributes: {
    bottomMedia: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    leftMedia: Schema.Attribute.Media<'images' | 'videos'>;
    middleMedia1: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    middleMedia2: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    middleMedia3: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    rightMedia: Schema.Attribute.Media<'images' | 'videos'>;
    topMedia: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface BlocksGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_galleries';
  info: {
    description: 'A bulk-upload friendly gallery with optional legacy support.';
    displayName: 'Gallery';
    icon: 'images';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    items: Schema.Attribute.Component<'blocks.gallery-item', true>;
  };
}

export interface BlocksGalleryItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_gallery_items';
  info: {
    displayName: 'Gallery Item';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlocksImageTextSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_text_sections';
  info: {
    displayName: 'Image + Text';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    tags: Schema.Attribute.Component<'blocks.tag', true>;
    tagsLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'align-left';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksTag extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tags';
  info: {
    displayName: 'Tag';
    icon: 'tag';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksThreeImageRow extends Struct.ComponentSchema {
  collectionName: 'components_blocks_three_image_rows';
  info: {
    description: 'A row of exactly 3 media items (image or video).';
    displayName: 'Three Image Row';
    icon: 'apps';
  };
  attributes: {
    firstMedia: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    secondMedia: Schema.Attribute.Media<'images' | 'videos'>;
    thirdMedia: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface DesignerParagraph extends Struct.ComponentSchema {
  collectionName: 'components_designer_paragraphs';
  info: {
    description: 'A text paragraph for designer bio';
    displayName: 'Paragraph';
    icon: 'align-left';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface DesignerSection extends Struct.ComponentSchema {
  collectionName: 'components_designer_sections';
  info: {
    description: "A section showcasing designer's work category";
    displayName: 'Designer Block';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DesignerSliderImage extends Struct.ComponentSchema {
  collectionName: 'components_designer_slider_images';
  info: {
    description: 'An image for the designer slider';
    displayName: 'Slider Image';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface DesignerSocialImage extends Struct.ComponentSchema {
  collectionName: 'components_designer_social_images';
  info: {
    description: 'A social media image for the designer';
    displayName: 'Social Image';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ExperienceHero extends Struct.ComponentSchema {
  collectionName: 'components_experience_heroes';
  info: {
    description: 'Hero section with a single uploaded video.';
    displayName: 'Hero (Video)';
    icon: 'play';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface HomeAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_home_accordion_items';
  info: {
    displayName: 'Accordion Item';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface HomeArtistSection extends Struct.ComponentSchema {
  collectionName: 'components_home_artist_sections';
  info: {
    displayName: 'Artist';
  };
  attributes: {
    carousal_item: Schema.Attribute.Component<'home.carousel-text-item', true>;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'videos', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeBuildMomentumSection extends Struct.ComponentSchema {
  collectionName: 'components_home_build_momentum_sections';
  info: {
    displayName: 'Build Momentum';
  };
  attributes: {
    heading: Schema.Attribute.String;
    logos: Schema.Attribute.Media<'images', true>;
    paragraphs: Schema.Attribute.Component<'home.rich-paragraph', true>;
  };
}

export interface HomeCarouselTextItem extends Struct.ComponentSchema {
  collectionName: 'components_home_carousel_text_items';
  info: {
    displayName: 'Carousel Text Item';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface HomeContactSection extends Struct.ComponentSchema {
  collectionName: 'components_home_contact_sections';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    email_placeholder: Schema.Attribute.String;
    first_name_placeholder: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    message_placeholder: Schema.Attribute.String;
    second_name_placeholder: Schema.Attribute.String;
    submit_button_text: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface HomeImageGallerySlider extends Struct.ComponentSchema {
  collectionName: 'components_home_image_gallery_sliders';
  info: {
    displayName: 'Image Gallery Slider';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface HomeLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_home_logo_items';
  info: {
    displayName: 'Logo Item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface HomeLogoSlider extends Struct.ComponentSchema {
  collectionName: 'components_home_logo_sliders';
  info: {
    displayName: 'Logo Slider';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeNolchaExperienceSection extends Struct.ComponentSchema {
  collectionName: 'components_home_nolcha_experience_sections';
  info: {
    displayName: 'Nolcha Experience';
  };
  attributes: {
    accordion_sections: Schema.Attribute.Component<'home.accordion-item', true>;
    heading: Schema.Attribute.Text;
    image_caption: Schema.Attribute.Text;
    main_image: Schema.Attribute.Media<'images'>;
  };
}

export interface HomeRichParagraph extends Struct.ComponentSchema {
  collectionName: 'components_home_rich_paragraphs';
  info: {
    displayName: 'Rich Paragraph';
  };
  attributes: {
    highlight: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    text_after: Schema.Attribute.Text;
    text_before: Schema.Attribute.Text;
  };
}

export interface HomeServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_home_service_items';
  info: {
    displayName: 'Service Item';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    label: Schema.Attribute.String;
    text: Schema.Attribute.String;
    work: Schema.Attribute.Text;
  };
}

export interface HomeServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_home_service_sections';
  info: {
    displayName: 'Service';
  };
  attributes: {
    caption: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    services: Schema.Attribute.Component<'home.service-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeSpeakerItem extends Struct.ComponentSchema {
  collectionName: 'components_home_speaker_items';
  info: {
    displayName: 'Speaker Item';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
  };
}

export interface HomeSpeakerSection extends Struct.ComponentSchema {
  collectionName: 'components_home_speaker_sections';
  info: {
    displayName: 'Speaker';
  };
  attributes: {
    speakers: Schema.Attribute.Component<'home.speaker-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeTextHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_text_hero_sections';
  info: {
    displayName: 'Text Hero';
  };
  attributes: {
    slides: Schema.Attribute.Component<'home.text-hero-slide', true>;
  };
}

export interface HomeTextHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_home_text_hero_slides';
  info: {
    displayName: 'Text Hero Slide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    logo_image: Schema.Attribute.Media<'images'>;
    main_image: Schema.Attribute.Media<'images'>;
    second_image: Schema.Attribute.Media<'images'>;
    video_url: Schema.Attribute.String;
  };
}

export interface HomeUpcomingEvent extends Struct.ComponentSchema {
  collectionName: 'components_home_upcoming_events';
  info: {
    displayName: 'Upcoming Event';
  };
  attributes: {
    date: Schema.Attribute.String;
    galleryImages: Schema.Attribute.Media<'images', true>;
    image: Schema.Attribute.Media<'images'>;
    location: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images'>;
    mainImage: Schema.Attribute.Media<'images'>;
    rsvpLink: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    venue: Schema.Attribute.Text;
    whatToExpect: Schema.Attribute.RichText;
  };
}

export interface HomeUpcomingEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_upcoming_events_sections';
  info: {
    displayName: 'Upcoming Events';
  };
  attributes: {
    events: Schema.Attribute.Component<'home.upcoming-event', true>;
    title: Schema.Attribute.String;
  };
}

export interface PressMediaCoverage extends Struct.ComponentSchema {
  collectionName: 'components_press_media_coverages';
  info: {
    displayName: 'Media Coverage';
    icon: 'link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    paragraphText: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PressPressCard extends Struct.ComponentSchema {
  collectionName: 'components_press_press_cards';
  info: {
    displayName: 'Press Card';
    icon: 'grid';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    newsPaperLogo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PressPressStatementSection extends Struct.ComponentSchema {
  collectionName: 'components_press_press_statement_sections';
  info: {
    displayName: 'Press Statement';
    icon: 'quote';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    headline: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface ProjectDetailRow extends Struct.ComponentSchema {
  collectionName: 'components_project_detail_rows';
  info: {
    description: 'A labeled project detail row with optional title, description, or tags.';
    displayName: 'Detail Row';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    tags: Schema.Attribute.Component<'blocks.tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface ProjectFeaturedContentSection extends Struct.ComponentSchema {
  collectionName: 'components_project_featured_content_sections';
  info: {
    description: 'Text content shown after a featured gallery item.';
    displayName: 'Featured Content';
    icon: 'alignJustify';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
  };
}

export interface ProjectMediaGallery extends Struct.ComponentSchema {
  collectionName: 'components_project_media_galleries';
  info: {
    description: 'Bulk upload standard gallery media and separate full-width media.';
    displayName: 'Media Gallery';
    icon: 'picture';
  };
  attributes: {
    featured_content_sections: Schema.Attribute.Component<
      'project.featured-content-section',
      true
    >;
    featured_interval: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<6>;
    featured_media: Schema.Attribute.Media<'images' | 'videos', true>;
    standard_media: Schema.Attribute.Media<'images' | 'videos', true>;
  };
}

export interface SharedFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_columns';
  info: {
    displayName: 'Footer link column';
    icon: 'link';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.footer-link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_contacts';
  info: {
    displayName: 'Footer contact block';
    icon: 'phone';
  };
  attributes: {
    address: Schema.Attribute.Text;
    company: Schema.Attribute.String;
    email: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavigationChildItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_child_items';
  info: {
    displayName: 'Navigation Child';
    icon: 'bulletList';
  };
  attributes: {
    externalUrl: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String;
  };
}

export interface SharedNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_items';
  info: {
    displayName: 'Navigation Item';
    icon: 'menu';
  };
  attributes: {
    children: Schema.Attribute.Component<'shared.navigation-child-item', true>;
    href: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
  };
}

export interface SharedPartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_items';
  info: {
    description: 'Reusable partner logo pair';
    displayName: 'Partner Item';
  };
  attributes: {
    primary: Schema.Attribute.Media<'images'>;
    secondary: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedPartnerSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_sections';
  info: {
    description: 'Reusable partner/logo wall section';
    displayName: 'Partner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    partners: Schema.Attribute.Component<'shared.partner-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'Meta tags for SEO and social sharing.';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    description: 'Reusable single text entry';
    displayName: 'Text Item';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedTweetItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_tweet_items';
  info: {
    description: 'Single tweet/X post reference';
    displayName: 'Tweet Item';
  };
  attributes: {
    tweetId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedVideoHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_hero_sections';
  info: {
    description: 'Reusable video hero configuration for marketing pages';
    displayName: 'Video Hero';
  };
  attributes: {
    firstPart: Schema.Attribute.String & Schema.Attribute.Required;
    secondPart: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface WhiteLabelCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_white_label_cta_sections';
  info: {
    description: 'White-label call to action block';
    displayName: 'CTA';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    ctaLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Started'>;
    ctaUrl: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/contact-us'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhiteLabelInfrastructureItem extends Struct.ComponentSchema {
  collectionName: 'components_white_label_infrastructure_items';
  info: {
    description: 'Single white-label infrastructure tile';
    displayName: 'Infrastructure Item';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhiteLabelInfrastructureSection
  extends Struct.ComponentSchema {
  collectionName: 'components_white_label_infrastructure_sections';
  info: {
    description: 'White-label infrastructure grid and supporting copy';
    displayName: 'Infrastructure';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    paragraph: Schema.Attribute.RichText;
    tiles: Schema.Attribute.Component<'white-label.infrastructure-item', true>;
  };
}

export interface WhiteLabelIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_white_label_intro_sections';
  info: {
    description: 'White-label intro section with image and copy';
    displayName: 'Intro';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.clients-section': AboutClientsSection;
      'about.differentiator-item': AboutDifferentiatorItem;
      'about.differentiators-section': AboutDifferentiatorsSection;
      'about.press-section': AboutPressSection;
      'about.service-story': AboutServiceStory;
      'about.services-section': AboutServicesSection;
      'about.statement-section': AboutStatementSection;
      'about.text-item': AboutTextItem;
      'blocks.evening-recap-section': BlocksEveningRecapSection;
      'blocks.fashion-grid-section': BlocksFashionGridSection;
      'blocks.gallery': BlocksGallery;
      'blocks.gallery-item': BlocksGalleryItem;
      'blocks.image-text-section': BlocksImageTextSection;
      'blocks.paragraph': BlocksParagraph;
      'blocks.tag': BlocksTag;
      'blocks.three-image-row': BlocksThreeImageRow;
      'designer.paragraph': DesignerParagraph;
      'designer.section': DesignerSection;
      'designer.slider-image': DesignerSliderImage;
      'designer.social-image': DesignerSocialImage;
      'experience.hero': ExperienceHero;
      'home.accordion-item': HomeAccordionItem;
      'home.artist-section': HomeArtistSection;
      'home.build-momentum-section': HomeBuildMomentumSection;
      'home.carousel-text-item': HomeCarouselTextItem;
      'home.contact-section': HomeContactSection;
      'home.image-gallery-slider': HomeImageGallerySlider;
      'home.logo-item': HomeLogoItem;
      'home.logo-slider': HomeLogoSlider;
      'home.nolcha-experience-section': HomeNolchaExperienceSection;
      'home.rich-paragraph': HomeRichParagraph;
      'home.service-item': HomeServiceItem;
      'home.service-section': HomeServiceSection;
      'home.speaker-item': HomeSpeakerItem;
      'home.speaker-section': HomeSpeakerSection;
      'home.text-hero-section': HomeTextHeroSection;
      'home.text-hero-slide': HomeTextHeroSlide;
      'home.upcoming-event': HomeUpcomingEvent;
      'home.upcoming-events-section': HomeUpcomingEventsSection;
      'press.media-coverage': PressMediaCoverage;
      'press.press-card': PressPressCard;
      'press.press-statement-section': PressPressStatementSection;
      'project.detail-row': ProjectDetailRow;
      'project.featured-content-section': ProjectFeaturedContentSection;
      'project.media-gallery': ProjectMediaGallery;
      'shared.footer-column': SharedFooterColumn;
      'shared.footer-contact': SharedFooterContact;
      'shared.footer-link': SharedFooterLink;
      'shared.navigation-child-item': SharedNavigationChildItem;
      'shared.navigation-item': SharedNavigationItem;
      'shared.partner-item': SharedPartnerItem;
      'shared.partner-section': SharedPartnerSection;
      'shared.seo': SharedSeo;
      'shared.text-item': SharedTextItem;
      'shared.tweet-item': SharedTweetItem;
      'shared.video-hero-section': SharedVideoHeroSection;
      'white-label.cta-section': WhiteLabelCtaSection;
      'white-label.infrastructure-item': WhiteLabelInfrastructureItem;
      'white-label.infrastructure-section': WhiteLabelInfrastructureSection;
      'white-label.intro-section': WhiteLabelIntroSection;
    }
  }
}
