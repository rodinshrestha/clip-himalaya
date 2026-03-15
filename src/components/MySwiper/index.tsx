'use client';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  children: React.ReactNode;
  slidePerView?: number;
};

const MySwiper = ({ children, slidePerView = 4.5 }: Props) => {
  const getBreakpoints = () => {
    if (slidePerView <= 3) {
      return {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 1.5 },
        771: { slidesPerView: 2 },
        1024: { slidesPerView: slidePerView },
      };
    }
    if (slidePerView <= 3.5) {
      return {
        0: { slidesPerView: 1 },
        480: { slidesPerView: 1.5 },
        771: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: slidePerView },
      };
    }
    return {
      0: { slidesPerView: 1.2 },
      480: { slidesPerView: 1.5 },
      771: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
      1440: { slidesPerView: slidePerView },
    };
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={24}
      slidesPerView={slidePerView}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="mySwiper"
      breakpoints={getBreakpoints()}
      loop
    >
      {children}
    </Swiper>
  );
};

export default MySwiper;
