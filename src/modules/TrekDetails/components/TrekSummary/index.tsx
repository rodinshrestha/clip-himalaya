import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { TrekDetailsType } from '../../trek-details.types';

type Props = {
  data: TrekDetailsType;
};

const TrekSummary = ({ data }: Props) => {
  const { trekDescription = [] } = data || {};
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            {trekDescription.map((x, i) => {
              const { text = '' } = x?.children?.[0] || {};
              if (!text) return;
              return (
                <Typography as="body1" key={i}>
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

export default TrekSummary;
