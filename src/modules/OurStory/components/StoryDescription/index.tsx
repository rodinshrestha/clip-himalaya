import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { OurStoryType } from '../../our-story.type';

type Props = {
  data: OurStoryType;
};

const StoryDescription = ({ data }: Props) => {
  const { ourStoryDescription = [] } = data || {};
  return (
    <StyledDiv>
      <Container>
        <Col>
          <Row>
            <div className="story-content-wrapper">
              {ourStoryDescription.map((x, i) => {
                const { text = '' } = x?.children?.[0] || {};
                if (!text) return;
                return (
                  <Typography as="p" key={i}>
                    {text}
                  </Typography>
                );
              })}
            </div>
          </Row>
        </Col>
      </Container>
    </StyledDiv>
  );
};

export default StoryDescription;
