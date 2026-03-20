import { defineField, defineType } from 'sanity';
import { WrenchIcon } from '@sanity/icons';

export const siteSettingType = defineType({
  name: 'siteSettings',
  title: 'Global Settings',
  type: 'document',
  icon: WrenchIcon,
  preview: {
    prepare() {
      return {
        title: 'Site Global Setting',
      };
    },
  },
  fields: [
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/jpeg,image/png,image/webp',
      },
    }),
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'siteHelperText',
      title: 'Site Helper Text',
      type: 'string',
    }),
    defineField({
      name: 'footerLogoImage',
      title: 'Footer Logo Image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/jpeg,image/png,image/webp',
      },
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
      description: 'Short description shown below the logo in the footer',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'gmail',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok URL',
      type: 'url',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code, e.g. +977-9826756544',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Copyright Text',
      type: 'string',
    }),
  ],
});
