import { defineField, defineType } from 'sanity';
import { PinIcon } from '@sanity/icons';
import { AutoSlugInput } from '@/components/AutoSlugInputSanity';

export const trekkingRegionType = defineType({
  name: 'trekkingRegion',
  title: 'Trekking Region',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Region Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
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
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
