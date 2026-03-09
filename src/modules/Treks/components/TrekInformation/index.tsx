import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { TrekPageType } from '../../treks.type';

type Props = {
  data: TrekPageType;
};

const TrekInformation = ({ data }: Props) => {
  const { sectionDescription = [] } = data?.pageData || {};
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            {sectionDescription.map((x, i) => {
              const { text = '' } = x?.children?.[0] || {};
              if (!text) return;

              return (
                <Typography as="p" className="trek-description" key={i}>
                  {text}
                </Typography>
              );
            })}
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default TrekInformation;
