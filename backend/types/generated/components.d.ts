import type { Schema, Struct } from '@strapi/strapi';

export interface ServiceSectionsArtificialIntelligenceAndData
  extends Struct.ComponentSchema {
  collectionName: 'components_service_sections_artificial_intelligence_and_data';
  info: {
    displayName: 'Artificial Intelligence & Data';
  };
  attributes: {
    bottomDescription: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    Links: Schema.Attribute.Component<'service-sections.links', false>;
    topDescription: Schema.Attribute.String;
  };
}

export interface ServiceSectionsLinks extends Struct.ComponentSchema {
  collectionName: 'components_service_sections_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    Link: Schema.Attribute.JSON;
    link1: Schema.Attribute.Blocks;
    link2: Schema.Attribute.Blocks;
    link3: Schema.Attribute.Blocks;
    link4: Schema.Attribute.Blocks;
    link5: Schema.Attribute.Blocks;
    link6: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'service-sections.artificial-intelligence-and-data': ServiceSectionsArtificialIntelligenceAndData;
      'service-sections.links': ServiceSectionsLinks;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
