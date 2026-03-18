import { defineArrayMember, defineField, defineType } from 'sanity';
import { UserIcon } from '@sanity/icons';

export const homePageType = defineType({
  name: 'home-page',
  title: 'Home Page',
  type: 'document',
  icon: UserIcon,
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      };
    },
  },
  fieldsets: [
    { name: 'heroSection', title: 'Hero Section' },
    { name: 'whyChooseUs', title: 'Why Choose Us Section' },
    { name: 'popularTrek', title: 'Popular Trek' },
    { name: 'contactUs', title: 'Contact Us' },
    { name: 'testimonials', title: 'Testimonials Section' },
  ],

  fields: [
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*', // 👈 only allows video files
      },
    }),

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'heroSection',
    }),
    defineField({
      name: 'animatedTextList',
      title: 'Animated Text List',
      type: 'array',
      fieldset: 'heroSection',

      of: [
        defineArrayMember({
          name: 'Title',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'helperText',
      title: 'Helper Text',
      type: 'string',
      fieldset: 'heroSection',
    }),
    // Second Section
    defineField({
      name: 'sectionTitle',
      title: 'Popular Trek Section Title',
      type: 'string',
      fieldset: 'popularTrek',
    }),
    defineField({
      name: 'popularTreks',
      title: 'Popular Trek List',
      type: 'array',
      fieldset: 'popularTrek',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'trekItem',
          title: 'Trek Item',
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
            defineField({
              name: 'titles',
              title: 'Trek Names',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
        }),
      ],
    }),
    // Contact US Section
    defineField({
      name: 'contactUsTitle',
      title: 'Contact Us Section Title',
      type: 'string',
      fieldset: 'contactUs',
    }),
    defineField({
      name: 'contactUsInfo',
      title: 'Contact Us Information',
      type: 'string',
      fieldset: 'contactUs',
    }),
    defineField({
      name: 'contactUsNumber',
      title: 'Contact Us Phone Number',
      type: 'string',
      fieldset: 'contactUs',
    }),

    // Why Choose Us Section
    defineField({
      name: 'whyChooseUsLabel',
      title: 'Section Label',
      type: 'string',
      fieldset: 'whyChooseUs',
      initialValue: 'Why Trek With Us',
    }),
    defineField({
      name: 'whyChooseUsHeading',
      title: 'Section Heading',
      type: 'string',
      fieldset: 'whyChooseUs',
      initialValue: 'Your Adventure, Our Expertise',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      fieldset: 'whyChooseUs',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'featureItem',
          title: 'Feature',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description:
                'Icon identifier: mountain, shield, users, map-pinned',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
          ],
        }),
      ],
    }),

    // Testimonials Section
    defineField({
      name: 'testimonialLabel',
      title: 'Section Label',
      type: 'string',
      fieldset: 'testimonials',
      initialValue: 'Testimonials',
    }),
    defineField({
      name: 'testimonialHeading',
      title: 'Section Heading',
      type: 'string',
      fieldset: 'testimonials',
      initialValue: 'The Clip Himalaya Experience',
    }),
    defineField({
      name: 'testimonialList',
      title: 'Testimonials',
      type: 'array',
      fieldset: 'testimonials',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testimonialItem',
          title: 'Testimonial',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'trek',
              title: 'Trek Name',
              type: 'string',
              description: 'e.g. "Everest Base Camp 2025"',
            }),
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              validation: (rule) => rule.min(1).max(5),
            }),
            defineField({
              name: 'review',
              title: 'Review',
              type: 'text',
              rows: 4,
            }),
          ],
        }),
      ],
    }),
  ],
});
