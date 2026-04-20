import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';
import { AutoSlugInput } from '@/components/AutoSlugInputSanity';
import { seoFields, seoFieldset } from './objects/seoFields';

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
    { name: 'quickFacts', title: 'Quick Facts', options: { collapsible: true } },
    { name: 'keyHighlights', title: 'Key Highlights', options: { collapsible: true } },
    { name: 'itineraryDetails', title: 'Itinerary Details', options: { collapsible: true } },
    { name: 'costInclude', title: 'Cost Include', options: { collapsible: true } },
    { name: 'costExclude', title: 'Cost Exclude', options: { collapsible: true } },
    { name: 'fitnessAndAccommodation', title: 'Fitness, Accommodation & Permits', options: { collapsible: true } },
    { name: 'essentialTips', title: 'Essential Tips', options: { collapsible: true } },
    { name: 'packingAndFaq', title: 'Packing & FAQ', options: { collapsible: true } },
    { name: 'imageGallery', title: 'Image Gallery', options: { collapsible: true } },
    seoFieldset,
  ],
  fields: [
    // ── Basic Information ──
    defineField({
      name: 'image',
      title: 'Trek Image',
      type: 'image',
      description: 'Accepted formats: JPG, PNG, WebP',
      options: { hotspot: true, accept: 'image/jpeg,image/png,image/webp' },
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
      options: { source: 'title', maxLength: 96 },
      components: { input: AutoSlugInput },
    }),
    defineField({
      name: 'helperTitle',
      title: 'Hero Hook',
      type: 'string',
      fieldset: 'basicInformation',
      description: 'One honest sentence shown below the title in the hero section',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      fieldset: 'basicInformation',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'difficult',
      title: 'Difficulty',
      type: 'string',
      fieldset: 'basicInformation',
      options: {
        list: ['Easy', 'Moderate', 'Moderate-Hard', 'Hard', 'Strenuous'],
      },
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

    // ── Quick Facts ──
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      fieldset: 'quickFacts',
      description: 'e.g. "14 days"',
    }),
    defineField({
      name: 'maxElevation',
      title: 'Max Elevation',
      type: 'string',
      fieldset: 'quickFacts',
      description: 'e.g. "5,364m (Everest Base Camp)"',
    }),
    defineField({
      name: 'bestSeasons',
      title: 'Best Seasons',
      type: 'string',
      fieldset: 'quickFacts',
      description: 'e.g. "March-May, September-November"',
    }),
    defineField({
      name: 'startPoint',
      title: 'Start Point',
      type: 'string',
      fieldset: 'quickFacts',
      description: 'e.g. "Lukla (2,860m)"',
    }),
    defineField({
      name: 'endPoint',
      title: 'End Point',
      type: 'string',
      fieldset: 'quickFacts',
      description: 'e.g. "Lukla (2,860m)"',
    }),
    defineField({
      name: 'groupSize',
      title: 'Group Size',
      type: 'string',
      fieldset: 'quickFacts',
      description: 'e.g. "2–12 people"',
    }),
    defineField({
      name: 'permits',
      title: 'Permits Required',
      type: 'string',
      fieldset: 'quickFacts',
      description: 'e.g. "Sagarmatha National Park entry + TIMS card"',
    }),

    // ── Key Highlights ──
    defineField({
      name: 'keyHighlights',
      title: 'Key Highlights',
      type: 'array',
      fieldset: 'keyHighlights',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'keyHighlightList',
          title: 'Key Highlight',
          preview: { select: { title: 'title' } },
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [defineArrayMember({ type: 'block', styles: [{ title: 'Normal', value: 'normal' }], lists: [] })],
            }),
          ],
        }),
      ],
    }),

    // ── Itinerary Details ──
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
            select: { title: 'itineraryTitle', sub: 'elevation' },
            prepare({ title, sub }) {
              return { title, subtitle: sub || '' };
            },
          },
          fields: [
            defineField({ name: 'itineraryTitle', title: 'Day Title', type: 'string' }),
            defineField({
              name: 'elevation',
              title: 'Elevation',
              type: 'string',
              description: 'e.g. "2,860m → 3,440m (+580m)"',
            }),
            defineField({
              name: 'walkingHours',
              title: 'Walking Hours',
              type: 'string',
              description: 'e.g. "5–6 hours"',
            }),
            defineField({
              name: 'itineraryDescription',
              title: 'Day Description',
              type: 'array',
              of: [defineArrayMember({ type: 'block', styles: [{ title: 'Normal', value: 'normal' }], lists: [] })],
            }),
          ],
        }),
      ],
    }),

    // ── Cost Include ──
    defineField({
      name: 'costInclude',
      title: 'Cost Include',
      fieldset: 'costInclude',
      type: 'array',
      of: [defineArrayMember({ name: 'Title', type: 'string' })],
    }),

    // ── Cost Exclude ──
    defineField({
      name: 'costExclude',
      title: 'Cost Exclude',
      fieldset: 'costExclude',
      type: 'array',
      of: [defineArrayMember({ name: 'Title', type: 'string' })],
    }),

    // ── Fitness, Accommodation & Permits ──
    defineField({
      name: 'fitnessGuidance',
      title: 'Difficulty & Fitness Guidance',
      type: 'text',
      fieldset: 'fitnessAndAccommodation',
      rows: 5,
      description: 'Be honest about what fitness level is needed',
    }),
    defineField({
      name: 'accommodationNotes',
      title: 'Accommodation & Food',
      type: 'text',
      fieldset: 'fitnessAndAccommodation',
      rows: 5,
      description: 'What teahouses are like, food options, charging, wifi etc.',
    }),
    defineField({
      name: 'permitDetails',
      title: 'Permits & TIMS Details',
      type: 'text',
      fieldset: 'fitnessAndAccommodation',
      rows: 4,
      description: 'Costs, where to get them, what we handle',
    }),

    // ── Essential Tips ──
    defineField({
      name: 'essentialTips',
      title: 'Essential Tips',
      type: 'array',
      fieldset: 'essentialTips',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'essentialTipsList',
          title: 'Tip',
          preview: { select: { title: 'title' } },
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [defineArrayMember({ type: 'block', styles: [{ title: 'Normal', value: 'normal' }], lists: [] })],
            }),
          ],
        }),
      ],
    }),

    // ── Packing & FAQ ──
    defineField({
      name: 'packingEssentials',
      title: 'Packing Essentials',
      type: 'array',
      fieldset: 'packingAndFaq',
      description: 'Short list — not a 60-item checklist',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'faqList',
      title: 'Trek FAQ',
      type: 'array',
      fieldset: 'packingAndFaq',
      description: 'Questions specific to THIS trek',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          title: 'FAQ',
          preview: { select: { title: 'question' } },
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string' }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4 }),
          ],
        }),
      ],
    }),

    // ── Image Gallery ──
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      fieldset: 'imageGallery',
      options: { layout: 'grid' },
      of: [
        defineArrayMember({
          type: 'object',
          name: 'imageGalleryList',
          title: 'Gallery Image',
          preview: {
            select: { media: 'image' },
            prepare({ media }) {
              return { title: 'Gallery Image', media };
            },
          },
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true, accept: 'image/jpeg,image/png,image/webp' },
            }),
          ],
        }),
      ],
    }),

    ...seoFields,
  ],
});
