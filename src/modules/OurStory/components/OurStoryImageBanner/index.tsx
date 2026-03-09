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

const OurStoryImageBanner = ({ data }: Props) => {
  const { galleryImages = [] } = data || {};
  const [
    image1 = '',
    image2 = '',
    image3 = '',
    image4 = '',
    image5 = '',
    image6 = '',
    image7 = '',
    image8 = '',
    image9 = '',
    image10 = '',
  ] = galleryImages || [];
  return (
    <StyledDiv className="our-story-image-banner-wrapper">
      <Container>
        <Row>
          <Col>
            <div className="first-row">
              <div className="first-row-left-column-image-wrapper">
                <ImageWithFallback
                  src={urlFor(image1).url()}
                  alt="story-image-1"
                  fill
                />
              </div>
              <div className="first-row-center-column-image-wrapper">
                <div className="first-row-center-image-1">
                  <ImageWithFallback
                    src={urlFor(image2).url()}
                    alt="story-image-1"
                    fill
                  />
                </div>
                <div className="first-row-center-image-2">
                  <ImageWithFallback
                    src={urlFor(image3).url()}
                    alt="story-image-1"
                    fill
                  />
                </div>
                <div className="first-row-center-image-3">
                  <ImageWithFallback
                    src={urlFor(image4).url()}
                    alt="story-image-1"
                    fill
                  />
                </div>
              </div>
              <div className="first-row-right-column-image-wrapper">
                <ImageWithFallback
                  src={urlFor(image5).url()}
                  alt="story-image-1"
                  fill
                />
              </div>
            </div>
            <div className="second-row">
              <div className="second-row-left-column-image-wrapper">
                <ImageWithFallback
                  src={urlFor(image6).url()}
                  alt="story-image-1"
                  fill
                />
              </div>
              <div className="second-row-center-column-image-wrapper">
                <Typography as="h1">OUR STORY</Typography>
              </div>
              <div className="second-row-right-column-image-wrapper">
                <ImageWithFallback
                  src={urlFor(image7).url()}
                  alt="story-image-1"
                  fill
                />
              </div>
            </div>
            <div className="third-row">
              <div className="third-row-left-column-image-wrapper"></div>
              <div className="third-row-center-column-image-wrapper">
                <div className="third-row-center-image-1">
                  <ImageWithFallback
                    src={urlFor(image8).url()}
                    alt="story-image-1"
                    fill
                  />
                </div>
                <div className="third-row-center-image-2">
                  <ImageWithFallback
                    src={urlFor(image9).url()}
                    alt="story-image-1"
                    fill
                  />
                </div>
                <div className="third-row-center-image-3">
                  <ImageWithFallback
                    src={urlFor(image10).url()}
                    alt="story-image-1"
                    fill
                  />
                </div>
              </div>
              <div className="third-row-right-column-image-wrapper"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OurStoryImageBanner;
