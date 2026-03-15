'use client';
import React from 'react';

import TestimonialCard from '@/components/TestimonialCard';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { HomePageType, TestimonialItem } from '../../home-page.types';

const defaultTestimonials: TestimonialItem[] = [
  {
    name: 'James Chen',
    trek: 'Everest Base Camp 2025',
    rating: 5,
    review:
      'From the initial planning to standing at base camp, Clip Himalaya exceeded all my expectations. Their guides are world-class and genuinely care about your experience.',
  },
  {
    name: 'Sarah Mitchell',
    trek: 'Annapurna Circuit 2025',
    rating: 5,
    review:
      'The organization, team expertise, and staff are second to none. The support we had from Kathmandu to the summit of Thorong La was outstanding. Highly recommended!',
  },
  {
    name: 'Marco Rossi',
    trek: 'Langtang Valley 2024',
    rating: 5,
    review:
      'Thank you from the bottom of my heart to the whole Clip Himalaya team. The guides, porters, lodges, food — everything was perfect. I felt reassured the whole way.',
  },
  {
    name: 'Emily Ward',
    trek: 'Manaslu Circuit 2024',
    rating: 4,
    review:
      'Great trip. Very well organized and the whole team handled the trek beautifully. The Larkya La crossing was the highlight of my life. Will definitely come back!',
  },
  {
    name: 'Yuki Tanaka',
    trek: 'Upper Mustang 2025',
    rating: 5,
    review:
      'Upper Mustang was a dream come true. The ancient monasteries, the red cliffs, and the warm hospitality of the locals — Clip Himalaya made it all seamless.',
  },
  {
    name: 'David Müller',
    trek: 'Gokyo Lakes 2024',
    rating: 5,
    review:
      'Standing on Gokyo Ri at sunrise, seeing Everest, Lhotse, and Makalu — it was surreal. The team took care of every detail so I could just enjoy the moment.',
  },
  {
    name: 'Priya Sharma',
    trek: 'Annapurna Base Camp 2025',
    rating: 5,
    review:
      'As a solo female trekker, safety was my top priority. Clip Himalaya made me feel completely at ease. The guides were respectful, experienced, and so much fun!',
  },
  {
    name: 'Liam O\'Brien',
    trek: 'Everest Three Passes 2024',
    rating: 5,
    review:
      'The Three Passes trek was the toughest and most rewarding thing I have ever done. Clip Himalaya\'s planning and support were absolutely crucial to my success.',
  },
];

type Props = {
  data: HomePageType;
};

const Testimonial = ({ data }: Props) => {
  const {
    testimonialLabel = 'Testimonials',
    testimonialHeading = 'The Clip Himalaya Experience',
    testimonialList,
  } = data?.homeData || {};

  const displayTestimonials =
    testimonialList && testimonialList.length > 0
      ? testimonialList
      : defaultTestimonials;

  return (
    <StyledDiv>
      <div className="testimonial-wrapper">
        <div className="section-title-wrapper">
          <Typography as="p" className="section-label">
            {testimonialLabel}
          </Typography>
          <Typography as="h2" className="section-heading">
            {testimonialHeading}
          </Typography>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {displayTestimonials.map((t, i) => (
              <TestimonialCard
                key={`a-${i}`}
                name={t.name}
                trek={t.trek}
                rating={t.rating}
                review={t.review}
              />
            ))}
            {displayTestimonials.map((t, i) => (
              <TestimonialCard
                key={`b-${i}`}
                name={t.name}
                trek={t.trek}
                rating={t.rating}
                review={t.review}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Testimonial;
