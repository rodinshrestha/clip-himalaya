import React from 'react';

import Link from 'next/link';

import Button from '@/components/Button';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Divider from '@/components/Divider';
import ExpertCard from '@/components/ExpertCard';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const AdventureSpecialist = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="adventure-specialist-wrapper">
              <Divider />
              <div className="section-title-wrapper">
                <Typography as="h3" className="section-title">
                  Plan your trek with our adventure expert
                </Typography>
              </div>

              <div className="adventure-specialist-content">
                <div className="adventure-expert-list">
                  <ExpertCard />
                  <ExpertCard />
                  <ExpertCard />
                </div>

                <div className="adventure-contact-us">
                  <Typography as="p" className="call-us-text">
                    Call us, We&apos;re available 24/7
                  </Typography>
                  <Link href="tel:+977 980123456" className="contact-us">
                    +977 9801234567
                  </Link>

                  <Button className="call-btn" size="md">
                    START PLANNING MY TRIP
                  </Button>
                </div>
              </div>
              <Divider />
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default AdventureSpecialist;
