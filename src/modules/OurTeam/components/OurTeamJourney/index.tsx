import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const OurTeamJourney = () => {
  return (
    <StyledDiv>
      <BreadCrumbs crumbTitle="Our Team" className="journey-bread-crumbs" />
      <Container>
        <Row>
          <Col>
            <div className="text-wrapper">
              <Typography as="p">Journey With Experts</Typography>
              <Typography as="body1">
                Our team of travel experts is dedicated to making your journey
                seamless and unforgettable. With years of experience and a
                passion for exploration, we ensure every trip is planned to
                perfection. From breathtaking destinations to personalized
                itineraries, we’re here to guide you every step of the way.
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OurTeamJourney;
