import React, { useState, useEffect, useContext } from "react";


import Loader from "../Components/loader";

import { Link, NavLink } from "react-router-dom";

import { useHistory, useNavigate, useParams } from 'react-router-dom';

const baseurl = process.env.REACT_APP_BASE_URL;


const imgurl = process.env.REACT_APP_IMG_URL;

function Empty_cart() {

   
//   let navigate = useNavigate();

//  useEffect(() => {
   
     
//      navigate('/product_details/');
//   });
    // cart_data = [{"product_id":"20","amount":20904,"product_count":1,"title":"Selene T.T","image":"selene-tt-thumn.jpg","bed_type":"Single","dimension":"72X72","thickness":"6 inch"},{"product_id":"2","amount":null,"product_count":3,"title":"The Guardianz E.T","image":"thumbnails-GETB2.jpg","bed_type":"Single","dimension":"72X72","thickness":"6 inch"}];

    // alert(cart_data);


  return (
    <>
    <div class="product-cart checkout-cart blog">
    <div class="main-content" id="cart">
      <div id="wrapper-site">
        <nav class="breadcrumb-bg">
          <div class="container no-index">
            <div class="breadcrumb">
              <ol>
                <li>
                  <a href="#">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Shopping Cart</span>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div
              id="content-wrapper"
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol"
            >
              <section id="main">
                <div class="cart-grid row">
                  <div class="col-md-9 col-xs-12 check-info">
                    <h1 class="title-page">Shopping Cart</h1>
                    <div class="cart-container">
                      <div class="cart-overview js-cart">
                        <ul class="cart-items">


                             <li><center>< img src={"https://mehrallies.co.tz/shop/img/core-img/no_products_found.png"} /></center></li>



                        </ul>
                      </div>
                    </div>
            
                  </div>
                  <div class="cart-grid-right col-xs-12 col-lg-3">
                    <div class="cart-summary">
                      <div class="cart-detailed-totals">
                        <div class="cart-summary-products">
                          <div class="summary-label">
                            There are 0 item in your cart
                          </div>
                        </div>
                        {/* <div
                          class="cart-summary-line"
                          id="cart-subtotal-products"
                        >
                          <span class="label js-subtotal">Total products:</span>
                          <span class="value">£200.00</span>
                        </div> */}
                        <div
                          class="cart-summary-line"
                          id="cart-subtotal-shipping"
                        >
                          <span class="label">Total Shipping : </span>
                          <span class="value"> Free</span>
                          <div>
                            <small class="value"></small>
                          </div>
                        </div>
                        <div class="cart-summary-line cart-total">
                          <span class="label">Total : </span>
                          <span class="value"> ₹ 0</span>
                        </div>
                      </div>
                    </div>
                    <div id="block-reassurance">
                      <ul>
                        <li>
                          <div class="block-reassurance-item">
                            <img
                              src={require("../assets/img/product/check1.png")}
                              alt="Security policy (edit with Customer reassurance module)"
                            />
                            <span>
                              Security policy (edit with Customer reassurance
                              module)
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="block-reassurance-item">
                            <img
                              src={require("../assets/img/product/check2.png")}
                              alt="Delivery policy (edit with Customer reassurance module)"
                            />
                            <span>
                              Delivery policy (edit with Customer reassurance
                              module)
                            </span>
                          </div>
                        </li>
                        <li>
                          <div class="block-reassurance-item">
                            <img
                              src={require("../assets/img/product/check3.png")}
                              alt="Return policy (edit with Customer reassurance module)"
                            />
                            <span>
                              Return policy (edit with Customer reassurance
                              module)
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader/>
    </div>
    </>
  );
}

export default Empty_cart;
