import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ExpertCard from '@/components/ExpertCard';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { OurTeamType } from '../../our-team.type';
import { urlFor } from '@/sanity/client';

type Props = {
  data: OurTeamType;
};

const OurExpertList = ({ data }: Props) => {
  const { memberList = [] } = data || {};
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <Typography as="p" className="section-label">
              Our Experts
            </Typography>
            <Typography as="h3" className="section-heading">
              Meet the Team
            </Typography>
            <div className="expert-list-wrapper">
              {memberList.map((x, i) => {
                const imageUrl = urlFor(x.memberImage).url();
                return (
                  <ExpertCard
                    key={i}
                    imageUrl={imageUrl}
                    designation={x.memberDesignation}
                    name={x.memberName}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OurExpertList;
