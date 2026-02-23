import React from 'react';

import Accordion from '@/components/Accordion';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const OurTeamFaq = () => {
  const items = [
    {
      title: 'Day 1',
      description:
        'The excitement of spotting Everest for the first time while sipping tea at a Namche Bazaar viewpoint is surreal.',
    },
    {
      title: 'Day 2',
      description:
        'A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam.',
    },
    {
      title: 'Day 3',
      description:
        'A rewarding short hike offering one of the best panoramic views of Everest, Lhotse, and Ama Dablam.',
    },
  ];
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="our-team-faq-wrapper">
              <Typography as="body2" className="faq-title">
                Frequently Asked Questions
              </Typography>
              <div className="faq-wrapper">
                <Accordion items={items} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OurTeamFaq;
