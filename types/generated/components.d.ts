import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksEveningRecapSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_evening_recap_sections';
  info: {
    displayName: 'Evening Recap Section';
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
    displayName: 'Fashion Grid Section';
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
    description: 'A reorderable list of images.';
    displayName: 'Gallery';
    icon: 'images';
  };
  attributes: {
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
    displayName: 'Image + Text Section';
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
    displayName: 'Section';
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
    displayName: 'Partner Section';
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

export interface SharedVideoHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_hero_sections';
  info: {
    description: 'Reusable video hero configuration for marketing pages';
    displayName: 'Video Hero Section';
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
    displayName: 'CTA Section';
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
    displayName: 'Infrastructure Section';
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
    displayName: 'Intro Section';
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
      'press.media-coverage': PressMediaCoverage;
      'press.press-card': PressPressCard;
      'shared.partner-item': SharedPartnerItem;
      'shared.partner-section': SharedPartnerSection;
      'shared.seo': SharedSeo;
      'shared.text-item': SharedTextItem;
      'shared.video-hero-section': SharedVideoHeroSection;
      'white-label.cta-section': WhiteLabelCtaSection;
      'white-label.infrastructure-item': WhiteLabelInfrastructureItem;
      'white-label.infrastructure-section': WhiteLabelInfrastructureSection;
      'white-label.intro-section': WhiteLabelIntroSection;
    }
  }
}
