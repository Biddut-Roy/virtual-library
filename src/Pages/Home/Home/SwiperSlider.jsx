import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperSlider = () => {
    return (
        <Swiper 
        spaceBetween={50}
        // slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            // When screen size is lg and larger (tailwind lg:3)
            992: {
              slidesPerView: 3,
            },
            // When screen size is md and larger (tailwind md:2)
            768: {
              slidesPerView: 2,
            },
            // Default for smaller screens (tailwind mobile:1)
            0: {
              slidesPerView: 1,
            },
          }}
      >
        <SwiperSlide><img
          src="https://i.ibb.co/8zxvmkh/1.jpg" 
          alt="img"
        /></SwiperSlide>
        <SwiperSlide><img
          src="https://i.ibb.co/PZ7NbsY/3.jpg" 
          alt="img"
        /></SwiperSlide>
        <SwiperSlide><img
          src="https://i.ibb.co/QYXVCc0/4.jpg" 
          alt="img"
        /></SwiperSlide>
        <SwiperSlide><img
          src="https://i.ibb.co/CHX66Nb/7.jpg" 
          alt="img"
        /></SwiperSlide>
        <SwiperSlide><img
          src="https://i.ibb.co/9rFrWM7/s.jpg" 
          alt="img"
        /></SwiperSlide>
      </Swiper>
    );
};

export default SwiperSlider;