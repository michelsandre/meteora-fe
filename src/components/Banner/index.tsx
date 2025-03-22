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
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={styles.banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.banner3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
