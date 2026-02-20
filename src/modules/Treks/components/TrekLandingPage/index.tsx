import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const TrekLandingPage = () => {
  return (
    <StyledDiv>
      <ImageWithFallback src="/images/trek.png" alt="trek-image" fill />
      <div className="text-content">
        <Container>
          <Row>
            <Col>
              <div className="text-inner-content">
                <Typography as="h1">
                  The Himalayas Await. Trek with Confidence.
                </Typography>
                <Typography as="p">TREKKING ADVENTURE</Typography>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledDiv>
  );
};

export default TrekLandingPage;
