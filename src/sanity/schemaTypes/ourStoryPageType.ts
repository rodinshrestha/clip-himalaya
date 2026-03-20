import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const ourStoryPageType = defineType({
  name: 'ourStoryPage',
  title: 'Our Story Page',
  type: 'document',
  icon: UserIcon,
  preview: {
    prepare() {
      return {
        title: 'Our Story Page',
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
      description: 'Hero banner image displayed at the top of the page',
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'bannerHelperText',
      title: 'Banner Helper Text',
      type: 'string',
      initialValue: 'Learn about our journey and passion for the Himalayas',
    }),
    defineField({
      name: 'ourStoryDescription',
      title: 'Our Story Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
            accept: 'image/jpeg,image/png,image/webp',
          },
        }),
      ],
      description: 'Photo gallery displayed below the story content',
      validation: (Rule) => Rule.min(1).error('Add at least 1 gallery image'),
    }),
  ],
});
