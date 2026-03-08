import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const ourTeamPageType = defineType({
  name: 'ourTeamPage',
  title: 'Our Team Page',
  type: 'document',
  icon: UserIcon,
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
      name: 'bannerText1',
      title: 'Banner Text 1',
      type: 'string',
    }),
    defineField({
      name: 'bannerText2',
      title: 'Banner Text 2',
      type: 'string',
    }),
    defineField({
      name: 'bannerText3',
      title: 'Banner Text 3',
      type: 'string',
    }),

    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'string',
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
          fields: [
            defineField({
              name: 'memberImage',
              title: 'Member Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'memberName',
              title: 'Member Name',
              type: 'string',
            }),
            defineField({
              name: 'memberDesignation',
              title: 'Member Desigantion',
              type: 'string',
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
