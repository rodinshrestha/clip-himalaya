'use client';
import React from 'react';

import {
  Mountain,
  Shield,
  Users,
  MapPinned,
  type LucideIcon,
} from 'lucide-react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { HomePageType, FeatureItem } from '../../home-page.types';

const iconMap: Record<string, LucideIcon> = {
  mountain: Mountain,
  shield: Shield,
  users: Users,
  'map-pinned': MapPinned,
};

const defaultFeatures: FeatureItem[] = [
  {
    icon: 'mountain',
    title: 'Local Expertise',
    description:
      'Born and raised in the Himalayas, our guides know every trail, teahouse, and hidden viewpoint.',
  },
  {
    icon: 'shield',
    title: 'Safety First',
    description:
      'Certified guides, proper acclimatization schedules, and emergency protocols on every trek.',
  },
  {
    icon: 'users',
    title: 'Small Groups',
    description:
      'We keep groups small for a personalized experience and minimal environmental impact.',
  },
  {
    icon: 'map-pinned',
    title: 'Custom Itineraries',
    description:
      'Every trek is tailored to your pace, interests, and fitness level. No cookie-cutter trips.',
  },
];

type Props = {
  data: HomePageType;
};

const WhyChooseUs = ({ data }: Props) => {
  const {
    whyChooseUsLabel = 'Why Trek With Us',
    whyChooseUsHeading = 'Your Adventure, Our Expertise',
    features,
  } = data?.homeData || {};

  const displayFeatures =
    features && features.length > 0 ? features : defaultFeatures;

  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="why-choose-us-header">
              <Typography as="p" className="section-label">
                {whyChooseUsLabel}
              </Typography>
              <Typography as="h2" className="section-heading">
                {whyChooseUsHeading}
              </Typography>
            </div>
            <div className="features-grid">
              {displayFeatures.map((feature) => {
                const IconComponent =
                  iconMap[feature.icon?.toLowerCase()] || Mountain;
                return (
                  <div className="feature-item" key={feature.title}>
                    <div className="feature-icon">
                      <IconComponent size={28} strokeWidth={1.5} />
                    </div>
                    <Typography as="h6" className="feature-title">
                      {feature.title}
                    </Typography>
                    <Typography as="p" className="feature-description">
                      {feature.description}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default WhyChooseUs;
