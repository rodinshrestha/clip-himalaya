import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const contactUsPageType = defineType({
  name: 'contactUsPage',
  title: 'Contact Us Page',
  type: 'document',
  icon: UserIcon,
  fields: [
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
