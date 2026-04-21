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
    { name: 'regionsSection', title: 'Flagship Regions Section' },
    { name: 'whyChooseUs', title: 'Why Choose Us Section' },
    { name: 'contactUs', title: 'Contact Us / Adventure Specialist' },
    { name: 'testimonials', title: 'Testimonials Section' },
  ],

  fields: [
    // ── Hero Section ──
    defineField({
      name: 'video',
      title: 'Hero Background Video',
      type: 'file',
      fieldset: 'heroSection',
      options: {
        accept: 'video/*',
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

    // ── Flagship Regions Section ──
    defineField({
      name: 'regionsLabel',
      title: 'Section Label',
      type: 'string',
      fieldset: 'regionsSection',
      initialValue: 'Where We Trek',
    }),
    defineField({
      name: 'regionsHeading',
      title: 'Section Heading',
      type: 'string',
      fieldset: 'regionsSection',
      initialValue: 'Three Regions, Decades of Trail Knowledge',
    }),

    // ── Contact Us / Adventure Specialist ──
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

    // ── Why Choose Us Section ──
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
      description: 'Leave empty to use defaults. Available icons: mountain, shield, users, map-pinned, wind, camera',
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
                'mountain, shield, users, map-pinned, wind, camera',
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

    // ── Testimonials Section ──
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
