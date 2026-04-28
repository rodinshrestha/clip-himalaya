import { defineField } from 'sanity';

export const seoFieldset = { name: 'seo', title: 'SEO & Social Sharing', options: { collapsible: true, collapsed: true } };

export const seoFields = [
  defineField({
    name: 'seoTitle',
    title: 'SEO Title',
    type: 'string',
    description: 'Override the page title for search engines (max 60 characters)',
    fieldset: 'seo',
    validation: (Rule) => Rule.max(60).warning('Keep under 60 characters for best results'),
  }),
  defineField({
    name: 'seoDescription',
    title: 'SEO Description',
    type: 'text',
    rows: 3,
    description: 'Override the meta description for search engines (max 160 characters)',
    fieldset: 'seo',
    validation: (Rule) => Rule.max(160).warning('Keep under 160 characters for best results'),
  }),
  defineField({
    name: 'ogImage',
    title: 'Social Sharing Image',
    type: 'image',
    description: 'Image shown when shared on social media (recommended: 1200x630)',
    fieldset: 'seo',
    options: {
      accept: 'image/jpeg,image/png,image/webp',
    },
  }),
];
