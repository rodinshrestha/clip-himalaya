'use client';
import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { OurStoryType } from './our-story.type';
import { urlFor } from '@/sanity/client';
import Overlay from '@/components/Overlay';
import { PhotoProvider, PhotoView } from 'react-photo-view';

type Props = {
  data: OurStoryType;
};

const OurStory = ({ data }: Props) => {
  const {
    bannerImage,
    bannerTitle = 'Our Story',
    bannerHelperText = '',
    ourStoryDescription = [],
    galleryImages = [],
  } = data || {};

  const bannerUrl = bannerImage
    ? urlFor(bannerImage).width(1920).quality(85).url()
    : '';

  return (
    <StyledDiv>
      {/* Hero Banner */}
      <div className="hero-section">
        <div className="hero-gradient" />
        {bannerUrl && (
          <ImageWithFallback src={bannerUrl} alt="our-story-banner" fill />
        )}
        <Overlay />

        <div className="hero-text">
          <Container>
            <Row>
              <Col>
                <div className="hero-inner">
                  {bannerTitle && (
                    <Typography as="h1">{bannerTitle}</Typography>
                  )}
                  {bannerHelperText && (
                    <Typography as="p">{bannerHelperText}</Typography>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <BreadCrumbs crumbs={[{ label: 'Our Story' }]} />

      {/* Story Content */}
      <div className="story-section">
        <Container>
          <Row>
            <Col>
              <div className="story-content">
                <Typography as="p" className="section-label">
                  Who We Are
                </Typography>
                <Typography as="h3" className="section-heading">
                  Our Journey
                </Typography>
                <div className="story-text">
                  {ourStoryDescription.map((x, i) => {
                    const { text = '' } = x?.children?.[0] || {};
                    if (!text) return null;
                    return (
                      <Typography as="p" key={i}>
                        {text}
                      </Typography>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Photo Gallery */}
      {galleryImages.length > 0 && (
        <div className="gallery-section">
          <Container>
            <Row>
              <Col>
                <Typography as="p" className="section-label">
                  Gallery
                </Typography>
                <Typography as="h3" className="gallery-heading">
                  Moments From Our Adventures
                </Typography>
                <PhotoProvider>
                  <div className="gallery-grid">
                    {galleryImages.map((img, i) => {
                      const imageUrl = urlFor(img).width(600).quality(80).url();
                      return (
                        <PhotoView key={i} src={imageUrl}>
                          <div className="gallery-item" key={i}>
                            <ImageWithFallback
                              src={imageUrl}
                              alt={`gallery-image-${i + 1}`}
                              fill
                            />
                          </div>
                        </PhotoView>
                      );
                    })}
                  </div>
                </PhotoProvider>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </StyledDiv>
  );
};

export default OurStory;
