import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./styles/swiper.css"

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import swiper_img_1 from "./images/swiper-1.jpg";
import swiper_img_2 from "./images/swiper-2.jpg";
import swiper_img_3 from "./images/swiper-3.jpg";

function Testimonial_Slider() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        centeredSlides={'true'}
        loop={'true'}
        infinite={'true'}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className='swiper_image'>
            <img src={swiper_img_1} className="swiper_img" alt="swiper_image" />
            <p>A mattress that supports <br></br> an active lifestyle</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper_image'>
            <img src={swiper_img_2} className="swiper_img" alt="swiper_image" />
            <p>A mattress that supports <br></br> an active lifestyle</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='swiper_image'>
            <img src={swiper_img_3} className="swiper_img" alt="swiper_image" />
            <p>A mattress that supports <br></br> an active lifestyle</p>
            </div>
          </SwiperSlide>
          
          

      </Swiper>
    </div>
  );
}

export default Testimonial_Slider;