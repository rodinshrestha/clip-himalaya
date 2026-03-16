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
import { TrekDetailsType } from '../../trek-details.types';
import { urlFor } from '@/sanity/client';

type Props = {
  data: TrekDetailsType;
};

const Gallery = ({ data }: Props) => {
  const { imageGallery = [] } = data || {};
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
          {imageGallery?.map((x, i) => {
            const imageUrl = urlFor(x.image).url();
            return (
              <SwiperSlide key={i}>
                <div className="slide-image">
                  <ImageWithFallback src={imageUrl} alt="image" fill />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </StyledDiv>
  );
};

export default Gallery;
