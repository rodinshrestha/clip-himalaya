import React from 'react';

import Col from '../Col';
import Container from '../Container';
import Row from '../Row';
import Typography from '../Typography';

import { StyledDiv } from './style';

type Props = {
  crumbTitle: string;
  className?: string;
};

const BreadCrumbs = ({ crumbTitle, className }: Props) => {
  return (
    <StyledDiv className={className}>
      <Container>
        <Row>
          <Col>
            <div className="crumb-wrapper">
              <Typography as="body1">Home</Typography>
              <Typography as="body1"> &gt;</Typography>
              <Typography as="body1">{crumbTitle}</Typography>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default BreadCrumbs;
