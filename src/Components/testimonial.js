// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./styles/testimonial.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component, useContext, useEffect, useState } from "react";
import starfall from "./banners.gif"
import { Carousel } from "react-responsive-carousel";
import TestimonialSingle from "./testimonials_single";
import { testimonials } from "../data/API";

const baseurl = process.env.REACT_APP_BASE_URL;
function Testimonial() {

 const [testimonial, settestimonials] = useState([]);

  
  useEffect(() => {

 
    testimonials_get();


  }, []);


  const settings = {
    arrows:false,
    dots: true,
    infinite: false,
    speed: 500,
     slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    centerPadding: '10px',
    centerMode: true,
    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]


  };

  const testimonials_get = async () => {

    let response = await testimonials();

    settestimonials(response.data.data);

  };





  
  const test_single = testimonial.map((data, inde) => {
    return (
      <TestimonialSingle name={data.t_name} img={data.img} review={data.review} index={inde}/>
    )

  })



  return (
    <>
    <div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-4" >
    <div className='Font-container'>

      <img src={starfall} className='gif-image-test' />  
        <h4 className="happy-font">Happy Customers !</h4></div> 

      <p className='Paragrah-test'>Add some text to an image in the top left corner Add some text to an image in the top left corner Add some text to an image in the top left corner</p>
    </div>
    <div class="col col-lg-8 " >
   <div className='product-section'>
<Slider {...settings}>
{test_single}
  </Slider>
  </div>  
  </div>
  </div>
  </div>


    {/* <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
        centerSlidePercentage={100 / 1}
        centerMode
      >
     

        {test_single}

    
    
      </Carousel> */}
    </>
  );
}

export default Testimonial;
