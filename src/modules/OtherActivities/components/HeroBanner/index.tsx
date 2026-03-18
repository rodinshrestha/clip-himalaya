import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';
import { urlFor } from '@/sanity/client';

import { StyledDiv } from './style';

type Props = {
  bannerImage?: string;
  title?: string;
  helperText?: string;
};

const HeroBanner = ({ bannerImage, title, helperText }: Props) => {
  const bannerUrl = bannerImage
    ? urlFor(bannerImage).width(1920).quality(85).url()
    : '';

  return (
    <StyledDiv>
      <div className="hero-gradient" />
      <ImageWithFallback
        src={bannerUrl}
        alt="other-activities-banner"
        fill
        priority
      />
      <div className="text-content">
        <Container>
          <Row>
            <Col>
              <div className="text-inner-content">
                {title && <Typography as="h1">{title}</Typography>}
                {helperText && <Typography as="p">{helperText}</Typography>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledDiv>
  );
};

export default HeroBanner;
