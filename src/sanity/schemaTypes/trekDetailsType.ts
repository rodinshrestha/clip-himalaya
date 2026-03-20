import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';
import { AutoSlugInput } from '@/components/AutoSlugInputSanity';

export const trekDetailsType = defineType({
  name: 'trekDetails',
  title: 'Trek List',
  type: 'document',
  icon: UserIcon,
  preview: {
    select: {
      title: 'title',
      subtitle: 'region.name',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Region',
      name: 'regionAsc',
      by: [{ field: 'region.name', direction: 'asc' }],
    },
  ],
  fieldsets: [
    { name: 'basicInformation', title: 'Basic Information' },
    { name: 'keyHighlights', title: 'Key Highlights' },
    { name: 'itineraryDetails', title: 'Itinerary Details' },
    { name: 'costInclude', title: 'Cost Include' },
    { name: 'costExclude', title: 'Cost Exclude' },
    { name: 'essentialTips', title: 'Essential Tips' },
    { name: 'imageGallery', title: 'Image Gallery' },
  ],
  fields: [
    defineField({
      name: 'image',
      title: 'Trek Image',
      type: 'image',
      description: 'Accepted formats: JPG, PNG, WebP',
      options: {
        hotspot: true,
        accept: 'image/jpeg,image/png,image/webp',
      },
      fieldset: 'basicInformation',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'basicInformation',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      fieldset: 'basicInformation',
      options: {
        source: 'title',
        maxLength: 96,
      },
      components: {
        input: AutoSlugInput, // 👈 auto fills from title
      },
      // readOnly: true,
    }),
    defineField({
      name: 'helperTitle',
      title: 'Helper Title',
      type: 'string',
      fieldset: 'basicInformation',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      fieldset: 'basicInformation',
      options: {
        list: [
          { title: '⭐ 1 - Poor', value: 1 },
          { title: '⭐⭐ 2 - Fair', value: 2 },
          { title: '⭐⭐⭐ 3 - Good', value: 3 },
          { title: '⭐⭐⭐⭐ 4 - Great', value: 4 },
          { title: '⭐⭐⭐⭐⭐ 5 - Excellent', value: 5 },
        ],
        layout: 'radio', // 👈 or 'dropdown'
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'difficult',
      title: 'Difficult',
      type: 'string',
      fieldset: 'basicInformation',
    }),
    defineField({
      name: 'region',
      title: 'Trekking Region',
      type: 'reference',
      to: [{ type: 'trekkingRegion' }],
      fieldset: 'basicInformation',
    }),
    defineField({
      name: 'trekDescription',
      title: 'Trek Description',
      type: 'array',
      fieldset: 'basicInformation',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        }),
      ],
    }),

    // key highlights
    defineField({
      name: 'keyHighlights',
      title: 'Key Highlights',
      type: 'array',
      fieldset: 'keyHighlights',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'keyHighlightList',
          title: 'Key Highlight List',
          preview: {
            select: { title: 'title' },
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  lists: [],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Itinerary Details
    defineField({
      name: 'itineraryDetails',
      title: 'Itinerary Details',
      type: 'array',
      fieldset: 'itineraryDetails',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'itineraryDetailsList',
          title: 'Itinerary Day',
          preview: {
            select: { title: 'itineraryTitle' },
          },
          fields: [
            defineField({
              name: 'itineraryTitle',
              title: 'Itinerary Title',
              type: 'string',
            }),
            defineField({
              name: 'itineraryDescription',
              title: 'Itinerary Description',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  lists: [],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Cost Include
    defineField({
      name: 'costInclude',
      title: 'Cost Include',
      fieldset: 'costInclude',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'Title',
          type: 'string',
        }),
      ],
    }),

    // Cost Exclude
    defineField({
      name: 'costExclude',
      title: 'Cost Exclude',
      fieldset: 'costExclude',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'Title',
          type: 'string',
        }),
      ],
    }),

    // key highlights
    defineField({
      name: 'essentialTips',
      title: 'Essential Tips',
      type: 'array',
      fieldset: 'essentialTips',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'essentialTipsList',
          title: 'Essential Tips List',
          preview: {
            select: { title: 'title' },
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'block',
                  styles: [{ title: 'Normal', value: 'normal' }],
                  lists: [],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Image Gallery
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      fieldset: 'imageGallery',
      options: {
        layout: 'grid',
      },
      of: [
        defineArrayMember({
          type: 'object',
          name: 'imageGalleryList',
          title: 'Image Gallery List',
          preview: {
            select: {
              media: 'image',
            },
            prepare({ media }) {
              return {
                title: 'Gallery Image',
                media,
              };
            },
          },
          fields: [
            defineField({
              name: 'image',
              title: 'Trek Image',
              type: 'image',
              options: {
                hotspot: true,
                accept: 'image/jpeg,image/png,image/webp',
              },
            }),
          ],
        }),
      ],
    }),
  ],
});
