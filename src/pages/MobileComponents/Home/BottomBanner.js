import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./../styles/swiper.css"

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import swiper_img_1 from "./../images/slide-banner-a-.jpg";
import swiper_img_2 from "./../images/slide-banner-b-.jpg";
import swiper_img_3 from "./../images/slide-banner-c-.jpg";
import swiper_img_4 from "./../images/slide-banner-d-.jpg";
import swiper_img_5 from "./../images/slide-banner-e-.jpg";

function BottomBannerNew(props) {


  const dataGet = props && props.data
  
  return (
    <div className="containerSwiper  " style={{marginTop:60}}>
      <Swiper
      
         spaceBetween={5}
        effect={'coverflow'}
       
        slidesPerView= 'auto'
      centeredSlides
      loop={true}
            autoplay={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}

        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"

        breakpoints={{
          // when window width is >= 640px
          640: {
            spaceBetween:50
          },
          // when window width is >= 768px
          768: {
            spaceBetween:120,
            slidesPerView: 3,
          },
        }}
        
      



  
      >



     
        <SwiperSlide>
          <div className='swiper_image '>
            <img src={swiper_img_1} className="swiper_img" alt="swiper_image" />
           <div className='transbox'> <p align="center"  className='contentParagraph'>A mattress that supports an active lifestyle</p>
            <p align="center" style={{fontSize:12,fontWeight:500}}>price start from <span style={{fontSize:24,fontWeight:500,marginLeft:10,fontFamily:"system-ui"}} ><i style={{fontSize:16}} class="fa fa-inr" aria-hidden="true"></i> 5699</span></p></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='swiper_image '>
            <img src={swiper_img_2} className="swiper_img" alt="swiper_image" />
           <div  className='transbox'> <p  align="center" className='contentParagraph'>A mattress that supports an active lifestyle</p>
            <p align="center" style={{fontSize:12,fontWeight:500}}>price start from <span style={{fontSize:24,fontWeight:500,marginLeft:10,fontFamily:"system-ui"}} ><i style={{fontSize:16}} class="fa fa-inr" aria-hidden="true"></i> 5699</span></p></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='swiper_image '>
            <img src={swiper_img_3} className="swiper_img" alt="swiper_image" />
           <div className='transbox'> <p align="center"  className='contentParagraph'>A mattress that supports an active lifestyle</p>
            <p align="center" style={{fontSize:12,fontWeight:500}}>price start from <span style={{fontSize:24,fontWeight:500,marginLeft:10,fontFamily:"system-ui"}} ><i  style={{fontSize:16}} class="fa fa-inr" aria-hidden="true"></i> 5699</span></p></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='swiper_image '>
            <img src={swiper_img_4} className="swiper_img" alt="swiper_image" />
           <div className='transbox'> <p align="center"  className='contentParagraph'>A mattress that supports an active lifestyle</p>
            <p align="center" style={{fontSize:12,fontWeight:500}}>price start from <span style={{fontSize:24,fontWeight:500,marginLeft:10,fontFamily:"system-ui"}} ><i  style={{fontSize:16}} class="fa fa-inr" aria-hidden="true"></i> 5699</span></p></div>
            </div>
          </SwiperSlide>

           <SwiperSlide>
          <div className='swiper_image '>
            <img src={swiper_img_5} className="swiper_img" alt="swiper_image" />
           <div className='transbox'> <p align="center"  className='contentParagraph'>A mattress that supports an active lifestyle</p>
            <p align="center" style={{fontSize:12,fontWeight:500}}>price start from <span style={{fontSize:24,fontWeight:500,marginLeft:10,fontFamily:"system-ui"}} ><i style={{fontSize:16}} class="fa fa-inr" aria-hidden="true"></i> 5699</span></p></div>
            </div>
          </SwiperSlide>


       



       
          
      </Swiper>
    </div>
  );
}

export default BottomBannerNew;