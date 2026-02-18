import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import TestimonialCard from '@/components/TestimonialCard';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const Testimonial = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="testimonial-wrapper">
              <div className="section-title-wrapper">
                <Typography as="h4" className="section-title">
                  OUR FAVOURITE TRAVELERS
                </Typography>
              </div>

              <div className="testimonial-list-wrapper">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Testimonial;
