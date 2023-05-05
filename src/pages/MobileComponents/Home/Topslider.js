import React from 'react'
import "./../styles/home.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide_img_1 from "./../images/d/a.jpg";
import slide_img_2 from "./../images/d/a.jpg";
import selector_img_1 from "./../images/mattress.png";
import selector_img_2 from "./../images/pillows.png";

import selector_img_3 from "./../images/prodtec.png";

import selector_img_4 from "./../images/ask.png";

import { useNavigate } from 'react-router-dom';

export default function Topslider() {
const navigate=useNavigate()
  var settings = {
    dots: true,
    dotsClass: ' line-indicator banner-dot',
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000


  };

  return (
    <>
      <div className="slider-header" >
    <div className="image-slider">
      
      <Slider {...settings}>
      <div>
        <img src={slide_img_1} class="slide-img" alt="slide_image" />
      </div>
      <div>
        <img src={slide_img_2} class="slide-img" alt="slide_image" />
      </div>
      {/* <div>
        <img src={slide_img_3} class="slide-img" alt="slide_image" />
      </div> */}
    </Slider>
    </div>

    <div className="selector-section sliderContanierImage">
      <div className="selector">
        <a onClick={()=>{navigate('/productlist/all')}} style={{cursor:"pointer"}} ><img src={selector_img_1} alt="Selector-icon" width="100%"></img></a>
        <p>Mattress</p>
      </div>
      <div className="selector">
        <a onClick={()=>{navigate('/accessories/all')}} style={{cursor:"pointer"}} ><img src={selector_img_2} alt="Selector-icon" width="100%"></img></a>
        <p>Pillows</p>
      </div>
      <div className="selector">
        <a onClick={()=>{navigate('/accessories/0')}}><img src={selector_img_3} alt="Selector-icon" width="100%"></img></a>
        <p>Protector</p>
      </div>
      <div className="selector">
        <a onClick={()=>{navigate('/assists')}}><img src={selector_img_4} alt="Selector-icon" width="100%" style={{width:"35px"}}></img></a>
        <p>Assist</p>
      </div>
      </div>
    </div>
    </>
  )
}
