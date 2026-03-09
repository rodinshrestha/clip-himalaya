import { UserIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'User Inquery',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
  ],
});
