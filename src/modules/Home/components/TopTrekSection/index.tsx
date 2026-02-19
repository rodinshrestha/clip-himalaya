'use client';
import React from 'react';

import dynamic from 'next/dynamic';
import { SwiperSlide } from 'swiper/react';

import Card from '@/components/Card';
import Col from '@/components/Col';
import Container from '@/components/Container';
// import MySwiper from '@/components/MySwiper';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const MySwiper = dynamic(() => import('@/components/MySwiper'), {
  ssr: false,
});

const TopTrekSection = () => {
  return (
    <StyledDiv className="top-trek-section" id="top-trek-section">
      <Container>
        <Row>
          <Col>
            <div className="top-trek-wrapper">
              <div className="section-title-wrapper">
                <Typography as="h3" className="section-title">
                  CLIP HIMALAYA TOP TREK
                </Typography>
              </div>
              <div className="top-trek-card-wrapper">
                <MySwiper>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((x) => {
                    return (
                      <SwiperSlide key={x}>
                        <Card />
                      </SwiperSlide>
                    );
                  })}
                </MySwiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default TopTrekSection;
