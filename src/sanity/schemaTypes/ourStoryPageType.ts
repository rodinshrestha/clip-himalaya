import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const ourStoryPageType = defineType({
  name: 'ourStoryPage',
  title: 'Our Story Page',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(10)
          .error('You must upload at least 10 images'),
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
  ],
});
