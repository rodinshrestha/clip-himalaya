import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const OurStoryImageBanner = () => {
  return (
    <StyledDiv className="our-story-image-banner-wrapper">
      <Container>
        <Row>
          <Col>
            <div className="first-row">
              <div className="first-row-left-column-image-wrapper">
                <ImageWithFallback
                  src="/images/1.jpeg"
                  alt="story-image-1"
                  fill
                />
              </div>
              <div className="first-row-center-column-image-wrapper">
                <div className="first-row-center-image-1">
                  <ImageWithFallback
                    src="/images/1.jpeg"
                    alt="story-image-1"
                    fill
                  />
                </div>
                <div className="first-row-center-image-2">
                  <ImageWithFallback
                    src="/images/1.jpeg"
                    alt="story-image-1"
                    fill
                  />
                </div>
                <div className="first-row-center-image-3">
                  <ImageWithFallback
                    src="/images/1.jpeg"
                    alt="story-image-1"
                    fill
                  />
                </div>
              </div>
              <div className="first-row-right-column-image-wrapper">
                <ImageWithFallback
                  src="/images/1.jpeg"
                  alt="story-image-1"
                  fill
                />
              </div>
            </div>
            <div className="second-row">
              <div className="second-row-left-column-image-wrapper">
                <ImageWithFallback
                  src="/images/1.jpeg"
                  alt="story-image-1"
                  fill
                />
              </div>
              <div className="second-row-center-column-image-wrapper">
                <Typography as="h1">OUR STORY</Typography>
              </div>
              <div className="second-row-right-column-image-wrapper">
                <ImageWithFallback
                  src="/images/1.jpeg"
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
                    src="/images/1.jpeg"
                    alt="story-image-1"
                    fill
                  />
                </div>
                <div className="third-row-center-image-2">
                  <ImageWithFallback
                    src="/images/1.jpeg"
                    alt="story-image-1"
                    fill
                  />
                </div>
                <div className="third-row-center-image-3">
                  <ImageWithFallback
                    src="/images/1.jpeg"
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
