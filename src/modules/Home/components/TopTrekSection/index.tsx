import React from 'react';

import Card from '@/components/Card';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const TopTrekSection = () => {
  return (
    <StyledDiv className="top-trek-section">
      <Container>
        <Row>
          <Col>
            <div className="top-trek-wrapper">
              <div className="section-title-wrapper">
                <Typography as="h2" className="section-title">
                  CLIP HIMALAYA TOP TREK
                </Typography>
              </div>
              <div className="top-trek-card-wrapper">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default TopTrekSection;
