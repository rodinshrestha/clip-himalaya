import { UsersIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const contactSubmissionType = defineType({
  name: 'contactSubmission',
  title: 'User Inquiry',
  type: 'document',
  icon: UsersIcon,
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      isRead: 'isRead',
    },
    prepare({ title, subtitle, isRead }) {
      return {
        title: `${isRead ? '' : '● '}${title || 'No Name'}`,
        subtitle: isRead ? subtitle || '' : `NEW — ${subtitle || ''}`,
      };
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'createdAtDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  fields: [
    defineField({
      name: 'isRead',
      title: 'Read',
      type: 'boolean',
      initialValue: false,
      hidden: true,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    }),
  ],
});
