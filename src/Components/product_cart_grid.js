import React,{useContext} from 'react'

import { CartContext } from "../Context/Ecomcontext";
import { Link } from "react-router-dom";
import cartSection from "../Helper/Cart";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProductCardCommon } from '../pages/Components/ProductCardCommon';
import { MobileProductCard } from '../pages/Components/MobileProductCard';

const imgurl = process.env.REACT_APP_IMG_URL;
function Productgrid(props) {
    let navigate = useNavigate();
    toast.configure();
  
    const [cart, setCart] = useContext(CartContext);
  
    const favProductadd = (id) =>{
  
      if(localStorage.getItem('userInfo') !== null){
        toast.success("Added To Favorites");
      }else{
        //TODO SERVER SIDE ADDING
        toast.error("Please Login First ");
      }
      
    
    }
  
    const addTocart = (id, amt, title) => {
      //TODO METHOD ACTION FOR ADD
      toast.success("product Added Successfully ");
  
      setCart(cartSection.addCart(id, amt, title));
  
    }
    var base ="http://poppyindia.com/erp/assets/images/1.jpg";

    const image = require("../assets/img/product/pr17.jpg")
    const productDetailpage = () =>{
      navigate('/productdetail');
    }
  return (
    <>
    <div class="item text-center col-md-4">
                              {/* <div class="product-miniature js-product-miniature item-one first-item">
                                <div class="thumbnail-container ">
                                <Link to={`/productdetail/${props.title.replace(/ /g, "-")}`} >
                                    <img
                                      class="img-fluid image-cover"
                                      src={imgurl+props.img}
                                       alt={"Poppy Mattress "+props.title}
                                    />
                                    <img
                                      class="img-fluid image-secondary"
                                      src={imgurl+props.img1}
                                       alt={"Poppy Mattress "+props.title}
                                    />
                            
                                  </Link>

                                  <div class="highlighted-informations">
                                    <div class="variant-links">
                                      <a
                                        href="#"
                                        class="color beige"
                                        title="Beige"
                                      ></a>
                                      <a
                                        href="#"
                                        class="color orange"
                                        title="Orange"
                                      ></a>
                                      <a
                                        href="#"
                                        class="color Orange"
                                        title="Orange"
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                                <div class="product-description">
                                  <div class="product-groups">
                                    <div class="product-title">
                                    <Link to={`/productdetail/${props.title.replace(/ /g, "-")}`} >
                                       {props.title}
                                      </Link>
                                    </div>
                                  </div>
                           
                                </div>
                              </div> */}
                              <div class="product-miniature js-product-miniature item-one first-item desktop-responisve" style={{padding:10}}>
                                <ProductCardCommon dataDetails={props.detailsData} img={imgurl+props.img}/></div>
                            
                            <div class="product-miniature js-product-miniature item-one first-item mobile-responisve" style={{padding:5}}>
                                <MobileProductCard dataDetails={props.detailsData} img={imgurl+props.img}/></div>
                            </div>


    </>
  )
}

export default Productgrid