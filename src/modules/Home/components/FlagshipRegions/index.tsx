'use client';
import React from 'react';

import Link from 'next/link';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';
import { urlFor } from '@/sanity/client';

import { StyledDiv } from './style';
import { HomePageType, RegionItem } from '../../home-page.types';

type Props = {
  data: HomePageType;
};

const FlagshipRegions = ({ data }: Props) => {
  const regions = data?.regionList || [];

  if (regions.length === 0) return null;

  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="regions-header">
              <Typography as="p" className="section-label">
                Where We Trek
              </Typography>
              <Typography as="h2" className="section-heading">
                Three Regions, Decades of Trail Knowledge
              </Typography>
            </div>
            <div className="regions-grid">
              {regions.map((region: RegionItem) => {
                const imageUrl = region.image
                  ? urlFor(region.image).width(600).height(450).url()
                  : '';
                return (
                  <Link
                    href={`/treks/${region.slug.current}`}
                    key={region.slug.current}
                    className="region-card"
                  >
                    <div className="region-image">
                      {imageUrl && (
                        <ImageWithFallback
                          src={imageUrl}
                          alt={region.name}
                          fill
                        />
                      )}
                      <div className="region-overlay" />
                    </div>
                    <div className="region-info">
                      <Typography as="h3" className="region-name">
                        {region.name}
                      </Typography>
                      {region.tagline && (
                        <Typography as="p" className="region-tagline">
                          {region.tagline}
                        </Typography>
                      )}
                      <div className="region-meta">
                        {region.elevation && (
                          <span className="meta-item">{region.elevation}</span>
                        )}
                        <span className="meta-item">
                          {region.trekCount} {region.trekCount === 1 ? 'trek' : 'treks'}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default FlagshipRegions;
