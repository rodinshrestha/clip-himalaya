import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import TrekCard from '@/components/TrekCard';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const PopularTrek = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <Typography as="h3" className="section-title">
              View Our Popular Trek
            </Typography>
            <div className="trek-wrapper">
              <TrekCard />
              <TrekCard />
              <TrekCard />
              <TrekCard />
              <TrekCard />
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default PopularTrek;
