import React from 'react'

import product_img_1 from "./images/product-1.png";
import "./styles/cart.css";

export const Product = () => {
  return (
    
    <div className='product_card'>
    <div className='product-img'>
        <img className='product-image' src={"https://poppyindia.com/Ecom-Admin/a_assets/images/react_img/sdlxtt.jpg"} alt='Product_image' />
        <a href='#'><i class='fa fa-heart-o'></i></a>
    </div>
    <div className='product-title'>
      <h2>Selene TT</h2>
      <a href='#'><i class='fa fa-shopping-cart'></i></a>
    </div>
    <p className='product-description'>Premium Series Bonnell Spring <br></br> Mattress with Double side Usuage</p>
    <div className='price-details'>
      <div className='Current-price'>
      <p>Price Starts from</p>
      <a href='#'><i class="fa fa-inr"></i> 9,259</a>
      </div>
      <div className='mrp-price'>
        <p className='mrp-rate'>M.R.P <i class="fa fa-inr"><s> 11,598</s></i></p>
        <p className='offer-percentage'>10%</p>
      </div>
    </div>
    </div>

  )
}
