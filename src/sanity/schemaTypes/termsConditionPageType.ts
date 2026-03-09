import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const termConditionPageType = {
  name: 'termConditionpage',
  title: 'Term and Condition Page',
  type: 'document',
  icon: UserIcon,
  preview: {
    prepare() {
      return {
        title: 'Term and Condition Page',
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
      },
    }),

    defineField({
      name: 'termConditionList',
      title: 'Term and Condition List',
      type: 'array',

      of: [
        defineArrayMember({
          name: 'Title',
          type: 'string',
        }),
      ],
    }),
  ],
};
