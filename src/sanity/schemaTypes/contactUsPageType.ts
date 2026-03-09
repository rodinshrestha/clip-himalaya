import { defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const contactUsPageType = defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  icon: UserIcon,
  preview: {
    prepare() {
      return {
        title: 'Contact Us Page',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'helperText',
      title: 'Helper Text',
      type: 'string',
    }),

    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'mobileNumber',
      title: 'Mobile Number',
      type: 'string',
    }),

    defineField({
      name: 'officeHour',
      title: 'Office Hour',
      type: 'string',
    }),
  ],
});
