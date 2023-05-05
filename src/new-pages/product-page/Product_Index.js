import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useContext, useEffect, useState } from "react";
import {toast} from "react-toastify";
import { useHistory, useNavigate, useParams } from 'react-router-dom';
import  Product_Cart from '../Home-page/product_cart';


import axios from 'axios';

import "./styles/product-index.css";

/*Images*/
import pr_img_1 from "./images/pr1.jpg";
import pr_img_2 from "./images/pr2.jpg";
import pr_img_3 from "./images/pr3.jpg";
import pr_img_4 from "./images/pr4.jpg";

//color-img//
import color_img_1 from "./images/color-img-1.jpg";
import color_img_2 from "./images/color-img-2.jpg";

import desc_img_1 from "./images/desc-img-1.jpg";

/*Images end*/



export default function New_Details() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };


       
      
    return(
        <div className="product-contain">

            <div className="product-path">
            <ol>
            <li>
            <a href="#">
            <span>Home  &gt; </span>
            </a>
            </li>
            <li>
            <a href="#">
            <span>Mattress  &gt;</span>
            </a>
            </li>
            <li>
            <a href="#">
            <span>Premium Series  &gt;</span>
            </a>
            </li>
            <li>
            <a href="#">
            <span>Selene TT </span>
            </a>
            </li>
            </ol>
            </div>
            <div className="product-info">
                <div className="mattress-img">
                    <Slider {...settings}>
                        <div>
                        <img src={pr_img_1} class="pr-slide" alt="product_image" />
                        </div>
                        <div>
                        <img src={pr_img_2} class="pr-slide" alt="product_image" />
                        </div>
                        <div>
                        <img src={pr_img_3} class="pr-slide" alt="product_image" />
                        </div>
                        <div>
                        <img src={pr_img_4} class="pr-slide" alt="product_image" />
                        </div>
                    </Slider>
                </div>

                <div className='product-content'>
                    
            <div className='pr-title'>
            <h3 className="product-name">Selene TT</h3>
            <p className="product-dcp">Designed for a two-way use, utility of the mattress <br></br> is doubled and also made economically viable.</p>
            </div>


            <div className="pr-price">
                <div className="price-info">

                <div className='mrp-price'>
                    <p className='mrp-rate'>M.R.P <i class="fa fa-inr"><s> 11,598</s></i></p>
                    <p className='offer-percentage'>10% off</p>
                </div>

                <div className="bg-btn">
                    <a href="#"><span>You Save</span> <i class="fa fa-inr"></i> 2,339</a>
                </div>
            </div>

            <div className="current-amt">
            <a href="#"><i class="fa fa-inr"></i> 9,259</a>
            <p>( inclusive of all taxes )</p>
            </div>
        </div>

        <div className='pr-height'>
            <label>HEIGHT IN INCHES</label>
            <div className='selection-btns'>
                <a href='#'className='active-btn'>8</a>
                <a href='#'className='inactive-btn'>10</a>
            </div>
        </div>

        <div className='pr-height'>
            <label>CATEGORY</label>
            <div className='selection-btns'>
                <a href='#'className='active-btn'>Single</a>
                <a href='#'className='inactive-btn'>Double</a>
                <a href='#'className='inactive-btn'>Queen</a>
                <a href='#'className='inactive-btn'>King</a>
            </div>
        </div>

        <div className='pr-dimention'>
            <label>DIMENTION IN INCHES</label>
            <div className='selection-btns'>
            <select class="form-controll">
                <option value="72X30">72X30</option>
                <option value="72X36">72X36</option>
                <option value="72x42">72x42</option>
                <option value="75x30">75x30</option>
                <option value="75x36">75x36</option>
                <option value="75x42">75x42</option>
                <option value="78x30">78x30</option>
                <option value="78x36">78x36</option>
                <option value="78x42">78x42</option>
            </select>
            <a href='#'className='inactive-btn'>Get Custom Size</a>
            </div>
            <p className='note'>Note : Select Appropriate Size Before Proceeding</p>
            </div>

            <div className='pr-color'>
            <label>COLOUR</label>
            <div className='selection-btns'>
            <a href='#'className='colour-img'>
                <img src={color_img_1} class="pr-color-img" alt="product_color_image" />
            </a>
            <a href='#'className='colour-img'>
            <img src={color_img_2} class="pr-color-img" alt="product_color_image" />
            </a>
            </div>
            </div>

            <div className='pr-coupon'>
            <label>APPLY COUPON CODE</label>
            <div className='coupon-section'>
            <textarea></textarea>
            <a href='#'>Check</a>
            </div>
            </div>
                   
        </div>

        <div className='buy-section'>
            <a href='#' className='add-cart'>ADD TO CART</a>
            <a href='#' className='buy-now'>BUY NOW</a>
            </div>


            <div className='desc-review'>
                <ul class="nav nav-tabs">
                    <li class="active">
                    <a data-toggle="tab" href="#desc-content"  class="active show">Description</a>
                    </li>
                    <li>
                    <a data-toggle="tab" href="#review-content" class>Review</a>
                    </li>
                </ul>
                <div className='tab-content'>

                    <div id='desc-content' class="tab-pane fade in active show">
                <div className='desc-img'>
                <img src={desc_img_1} class="pr-desc-img" alt="product_desc_image" />
                </div>
                
                <h3>Sleep just springs upon you!</h3>
                <p className='desc-text'>Get a comfortable sleep in a compact mattress that is made with a Bonnell spring in the core.Each and every part of this interlinked spring mesh works in unison to render you a Continuous support till the edges. This is a reversible mattress and offers resilience on both the sides that also have quilted top and bottom surfaces with finely woven jacquard fabric along with a supple layer of super soft foam.</p>
                <div className='desc-img'>
                <img src={desc_img_1} class="pr-desc-img" alt="product_desc_image" />
                </div>
                
                <h3 className='mattress-feel'>Feel breezy, brisk and buoyant in Selene TT</h3>
                <p className='small-desc'>where your sleep is sure an upbeat!</p>
                <div className='desc-img'>
                <img src={desc_img_1} class="pr-desc-img" alt="product_desc_image" />
                </div>
                
                <h3>Is it Value for Money ?</h3>
                <p className='small-desc'>It is cost-effective, designed for long lasting use with uncompromising quality and it holds good value for money.</p>
                </div>

                <div id='review-content' class="tab-pane fade">

                </div>
                </div>
            </div>

        <Product_Cart />
        <footer>
        <div className='add-to-cart-section'>
            <div className='price-view'>
            <p className='mrp-rate'>M.R.P <i class="fa fa-inr"><s> 11,598</s></i></p>
            <a href="#"><i class="fa fa-inr"></i> 9,259</a>
            </div>
            <a href='#' className='add-to-cart-btn'>Add to Cart</a>
            </div>
            </footer>

        </div>
        </div>
        
   
    );
}