'use client';
import React from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

import Button from '@/components/Button';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Divider from '@/components/Divider';
import ExpertCard from '@/components/ExpertCard';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { HomePageType } from '../../home-page.types';
import { urlFor } from '@/sanity/client';

const MySwiper = dynamic(() => import('@/components/MySwiper'), {
  ssr: false,
});

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
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="adventure-specialist-wrapper">
              <Divider />
              <div className="section-title-wrapper">
                <Typography as="h3" className="section-title">
                  {contactUsTitle}
                </Typography>
              </div>

              <div className="adventure-specialist-content">
                <div className="adventure-expert-list">
                  <MySwiper slidePerView={3.5}>
                    {memberList.map((x, i) => {
                      const imageUrl = urlFor(x.memberImage).url();
                      return (
                        <SwiperSlide key={i}>
                          <ExpertCard
                            imageUrl={imageUrl}
                            designation={x.memberDesignation}
                            name={x.memberName}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </MySwiper>
                </div>

                <div className="adventure-contact-us">
                  <Typography as="p" className="call-us-text">
                    {contactUsInfo}
                  </Typography>
                  <Link href="tel:+977 980123456" className="contact-us">
                    {contactUsNumber}
                  </Link>

                  <Button className="call-btn" size="md" variant="outline">
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
