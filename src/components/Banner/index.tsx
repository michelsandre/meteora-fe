import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import styles from './styles.module.css';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src="/banner/banner-1.png" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/banner-2.png" alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner/banner-3.png" alt="Banner 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
