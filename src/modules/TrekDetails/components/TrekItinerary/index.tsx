import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';

import CostExclude from '../CostExclude';
import CostInclude from '../CostInclude';
import EssentialTips from '../EssentialTips';
import Gallery from '../Gallery';
import ItineraryDetails from '../ItineraryDetails';
import ItineraryHeader from '../ItineraryHeader';
import KeyHighlights from '../KeyHighlights';

import { StyledDiv } from './style';
const TrekItinerary = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <ItineraryHeader />
            <KeyHighlights />
            <ItineraryDetails />
            <div className="trek-cost-include-exclude-wrapper">
              <CostInclude />
              <CostExclude />
            </div>
            <EssentialTips />
            <Gallery />
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default TrekItinerary;
