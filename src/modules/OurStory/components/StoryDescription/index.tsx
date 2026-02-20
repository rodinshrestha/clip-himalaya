import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const StoryDescription = () => {
  return (
    <StyledDiv>
      <Container>
        <Col>
          <Row>
            <div className="story-content-wrapper">
              <Typography as="p">
                Clip Himalaya was born in the mountains—but shaped by
                experience, purpose, and a deep love for the Himalayas.
              </Typography>
              <Typography as="p">
                Founded in Kathmandu by Nawang Chimi Sherpa, Clip Himalaya is
                the result of decades spent guiding, climbing, and living among
                the world’s highest peaks. Born in Phakding, Solukhumbu, Nawang
                grew up on the trails of the Everest region. The mountains were
                never just a destination for him—they were home. This
                deep-rooted connection, combined with a modern, energetic
                mindset, defines everything we do.
              </Typography>
              <Typography as="p">
                As a professional trekking guide and climber, Nawang Chimi
                Sherpa has summited Mount Everest three times and led countless
                expeditions across Nepal’s most iconic Himalayan regions. Over
                the years, he worked with many trekking companies and met
                travelers from all over the world. While the journeys were
                unforgettable, he noticed something troubling too often,
                trekkers were paying premium prices but receiving average
                service. That didn’t sit right with him.
              </Typography>
              <Typography as="p">
                Inspired by what trekking should feel like—safe, personal,
                transparent, and deeply rewarding—Nawang decided to take a leap
                of faith. He embarked on his own journey and founded Clip
                Himalaya with a simple but powerful belief Every traveler
                deserves best-in-class service for the price they pay.
              </Typography>
              <Typography as="p">
                At Clip Himalaya, we blend local knowledge, professional
                expertise, and genuine care. Being locals of the Himalayan
                regions gives us an unmatched understanding of the terrain,
                culture, weather, and hidden trails—especially in Everest and
                Solukhumbu. We don’t just guide you through the mountains; we
                help you experience them the way they are meant to be
                experienced.
              </Typography>
              <Typography as="p">
                We are passionate about trekking, mountains, and meaningful
                journeys. Whether you’re chasing your first Himalayan sunrise or
                returning for another high-altitude adventure, our goal is to
                deliver trips that are well-organized, safe, and
                unforgettable—without cutting corners.
              </Typography>
              <Typography as="p">
                Clip Himalaya isn’t just a trekking company.
              </Typography>
              <Typography as="p">
                {' '}
                It’s a promise—to honor the mountains, respect the traveler, and
                raise the standard of Himalayan adventures.
              </Typography>
            </div>
          </Row>
        </Col>
      </Container>
    </StyledDiv>
  );
};

export default StoryDescription;
