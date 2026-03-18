import { defineField, defineType } from 'sanity';
import { ActivityIcon } from '@sanity/icons';

export const otherActivitiesPageType = defineType({
  name: 'otherActivitiesPage',
  title: 'Other Activities Page',
  type: 'document',
  icon: ActivityIcon,
  preview: {
    prepare() {
      return {
        title: 'Other Activities Page',
      };
    },
  },
  fields: [
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/jpeg,image/png,image/webp',
      },
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
    }),
    defineField({
      name: 'bannerHelperText',
      title: 'Banner Helper Text',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
  ],
});
