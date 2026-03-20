import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import TrekCard from '@/components/TrekCard';
import Typography from '@/components/Typography';
import { urlFor } from '@/sanity/client';
import { TrekDetailsType } from '@/modules/TrekDetails/trek-details.types';
import { ImageType } from '@/types/image.type';

import { StyledDiv } from './style';

type RegionTreksData = {
  region: {
    name: string;
    slug: { current: string };
    image: ImageType;
  };
  trekList: TrekDetailsType[];
};

type Props = {
  data: RegionTreksData;
};

const RegionTreks = ({ data }: Props) => {
  const { region, trekList = [] } = data;
  const bannerUrl = region.image
    ? urlFor(region.image).width(1920).quality(85).url()
    : '';

  return (
    <StyledDiv>
      {/* Hero Banner */}
      <div className="hero-section">
        <div className="hero-gradient" />
        {bannerUrl && (
          <ImageWithFallback
            src={bannerUrl}
            alt={`${region.name} banner`}
            fill
            priority
          />
        )}
        <div className="hero-text">
          <Container>
            <Row>
              <Col>
                <div className="hero-inner">
                  <Typography as="h1">{region.name}</Typography>
                  <Typography as="p">
                    Explore trekking packages in the {region.name}
                  </Typography>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <BreadCrumbs
        crumbs={[
          { label: 'Treks', href: '/treks' },
          { label: region.name },
        ]}
      />

      <Container>
        <Row>
          <Col>
            <div className="region-header">
              <Typography as="h2" className="region-title">
                {region.name} Packages
              </Typography>
            </div>
            <div className="trek-wrapper">
              {trekList.map((trek, i) => {
                const imgUrl = trek.image ? urlFor(trek.image).url() : '';
                return (
                  <TrekCard
                    key={i}
                    imgUrl={imgUrl}
                    title={trek.title}
                    description={trek.trekDescription}
                    rating={trek.rating}
                    difficult={trek.difficult}
                    slug={trek.slug.current}
                  />
                );
              })}
            </div>
            {trekList.length === 0 && (
              <div className="no-results">
                <Typography as="p">
                  No treks available in this region yet. Check back soon!
                </Typography>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default RegionTreks;
