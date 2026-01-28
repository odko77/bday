import type { Schema, Struct } from '@strapi/strapi';

export interface YubnaPage extends Struct.ComponentSchema {
  collectionName: 'components_yubna_pages';
  info: {
    displayName: 'Page';
    icon: 'bell';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'yubna.page': YubnaPage;
    }
  }
}
