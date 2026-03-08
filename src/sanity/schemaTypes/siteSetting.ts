import { defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const siteSettingType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
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
  ],
});
