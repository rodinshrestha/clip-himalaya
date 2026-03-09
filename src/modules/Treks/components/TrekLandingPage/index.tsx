import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import Overlay from '@/components/Overlay';
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
  return (
    <StyledDiv>
      <Overlay overlayValue={0.4} />
      <ImageWithFallback
        src={urlFor(bannerImage).url()}
        alt="trek-image"
        fill
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
