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
      name: 'address',
      title: 'address',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'gmail',
      title: 'Gmail',
      type: 'string',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
  ],
});
