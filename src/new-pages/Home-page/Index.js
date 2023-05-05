import "./styles/Index.css";

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*Images*/
import slide_img_1 from "./images/d/a.jpg";
import slide_img_2 from "./images/d/a.jpg";
import slide_img_3 from "./images/c.jpg";
import selector_img_1 from "./images/selector-icon-1.png";
/*Images end*/

/*Components*/
import Testimonial_Slider from "./swiper_slide";
import Collections from "./collection";
import Product_Cart from "./product_cart";
/*Components end*/

export default function Index() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <div className="slider-header">
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
    </Slider></div>
    <div className="selector-section">
      <div className="selector">
        <a href="#"><img src={selector_img_1} alt="Selector-icon"></img></a>
        <p>Mattress</p>
      </div>
      <div className="selector">
        <a href="#"><img src={selector_img_1} alt="Selector-icon"></img></a>
        <p>Pillows</p>
      </div>
      <div className="selector">
        <a href="#"><img src={selector_img_1} alt="Selector-icon"></img></a>
        <p>Protector</p>
      </div>
      <div className="selector">
        <a href="#"><img src={selector_img_1} alt="Selector-icon"></img></a>
        <p>Assist</p>
      </div>
      </div>
    </div>
    <Product_Cart /><Testimonial_Slider /><Collections />

    
    </>

    



  );
}

