'use client';
import React from 'react';

import dynamic from 'next/dynamic';
import { SwiperSlide } from 'swiper/react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import TestimonialCard from '@/components/TestimonialCard';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const MySwiper = dynamic(() => import('@/components/MySwiper'), {
  ssr: false,
});

const Testimonial = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="testimonial-wrapper">
              <div className="section-title-wrapper">
                <Typography as="h3" className="section-title">
                  OUR FAVOURITE TRAVELERS
                </Typography>
              </div>

              <div className="testimonial-list-wrapper">
                <MySwiper>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((x) => {
                    return (
                      <SwiperSlide key={x}>
                        <TestimonialCard />
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

export default Testimonial;
