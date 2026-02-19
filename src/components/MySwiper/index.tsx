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
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={slidePerView}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className="mySwiper"
      breakpoints={{
        0: {
          slidesPerView: slidePerView - 1.2,
        },
        430: {
          slidesPerView: slidePerView - (slidePerView === 3.5 ? 2.5 : 3.5),
        },
        771: {
          slidesPerView: slidePerView - 1.5,
        },
        1440: {
          slidesPerView: slidePerView,
        },
      }}
      loop
    >
      {children}
    </Swiper>
  );
};

export default MySwiper;
