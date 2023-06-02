import React, { useContext } from 'react'
import "./../styles/common.css";
import { useHistory, useNavigate, useParams } from 'react-router-dom';
import { addtoWishlist } from '../../Helper/Wishlist';
import { CartContext } from '../../Context/Ecomcontext';
import { toast } from "react-toastify";

import cartSection from "../../Helper/Cart";

const imgurl = process.env.REACT_APP_IMG_URL;

export const ProductCardCommon = (props) => {

   console.log(props.dataDetails)

  let navigate = useNavigate();

  const [cart, setCart] = useContext(CartContext);

  toast.configure();



  const movepage = (id_get) =>{
    //TODO NAVIGATE TO ERROR PAGE
    navigate('/redirect/'+id_get.replace(/ /g, "-"));
  }

  const addWish= async(p_id,total_amount,product_name, product_image,product_size,product_dimen, product_height)=>{
    await addtoWishlist( p_id,total_amount,product_name, product_image,product_size,product_dimen, product_height)

  }
 


  const addTocart = (id, amt, title, image, bed_type, dimension, thickness,free_content,discount_per,product_price) => {
    //TODO METHOD ACTION FOR ADD
    toast.success("Product Added Successfully ");

    setCart(
      cartSection.addCart(id, parseInt(amt), title, image, bed_type, dimension, thickness,free_content,"Stock Color",discount_per,product_price)
    );
  };



// console.log("hi")

  return (
    
    <div className='product_card' >
    <div className='product-img'>
        <img  onClick={() =>{movepage(props.dataDetails.product_name)}} className='product-image' src={imgurl+props.dataDetails.product_imageurl} alt='Product_image' />
        <a  onClick={()=>{
          addWish(props.dataDetails.id,
          props.dataDetails.DiscountedPrice.toFixed(0),
          props.dataDetails.product_name,
          props.dataDetails.product_imageurl,
          props.dataDetails.bed_type,
          props.dataDetails.product_dimensions,
          props.dataDetails.thickness,)}}><i class='fa fa-heart-o'></i></a>
    </div>
    <div className='product-title'>
      <h2 onClick={() =>{movepage(props.dataDetails.product_name)}}>{props.dataDetails.product_name}</h2>
      <a 
      onClick={()=>{
        addTocart(props.dataDetails.id,
        props.dataDetails.DiscountedPrice.toFixed(0),
        props.dataDetails.product_name,
        props.dataDetails.product_imageurl,
        props.dataDetails.bed_type,
        props.dataDetails.product_dimensions,
        props.dataDetails.thickness,
        props.dataDetails.free_content,
        props.dataDetails.discount_percentage,
        props.dataDetails.product_price)}}
        ><i class='fa fa-shopping-cart'></i></a>
    </div>
    <p className='product-description'>{props.dataDetails.marketing_description}</p>
    <div className='price-details'>
      <div className='Current-price'>
      <p>Price Starts from</p>
      <a href='#'><i class="fa fa-inr"></i> {props.dataDetails.DiscountedPrice.toFixed(0)}</a>
      </div>
      <div className='mrp-price'>
        <p className='mrp-rate'>M.R.P  <i class="fa fa-inr" style={{marginLeft:5}}> <s > {props.dataDetails.product_price.toFixed(0)}</s></i></p>
        <p className='offer-percentage'>{props.dataDetails.discount_percentage} %</p>
      </div>
    </div>
    </div>

  )
}
