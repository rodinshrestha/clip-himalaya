import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { TrekPageType } from '../../treks.type';
import { urlFor } from '@/sanity/client';

type Props = {
  data: TrekPageType;
};

const TrekLandingPage = ({ data }: Props) => {
  const {
    bannerImage = '',
    title = '',
    helperText = '',
  } = data?.pageData || {};

  const bannerUrl = bannerImage
    ? urlFor(bannerImage).width(1920).quality(85).url()
    : '';

  return (
    <StyledDiv>
      <div className="hero-gradient" />
      <ImageWithFallback
        src={bannerUrl}
        alt="Trekking trails across Nepal Himalaya"
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

export default TrekLandingPage;
