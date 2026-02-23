import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import Col from '../Col';
import Container from '../Container';
import Row from '../Row';
import Typography from '../Typography';

import { StyledDiv } from './style';

type Props = {
  crumbs: [{ label: string; href?: string }];
  className?: string;
};

const BreadCrumbs = ({ crumbs, className }: Props) => {
  return (
    <StyledDiv className={className}>
      <Container>
        <Row>
          <Col>
            <div className="crumb-wrapper">
              <Link href="/" className="bread-crumb-text">
                Home
              </Link>
              {crumbs.map((x, i) => {
                return (
                  <React.Fragment key={i}>
                    <Typography as="body1"> &gt;</Typography>
                    <Link
                      className={clsx('bread-crumb-text', {
                        disabled: i === crumbs.length - 1,
                      })}
                      href={x?.href || '#'}
                    >
                      {x.label}
                    </Link>
                  </React.Fragment>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default BreadCrumbs;
