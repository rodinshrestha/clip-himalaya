import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const ourStoryPageType = defineType({
  name: 'ourStoryPage',
  title: 'Our Story Page',
  type: 'document',
  icon: UserIcon,
  preview: {
    prepare() {
      return { title: 'Our Story Page' };
    },
  },
  fieldsets: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'story', title: 'Company Story' },
    { name: 'values', title: 'Values & Sustainability', options: { collapsible: true } },
    { name: 'gallery', title: 'Photo Gallery', options: { collapsible: true } },
  ],
  fields: [
    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      fieldset: 'hero',
      options: { hotspot: true, accept: 'image/jpeg,image/png,image/webp' },
      description: 'Hero banner image displayed at the top of the page',
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'bannerHelperText',
      title: 'Banner Helper Text',
      type: 'string',
      fieldset: 'hero',
      initialValue: 'Learn about our journey and passion for the Himalayas',
    }),
    defineField({
      name: 'ourStoryDescription',
      title: 'Company Story',
      type: 'array',
      fieldset: 'story',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
          ],
          lists: [{ title: 'Bullet', value: 'bullet' }],
        }),
      ],
    }),

    // Values & sustainability
    defineField({
      name: 'valuesList',
      title: 'Company Values',
      type: 'array',
      fieldset: 'values',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'valueItem',
          title: 'Value',
          preview: { select: { title: 'title' } },
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sustainabilityStatement',
      title: 'Sustainability & Fair Wages',
      type: 'array',
      fieldset: 'values',
      description: 'Porter welfare, environmental stance, community impact',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [{ title: 'Bullet', value: 'bullet' }],
        }),
      ],
    }),

    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      fieldset: 'gallery',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true, accept: 'image/jpeg,image/png,image/webp' },
        }),
      ],
      description: 'Photo gallery displayed below the story content',
      validation: (Rule) => Rule.min(1).error('Add at least 1 gallery image'),
    }),
  ],
});
