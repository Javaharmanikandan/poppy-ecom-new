import { Link, NavLink } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from 'react-router-dom';

import { CartContext } from "../Context/Ecomcontext";
import Cart_empty from "./cartempty";
import Loader from "../Components/loader";
import cartSection from "../Helper/Cart";

const baseurl = process.env.REACT_APP_BASE_URL;


const imgurl = process.env.REACT_APP_IMG_URL;
function Cart() {
  let navigate = useNavigate();
  
  //  var base ="http://poppyindia.com/erp/assets/images/";

   var cart_data_demo =sessionStorage.getItem("poppy-cart");

  const [cart, setCart] = useContext(CartContext);

const buy_func = ()=> {

    window.location.href = "https://poppyindia.com/checkout"
 
  };

  useEffect(() => {
    var cart_data =sessionStorage.getItem("poppy-cart");

    if (cart_data != null) {
      setCart(JSON.parse(cart_data));
    }
    if (cart !== '') {
      total = cart.reduce((prev, next) => parseInt(prev) + parseInt(next.amount), 0);
    } else {
      total = 0;
    }
  }, []);
  

  if (cart.length==0)
  {

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
                  <div class="cart-grid-right col-xs-12 col-lg-3 media_set">
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
                    {/* <div id="block-reassurance">
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
                    </div> */}
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

  const removeProduct = (id) =>{
    setCart( cartSection.removeCart(id));
  }


  const addCart_update = (id, amt, type) => {
    //TODO METHOD ACTION FOR ADD




    setCart(cartSection.addCart_update(id, parseInt(amt), type));

  }
  if (cart !== null) {
    var total = cart.reduce((prev, next) => parseInt(prev) +  parseInt(next.amount), 0);
  } else {
    total = 0;
  }

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





                        {cart.length > 0 ? cart.map(ad =>(
                          <li class="cart-item">
                            <div class="product-line-grid row justify-content-between">
                              <div class="product-line-grid-left col-md-2">
                                <span class="product-image media-middle">
                                  <a >
                                    <img
                                      class="img-fluid"
                                      src={imgurl+ad.image}
                                      alt="No Image Available"
                                    />
                                  </a>
                                </span>
                              </div>
                              <div class="product-line-grid-body col-md-6">
                                <div class="product-line-info">
                                  <a
                                    class="label"
                                    href="product-detail.html"
                                    data-id_customization="0"
                                  >
                                    {ad.title}
                                  </a>
                                </div>
                                <div class="product-line-info product-price">
                                  <span class="value">₹ {ad.amount/ad.product_count}</span>
                                </div>
                                <div class="product-line-info">
                                  <span class="label-atrr">Size:</span>
                                  <span class="value">{ad.bed_type}</span>
                                </div>
                                <div class="product-line-info">
                                  <span class="label-atrr">Dimension:</span>
                                  <span class="value">{ad.dimension}</span>
                                </div>
                                <div class="product-line-info">
                                  <span class="label-atrr">Thcikness:</span>
                                  <span class="value">{ad.thickness}</span>
                                </div>
                              </div>
                              <div class="product-line-grid-right text-center product-line-actions col-md-4">
                                <div class="row">
                                  <div class="col-md-5 col qty">
                                    <div class="label">Qty:</div>
                                    <div class="quantity">
                                      <input
                                        type="text"
                                        name="qty"
                                        value={ad.product_count}
                                        class="input-group form-control"
                                      />

                                      <span class="input-group-btn-vertical">
                                        <button
                                          class="btn btn-touchspin js-touchspin bootstrap-touchspin-up"
                                          type="button"
                                          onClick={()=>addCart_update(ad.product_id,ad.amount/ad.product_count,"plus")}
                                        >
                                          +
                                        </button>
                                        <button
                                          class="btn btn-touchspin js-touchspin bootstrap-touchspin-down"
                                          type="button"
                                          onClick={()=>addCart_update(ad.product_id,ad.amount/ad.product_count,"minus")}
                                        >
                                          -
                                        </button>
                                      </span>
                                    </div>
                                  </div>
                                  <div class="col-md-5 col price">
                                    <div class="label">Total:</div>
                                    <div class="product-price total">
                                      ₹ { parseInt(ad.amount) }
                                    </div>
                                  </div>
                                  <div class="col-md-2 col text-xs-right align-self-end">
                                    <div class="cart-line-product-actions ">
                                      <a
                                        class="remove-from-cart"
                                        rel="nofollow"
                                        href="#"
                                        data-link-action="delete-from-cart"
                                        data-id-product="1"
                                        onClick={()=>removeProduct(ad.product_id)}
                                        style={{pointer:"cursor"}}
                                      >
                                        <i
                                          class="fa fa-trash-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        )):""}



                        </ul>
                      </div>
                    </div>
                     <a
                      href="/checkout"
                      class="continue btn btn-primary pull-xs-right"
                    >
                      Checkout
                    </a>
                  </div>
                  <div class="cart-grid-right col-xs-12 col-lg-3 media_set" >
                    <div class="cart-summary">
                      <div class="cart-detailed-totals">
                        <div class="cart-summary-products">
                          <div class="summary-label">
                            There are {cart.length < 0 ? 0 : cart.length} item in your cart
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
                          <span class="value"> ₹ {parseInt(total)}</span>
                        </div>
                      </div>
                    </div>
                    {/* <div id="block-reassurance">
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
                    </div> */}
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

export default Cart;
