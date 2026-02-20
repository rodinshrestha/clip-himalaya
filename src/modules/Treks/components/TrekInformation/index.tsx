import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const TrekInformation = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <Typography as="p" className="trek-description">
              With Clip Himalaya, embark on safe, expertly guided, and deeply
              authentic treks. Years of experience and a friendly team ensure
              your dream adventure becomes a reality.
            </Typography>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default TrekInformation;
