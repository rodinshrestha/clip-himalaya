import React from 'react';
import Link from 'next/link';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';
import { urlFor } from '@/sanity/client';
import { TrekkingRegionType } from '../../treks.type';

import { StyledDiv } from './style';

type Props = {
  regions: TrekkingRegionType[];
};

const TrekkingRegions = ({ regions }: Props) => {
  if (!regions || regions.length === 0) return null;

  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="section-header">
              <Typography as="h2" className="section-title">
                Trekking Regions
              </Typography>
            </div>
            <div className="region-grid">
              {regions.map((region, i) => {
                const imgUrl = region.image
                  ? urlFor(region.image).width(600).height(450).fit('crop').crop('entropy').url()
                  : '';
                const slug = region.slug?.current || '';
                return (
                  <Link href={`/treks/${slug}`} key={i}>
                    <div className="region-card">
                      <ImageWithFallback
                        src={imgUrl}
                        alt={region.name}
                        fill
                      />
                      <div className="region-overlay" />
                      <div className="region-info">
                        <Typography as="p" className="region-count">
                          {region.trekCount}{' '}
                          {region.trekCount === 1 ? 'Package' : 'Packages'}
                        </Typography>
                        <Typography as="h3" className="region-name">
                          {region.name}
                        </Typography>
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

export default TrekkingRegions;
