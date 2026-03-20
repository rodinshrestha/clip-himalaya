import { defineArrayMember, defineField } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const privacyPolicyPageType = {
  name: 'privacyPolicyPage',
  title: 'Privacy Policy Page',
  type: 'document',
  icon: UserIcon,
  preview: {
    prepare() {
      return {
        title: 'Privacy Policy Page',
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
      initialValue: 'Privacy Policy',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'string',
      description: 'e.g. "March 20, 2026"',
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'section',
          title: 'Section',
          preview: {
            select: { title: 'title' },
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Number', value: 'number' },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
};
