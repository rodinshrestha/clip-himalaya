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
import { TrekDetailsType } from '../../trek-details.types';

type Props = {
  data: TrekDetailsType;
};

const TrekItinerary = ({ data }: Props) => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <ItineraryHeader />
            <KeyHighlights data={data} />
            <ItineraryDetails data={data} />
            <section
              className="trek-cost-include-exclude-wrapper"
              id="costs-include"
            >
              <CostInclude data={data} />
              <CostExclude data={data} />
            </section>
            <EssentialTips data={data} />
            <Gallery data={data} />
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default TrekItinerary;
