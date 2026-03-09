'use client';
import React from 'react';

import { Images } from 'lucide-react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import ImageWithFallback from '@/components/ImageWithFallBack';

import TrekkingTitleSection from '../TrekkingTitleSection';

import { StyledDiv } from './style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
  return (
    <StyledDiv id="gallery">
      <TrekkingTitleSection icon={Images} title="GALLERY" />

      <div className="gallery-wrapper">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-image">
              <ImageWithFallback src="/images/everest.jpeg" alt="image" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image">
              <ImageWithFallback src="/images/everest.jpeg" alt="image" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image">
              <ImageWithFallback src="/images/everest.jpeg" alt="image" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image">
              <ImageWithFallback src="/images/everest.jpeg" alt="image" fill />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-image">
              <ImageWithFallback src="/images/everest.jpeg" alt="image" fill />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledDiv>
  );
};

export default Gallery;
