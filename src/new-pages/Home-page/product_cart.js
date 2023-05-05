import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from './product';

import "./styles/cart.css";



export default function Product_Cart(){
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1
  };

    return (
        <div className='product-cart'>
          <h3>Best Sellers </h3>
          <div className='product-section'>
          <Slider {...settings}>
  <Product />
  <Product img={""}/>
  <Product img={""}/>
  <Product img={""}/>
  <Product img={""}/>
  <Product img={""}/>
  </Slider>;
        </div>
        </div>
    );
}
