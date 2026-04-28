import React from 'react';

import { PortableText } from '@portabletext/react';

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
import { BlockType } from '@/types/block.type';

import { StyledDiv } from './style';

type RegionType = {
  name: string;
  slug: { current: string };
  image: ImageType;
  tagline?: string;
  description?: BlockType[];
  culture?: string;
  bestSeasons?: string;
  whoItSuits?: string;
  elevation?: string;
};

type RegionTreksData = {
  region: RegionType;
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

  const hasContent = region.description || region.culture || region.bestSeasons || region.whoItSuits;

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
                    {region.tagline || `Explore trekking packages in the ${region.name}`}
                  </Typography>
                  {region.elevation && (
                    <Typography as="p" className="elevation-badge">
                      {region.elevation}
                    </Typography>
                  )}
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

      {/* Region Character Section */}
      {hasContent && (
        <Container>
          <Row>
            <Col>
              <div className="region-content">
                {region.description && (
                  <div className="region-description">
                    <PortableText value={region.description as any} />
                  </div>
                )}

                <div className="region-info-grid">
                  {region.culture && (
                    <div className="info-card">
                      <Typography as="h3">Culture & People</Typography>
                      <Typography as="p">{region.culture}</Typography>
                    </div>
                  )}
                  {region.bestSeasons && (
                    <div className="info-card">
                      <Typography as="h3">Best Seasons</Typography>
                      <Typography as="p">{region.bestSeasons}</Typography>
                    </div>
                  )}
                  {region.whoItSuits && (
                    <div className="info-card">
                      <Typography as="h3">Who It Suits</Typography>
                      <Typography as="p">{region.whoItSuits}</Typography>
                    </div>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      {/* Trek Listing */}
      <Container>
        <Row>
          <Col>
            <div className="region-header">
              <Typography as="h2" className="region-title">
                Treks in {region.name}
              </Typography>
              <Typography as="p" className="trek-count">
                {trekList.length} {trekList.length === 1 ? 'trek' : 'treks'} available
              </Typography>
            </div>
            <div className="trek-wrapper">
              {trekList.map((trek, i) => {
                const imgUrl = trek.image ? urlFor(trek.image).width(600).quality(80).url() : '';
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
