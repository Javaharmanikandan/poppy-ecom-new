import React,{useContext} from 'react'

import { CartContext } from "../Context/Ecomcontext";
import { Link } from "react-router-dom";
import cartSection from "../Helper/Cart";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const imgurl = process.env.REACT_APP_IMG_URL;
function ProductgridAcc(props) {
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
                              <div class="product-miniature js-product-miniature item-one first-item">
                                <div class="thumbnail-container ">
                                <Link to={`/accessoriesdetail/${props.title.replace(/ /g, "-")}`} >
                                    <img
                                      class="img-fluid image-cover"
                                      src={imgurl+props.img}
                                      alt="img"
                                    />
                                    <img
                                      class="img-fluid image-secondary"
                                      src={imgurl+props.img1}
                                      alt="img"
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
                                    <div style={{marginTop:13,textAlign:"center"}}>
                                    <Link to={`/accessoriesdetail/${props.title.replace(/ /g, "-")}`} >
                                       {props.title}
                                      </Link>
                                    </div>

                                    <div style={{textAlign:"center"}}>
                                    <i style={{ marginLeft:2,color:' #982876',paddingTop:10,fontWeight:'500',fontSize:14}} class="fa fa-inr" aria-hidden="true"></i> <span style={{ marginLeft:2,color:' #982876',paddingTop:10,fontWeight:'bold',fontSize:18,fontFamily:"system-ui"}}>{props.price} /-</span>
                                    </div>
                                 
                                  
                                  </div>
                          
                                </div>
                              </div>
                            </div>
    </>
  )
}

export default ProductgridAcc