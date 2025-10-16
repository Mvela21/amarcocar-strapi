import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContactinfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_contactinfos';
  info: {
    displayName: 'contactinfo';
    icon: 'alien';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contactinfo': ContactContactinfo;
    }
  }
}
