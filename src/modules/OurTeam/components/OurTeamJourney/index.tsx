import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { OurTeamType } from '../../our-team.type';

type Props = {
  data: OurTeamType;
};

const OurTeamJourney = ({ data }: Props) => {
  const { sectionTitle = '', sectionDescription = [] } = data || {};
  return (
    <StyledDiv>
      <BreadCrumbs
        crumbs={[{ label: 'Our Team' }]}
        className="journey-bread-crumbs"
      />
      <Container>
        <Row>
          <Col>
            <div className="text-wrapper">
              <Typography as="p">{sectionTitle}</Typography>
              {sectionDescription.map((x, i) => {
                const { text = '' } = x?.children?.[0] || {};
                if (!text) return null;
                return <Typography as="body1" key={i}>{text}</Typography>;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OurTeamJourney;
