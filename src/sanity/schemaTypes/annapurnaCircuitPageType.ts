import { defineField, defineType, defineArrayMember } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const annapurnaCircuitPageType = defineType({
  name: 'annapurnaCircuitPage',
  title: 'Annapurna Circuit Page',
  type: 'document',
  icon: UserIcon,
  fieldsets: [{ name: 'trekkingFact', title: 'Trekking Fact' }],
  preview: {
    prepare() {
      return {
        title: 'Annapurna Circuit Page',
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
        accept: 'image/jpeg,image/png,image/webp',
      },
    }),
    defineField({
      name: 'itineraryDetails',
      title: 'Itinerary Details',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'trekItem',
          title: 'Trek Item',
          fields: [
            defineField({
              name: 'day',
              title: 'Day',
              type: 'string',
            }),
            defineField({
              name: 'elevation',
              title: 'Elevation',
              type: 'string',
            }),
            defineField({
              name: 'details',
              title: 'Details',
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

    defineField({
      name: 'bestSeason',
      title: 'Best Season',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'transportation',
      title: 'Transportation',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'accommodation',
      title: 'Accommodation',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'highestPoint',
      title: 'Highest Point',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'groupSize',
      title: 'Group Sie',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'culture',
      title: 'Culture',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'himalayanSight',
      title: 'Himalayan Sight',
      type: 'string',
      fieldset: 'trekkingFact',
    }),
    defineField({
      name: 'attraction',
      title: 'Attraction',
      type: 'string',
      fieldset: 'trekkingFact',
    }),

    defineField({
      name: 'whyBookWithUs',
      title: 'Why Book With Us',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'Title',
          type: 'string',
        }),
      ],
    }),
  ],
});
