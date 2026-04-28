'use client';
import React from 'react';

import Link from 'next/link';

import Button from '@/components/Button';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Divider from '@/components/Divider';
import Row from '@/components/Row';
import Typography from '@/components/Typography';
import ImageWithFallback from '@/components/ImageWithFallBack';

import { StyledDiv } from './style';
import { HomePageType } from '../../home-page.types';
import { urlFor } from '@/sanity/client';

type Props = {
  data: HomePageType;
};

const AdventureSpecialist = ({ data }: Props) => {
  const {
    contactUsTitle = '',
    contactUsInfo = '',
    contactUsNumber = '',
  } = data?.homeData || {};
  const { memberList = [] } = data?.memberList || [];
  const displayMembers = memberList.filter((m) => m.showOnHomepage);

  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <Divider />
            <div className="specialist-section">
              <Typography as="h4" className="specialist-heading">
                {contactUsTitle ||
                  'Start planning your trek. Get matched with a local adventure specialist.'}
              </Typography>

              <div className="specialist-content">
                <div className="member-list">
                  {displayMembers.map((x, i) => {
                    const imageUrl = urlFor(x.memberImage).width(200).quality(80).url();
                    return (
                      <div className="member-item" key={i}>
                        <div className="member-image">
                          <ImageWithFallback
                            src={imageUrl}
                            alt={x.memberName}
                            fill
                          />
                        </div>
                        <Typography as="p" className="member-name">
                          {x.memberName}
                        </Typography>
                        {x.memberDesignation && (
                          <Typography as="p" className="member-designation">
                            {x.memberDesignation}
                          </Typography>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="contact-cta">
                  <Typography as="p" className="call-us-text">
                    {contactUsInfo}
                  </Typography>
                  <Link href="tel:+977 980123456" className="phone-number">
                    {contactUsNumber}
                  </Link>
                  <Button
                    className="call-btn"
                    size="sm"
                    variant="black"
                    href="/contact-us"
                  >
                    Start Planning My Trip
                  </Button>
                </div>
              </div>
            </div>
            <Divider />
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default AdventureSpecialist;
