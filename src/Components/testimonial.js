import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/testimonial.css";

import React, { Component, useContext, useEffect, useState } from "react";

import { Carousel } from "react-responsive-carousel";
import TestimonialSingle from "./testimonials_single";
import { testimonials } from "../data/API";

const baseurl = process.env.REACT_APP_BASE_URL;
function Testimonial() {

 const [testimonial, settestimonials] = useState([]);

  
  useEffect(() => {

 
    testimonials_get();


  }, []);






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
    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
     

        {test_single}

    
    
      </Carousel>
    </>
  );
}

export default Testimonial;
