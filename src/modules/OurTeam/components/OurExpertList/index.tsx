import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ExpertCard from '@/components/ExpertCard';
import Row from '@/components/Row';

import { StyledDiv } from './style';

const OurExpertList = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="expert-list-wrapper">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => {
                return <ExpertCard key={x} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OurExpertList;
