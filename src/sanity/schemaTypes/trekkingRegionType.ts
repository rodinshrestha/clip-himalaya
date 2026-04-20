import { defineArrayMember, defineField, defineType } from 'sanity';
import { PinIcon } from '@sanity/icons';
import { AutoSlugInput } from '@/components/AutoSlugInputSanity';
import { seoFields, seoFieldset } from './objects/seoFields';

export const trekkingRegionType = defineType({
  name: 'trekkingRegion',
  title: 'Trekking Region',
  type: 'document',
  icon: PinIcon,
  fieldsets: [
    { name: 'basic', title: 'Basic Information' },
    { name: 'content', title: 'Region Content', options: { collapsible: true } },
    seoFieldset,
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Region Name',
      type: 'string',
      fieldset: 'basic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      fieldset: 'basic',
      options: {
        source: 'name',
        maxLength: 96,
      },
      components: {
        input: AutoSlugInput,
      },
    }),
    defineField({
      name: 'image',
      title: 'Region Image',
      type: 'image',
      fieldset: 'basic',
      description: 'Accepted formats: JPG, PNG, WebP (max 5MB)',
      options: {
        hotspot: true,
        accept: 'image/jpeg,image/png,image/webp',
      },
      validation: (Rule) =>
        Rule.required().assetRequired().custom((image) => {
          if (!image?.asset?._ref) return true;
          const ref = image.asset._ref;
          const format = ref.split('-').pop()?.split('?')[0];
          const allowed = ['jpg', 'jpeg', 'png', 'webp'];
          if (format && !allowed.includes(format)) {
            return `Invalid image format "${format}". Please upload JPG, PNG, or WebP.`;
          }
          return true;
        }),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      fieldset: 'basic',
      description: 'Lower numbers appear first',
    }),

    // Rich content fields
    defineField({
      name: 'tagline',
      title: 'Region Tagline',
      type: 'string',
      fieldset: 'content',
      description: 'One-sentence hook for this region (shown in hero)',
    }),
    defineField({
      name: 'description',
      title: 'Region Description',
      type: 'array',
      fieldset: 'content',
      description: 'Character of the region — geography, what makes it distinct',
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
    defineField({
      name: 'culture',
      title: 'Culture & People',
      type: 'text',
      fieldset: 'content',
      rows: 4,
      description: 'Sherpa, Gurung-Magar, Nubri-Tsum etc. — who lives here, what to expect',
    }),
    defineField({
      name: 'bestSeasons',
      title: 'Best Seasons',
      type: 'text',
      fieldset: 'content',
      rows: 3,
      description: 'When to go and why — be specific about months and conditions',
    }),
    defineField({
      name: 'whoItSuits',
      title: 'Who This Region Suits',
      type: 'text',
      fieldset: 'content',
      rows: 3,
      description: 'Experience level, fitness, interests — who should trek here',
    }),
    defineField({
      name: 'elevation',
      title: 'Elevation Range',
      type: 'string',
      fieldset: 'content',
      description: 'e.g. "2,800m – 5,364m"',
    }),

    ...seoFields,
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
