'use client';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  children: React.ReactNode;
  slidesPerView?: number;
  breakpoints?: { [width: number]: SwiperOptions };
};

const MySwiper = ({ children, slidesPerView = 4.5, breakpoints }: Props) => {
  const getBreakpoints = (): { [width: number]: SwiperOptions } => {
    if (breakpoints) return breakpoints;

    if (slidesPerView <= 3) {
      return {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 1.5 },
        771: { slidesPerView: 2 },
        1024: { slidesPerView: slidesPerView },
      };
    }
    if (slidesPerView <= 3.5) {
      return {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 1.5 },
        771: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: slidesPerView },
      };
    }
    return {
      0: { slidesPerView: 1.2 },
      480: { slidesPerView: 1.5 },
      771: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
      1440: { slidesPerView: slidesPerView },
    };
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={24}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
      breakpoints={getBreakpoints()}
      loop
    >
      {children}
    </Swiper>
  );
};

export default MySwiper;
