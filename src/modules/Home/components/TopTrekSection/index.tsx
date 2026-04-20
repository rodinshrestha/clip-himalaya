'use client';
import React from 'react';

import dynamic from 'next/dynamic';
import { SwiperSlide } from 'swiper/react';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Col from '@/components/Col';
import Container from '@/components/Container';
import { urlFor } from '@/sanity/client';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { HomePageType } from '../../home-page.types';

const MySwiper = dynamic(() => import('@/components/MySwiper'), {
  ssr: false,
});

type Props = {
  data: HomePageType;
};

const TopTrekSection = ({ data }: Props) => {
  const { sectionTitle = '', popularTreks = [] } = data?.homeData || {};
  return (
    <StyledDiv className="top-trek-section" id="top-trek-section">
      <Container>
        <Row>
          <Col>
            <div className="top-trek-wrapper">
              <div className="section-title-wrapper">
                <Typography as="p" className="section-label">
                  Handpicked For You
                </Typography>
                <Typography as="h3" className="section-title">
                  {sectionTitle}
                </Typography>
              </div>
              <div className="top-trek-card-wrapper">
                <MySwiper slidesPerView={3}>
                  {popularTreks.map((x, i) => {
                    const imageUrl = urlFor(x.image).width(600).quality(80).url();

                    return (
                      <SwiperSlide key={i}>
                        <Card imageUrl={imageUrl} textInfo={x.titles} />
                      </SwiperSlide>
                    );
                  })}
                </MySwiper>
              </div>
              <div className="view-all-wrapper">
                <Button variant="outline" size="md" href="/treks">
                  VIEW ALL TREKS
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default TopTrekSection;
