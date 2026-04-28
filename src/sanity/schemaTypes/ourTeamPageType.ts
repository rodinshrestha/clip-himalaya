import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const ourTeamPageType = defineType({
  name: 'ourTeamPage',
  title: 'Our Team Page',
  type: 'document',
  icon: UserIcon,
  preview: {
    prepare() {
      return {
        title: 'Our Team Page',
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
      name: 'bannerText',
      title: 'Banner Text',
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
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
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
      name: 'memberList',
      title: 'Our Members',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'memberList',
          title: 'Member List',
          preview: {
            select: {
              title: 'memberName',
              subtitle: 'memberDesignation',
              media: 'memberImage',
              showOnHomepage: 'showOnHomepage',
            },
            prepare({ title, subtitle, media, showOnHomepage }) {
              return {
                title: title || 'Unnamed Member',
                subtitle: `${subtitle || ''}${showOnHomepage ? ' · Homepage' : ''}`,
                media,
              };
            },
          },
          fields: [
            defineField({
              name: 'memberImage',
              title: 'Member Image',
              type: 'image',
              options: {
                hotspot: true,
                accept: 'image/jpeg,image/png,image/webp',
              },
            }),
            defineField({
              name: 'memberName',
              title: 'Member Name',
              type: 'string',
            }),
            defineField({
              name: 'memberDesignation',
              title: 'Member Designation',
              type: 'string',
            }),
            defineField({
              name: 'showOnHomepage',
              title: 'Show on Homepage',
              type: 'boolean',
              description: 'Display this member in the "Plan your trek with our expert" section on the homepage',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'faqList',
      title: 'FAQ',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqList',
          title: 'Faq List',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
});
