import React from 'react'
import "./../styles/common.css";
import "./MobileCard.css";
import { useHistory, useNavigate, useParams } from 'react-router-dom';
const imgurl = process.env.REACT_APP_IMG_URL;
export const MobileProductCard = (props) => {

   //console.log(props.dataDetails)

  let navigate = useNavigate();


  const movepage = (id_get) =>{
    //TODO NAVIGATE TO ERROR PAGE
    navigate('/redirect/'+id_get.replace(/ /g, "-"));
  }
  

// console.log("hi")

  return (

    //Whole Div
    <>
    <div className='MainProductContainer'  onClick={() =>{movepage(props.dataDetails.product_name)}}>
        <div className='ProductDetailsContainer'>
            <div className='imageContainer'>
            <img  onClick={() =>{movepage(props.dataDetails.product_name)}} src={imgurl+props.dataDetails.product_imageurl} alt={props.dataDetails.product_name} />
            </div>
             <div className='basicDetailsContainer'>
             <h2 onClick={() =>{movepage(props.dataDetails.product_name)}}>{props.dataDetails.product_name}</h2>
             <div className='mrp-price-mobile'>
              <p className='mrp-rate-mobile'>M.R.P <i class="fa fa-inr"><s> {props.dataDetails.product_price.toFixed(0)}</s></i></p>
              <p className='discountTag'>{props.dataDetails.discount_percentage} %</p>
           </div>
           <div className='YouHaveSaved'>
            <p>You Save  ₹ <span style={{fontFamily:'system-ui'}}>{props.dataDetails.product_price-props.dataDetails.DiscountedPrice}</span></p>
           </div>

           <p className='startText'>Price Starts from</p>
           <div className='Current-Prices'>
  <a  style={{fontSize:16,fontWeight:'bold',color:'black',fontFamily:'system-ui'}}><i class="fa fa-inr"></i> {props.dataDetails.DiscountedPrice.toFixed(0)}</a>
      <a href="#"><i style={{color:"#982876" ,fontWeight:'bold',fontSize:18}} class='fa fa-shopping-cart'></i></a>
      </div>
      <span className='spanText'>( inclusive of all taxes )</span>

             </div>

        </div>

        <p className='descriptionMarketting'>Designed for a two-way use, utility of the mattress is doubled and also made economically viable.</p>
        <a href="#"><div className='shopNowContainer'>
            <a className='shopNow' style={{fontSize:14}}>shop now</a>
            <i class='fa fa-angle-right' style={{marginLeft:5,fontSize:14}}></i>
        </div></a>

    </div>


    
    {/* <div className='product_card'  onClick={() =>{movepage("EXUBER T.T")}}>
    <div >
        <img  onClick={() =>{movepage("EXUBER T.T")}}  src={imgurl+props.dataDetails.product_imageurl} alt={props.dataDetails.product_name} />
        <a ><i class='fa fa-heart-o'></i></a>
    </div>
    <div>
    <div className='product-title'>
      <h2 onClick={() =>{movepage(props.dataDetails.product_name)}}>{props.dataDetails.product_name}</h2>
     
    </div>
    <div className='price-details'>
      <div className='Current-price'>
      <p>Price Starts from</p>
      <a href='#'><i class="fa fa-inr"></i> {props.dataDetails.DiscountedPrice.toFixed(0)}</a>
      </div>
      <div className='mrp-price'>
        <p className='mrp-rate'>M.R.P <i class="fa fa-inr"><s> {props.dataDetails.product_price.toFixed(0)}</s></i></p>
        <p className='offer-percentage'>{props.dataDetails.discount_percentage} %</p>
      </div>
    </div>
    </div>
    </div> */}
    </>
  )
}
