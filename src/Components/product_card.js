import React,{useContext} from "react";

import { CartContext } from "../Context/Ecomcontext";
import { Link } from "react-router-dom";
import cartSection from "../Helper/Cart";
import {toast} from "react-toastify";
import "./styles/product-card.css";

let baseUrl = process.env.REACT_APP_BASE_URL;
const imgurl = process.env.REACT_APP_IMG_URL;
function Product_card(props) {

 
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

  return (

    <>
      <div class="col-md-3 col-xs-12">
        <div class="product-miniature js-product-miniature item-one first-item">
          <div class="thumbnail-container">
            <Link to={`/productdetail/${props.title.replace(/ /g, "-")}`} >
              <img
                class="img-fluid"
                src={imgurl+props.img}
                alt={"Poppy Mattress "+props.title}  
              />
              </Link>
            <div class="product-flags discount">{props.discount}%</div>
            <div class="highlighted-informations">
            </div>
          </div>
          <div class="product-description">
            <div class="product-groups">
              {/* <div class="product-title">
              <Link to={`/productdetail/${props.title.replace(/ /g, "-")}`} > {props.title}</Link>
              </div> */}

              <div className='product-title'>
              <Link to={`/productdetail/${props.title.replace(/ /g, "-")}`} ><h2>{props.title}</h2></Link>
      <i class='fa fa-shopping-cart'></i>
    </div>
    <p className='product-description'>{props.marketing_description}</p>
    <div className='price-details'>
      <div className='Current-price'>
      <p>Price Starts from</p>
      <a href='#'><i class="fa fa-inr"></i> {props.dprice}</a>
      </div>
      <div className='mrp-price'>
        <p className='mrp-rate'>M.R.P <i class="fa fa-inr"><s> {props.rprice}</s></i></p>
        <p className='offer-percentage'>{props.discount}%</p>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_card;
