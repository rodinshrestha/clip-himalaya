import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const homePageType = defineType({
  name: 'home-page',
  title: 'Home Page',
  type: 'document',
  icon: UserIcon,
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
  fieldsets: [
    { name: 'heroSection', title: 'Hero Section' },
    { name: 'popularTrek', title: 'Popular Trek' },
    { name: 'contactUs', title: 'Contact Us' },
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'heroSection',
    }),
    defineField({
      name: 'animatedTextList',
      title: 'Animated Text List',
      type: 'array',
      fieldset: 'heroSection',

      of: [
        defineArrayMember({
          name: 'Title',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'helperText',
      title: 'Helper Text',
      type: 'string',
      fieldset: 'heroSection',
    }),
    // Second Section
    defineField({
      name: 'sectionTitle',
      title: 'Popular Trek Section Title',
      type: 'string',
      fieldset: 'popularTrek',
    }),
    defineField({
      name: 'popularTreks',
      title: 'Popular Trek List',
      type: 'array',
      fieldset: 'popularTrek',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'trekItem',
          title: 'Trek Item',
          fields: [
            defineField({
              name: 'image',
              title: 'Trek Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'titles',
              title: 'Trek Names',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        }),
      ],
    }),
    // Contact US Section
    defineField({
      name: 'contactUsTitle',
      title: 'Contact Us Section Title',
      type: 'string',
      fieldset: 'contactUs',
    }),
    defineField({
      name: 'contactUsInfo',
      title: 'Contact Us Information',
      type: 'string',
      fieldset: 'contactUs',
    }),
    defineField({
      name: 'contactUsNumber',
      title: 'Contact Us Phone Number',
      type: 'string',
      fieldset: 'contactUs',
    }),
  ],
});
