import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';

import AnnapurnaBookWithUs from './components/AnnapurnaBookWithUs';
import AnnapurnaLandingPage from './components/AnnapurnaLandingPage';
import AnnapurnaTrekingDetails from './components/AnnapurnaTrekingDetails';
import AnnapurnaTrekkingFacts from './components/AnnapurnaTrekkingFacts';
import { StyledDiv } from './style';

const AnnapurnaCircuit = () => {
  return (
    <StyledDiv>
      <AnnapurnaLandingPage />
      <BreadCrumbs crumbs={[{ label: 'Annapurna Circuit' }]} />
      <Container>
        <Row>
          <Col>
            <div className="annapurna-trekking-information-wrapper">
              <div className="annapurna-trekking-list">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => {
                  return (
                    <AnnapurnaTrekingDetails
                      key={x}
                      day={`Day ${x} - Kathmandu: Arrival Day`}
                      elevation="1350m/4428ft"
                      description="Welcome to Nepal and the start of our adventure! One of our Airport Representatives will be on hand to greet you when your plane lands and transfer you to your hotel in Kathmandu. We'll have a final briefing in the evening and then turn in early in advance of a big day tomorrow"
                    />
                  );
                })}
              </div>
              <div className="trekking-facts-wrapper">
                <AnnapurnaTrekkingFacts />
                <AnnapurnaBookWithUs />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default AnnapurnaCircuit;
