import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { OurStoryType } from '../../our-story.type';
import { urlFor } from '@/sanity/client';

type Props = {
  data: OurStoryType;
};

const GalleryImage = ({ image, index, width = 600 }: { image: unknown; index: number; width?: number }) => {
  if (!image) return null;
  return (
    <ImageWithFallback
      src={urlFor(image).width(width).quality(80).url()}
      alt={`Clip Himalaya story — gallery photo ${index}`}
      fill
    />
  );
};

const OurStoryImageBanner = ({ data }: Props) => {
  const galleryImages = data?.galleryImages || [];

  if (galleryImages.length === 0) return null;

  const img = (i: number) => galleryImages[i] || null;

  return (
    <StyledDiv className="our-story-image-banner-wrapper">
      <Container>
        <Row>
          <Col>
            <div className="first-row">
              <div className="first-row-left-column-image-wrapper">
                <GalleryImage image={img(0)} index={1} />
              </div>
              <div className="first-row-center-column-image-wrapper">
                <div className="first-row-center-image-1">
                  <GalleryImage image={img(1)} index={2} width={400} />
                </div>
                <div className="first-row-center-image-2">
                  <GalleryImage image={img(2)} index={3} width={400} />
                </div>
                <div className="first-row-center-image-3">
                  <GalleryImage image={img(3)} index={4} width={400} />
                </div>
              </div>
              <div className="first-row-right-column-image-wrapper">
                <GalleryImage image={img(4)} index={5} />
              </div>
            </div>
            <div className="second-row">
              <div className="second-row-left-column-image-wrapper">
                <GalleryImage image={img(5)} index={6} />
              </div>
              <div className="second-row-center-column-image-wrapper">
                <Typography as="h2">OUR STORY</Typography>
              </div>
              <div className="second-row-right-column-image-wrapper">
                <GalleryImage image={img(6)} index={7} />
              </div>
            </div>
            {galleryImages.length > 7 && (
              <div className="third-row">
                <div className="third-row-left-column-image-wrapper"></div>
                <div className="third-row-center-column-image-wrapper">
                  <div className="third-row-center-image-1">
                    <GalleryImage image={img(7)} index={8} width={400} />
                  </div>
                  <div className="third-row-center-image-2">
                    <GalleryImage image={img(8)} index={9} width={400} />
                  </div>
                  <div className="third-row-center-image-3">
                    <GalleryImage image={img(9)} index={10} width={400} />
                  </div>
                </div>
                <div className="third-row-right-column-image-wrapper"></div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OurStoryImageBanner;
