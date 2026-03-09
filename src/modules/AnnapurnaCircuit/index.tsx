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
import { AnnapuranCircuitType } from './aanapurna-circuit-type';

type Props = {
  data: AnnapuranCircuitType;
};

const AnnapurnaCircuit = ({ data }: Props) => {
  const { itineraryDetails = [] } = data || {};
  return (
    <StyledDiv>
      <AnnapurnaLandingPage />
      <BreadCrumbs
        crumbs={[{ label: 'Annapurna Circuit' }]}
        className="aanupuran-bread-crumbs"
      />
      <Container>
        <Row>
          <Col>
            <div className="annapurna-trekking-information-wrapper">
              <div className="annapurna-trekking-list">
                {itineraryDetails.map((x, i) => {
                  const { day = '', elevation = '', details = [] } = x;
                  return (
                    <AnnapurnaTrekingDetails
                      key={i}
                      day={day}
                      elevation={elevation}
                      description={details}
                    />
                  );
                })}
              </div>
              <div className="trekking-facts-wrapper">
                <AnnapurnaTrekkingFacts data={data} />
                <AnnapurnaBookWithUs data={data} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default AnnapurnaCircuit;
