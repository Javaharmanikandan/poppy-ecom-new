import React,{useContext} from 'react'

import { CartContext } from "../Context/Ecomcontext";
import { Link } from "react-router-dom";
import cartSection from "../Helper/Cart";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const imgurl = process.env.REACT_APP_IMG_URL;
function Productlist(props) {
    let navigate = useNavigate();
  toast.configure();

  const [cart, setCart] = useContext(CartContext);

  const favProductadd = (id) =>{

    if(localStorage.getItem('userInfo') !== null){
      toast.success("Added To Favorites");
    }else{
      toast.error("Please Login First ");
    }
    
  
  }


  var base ="http://poppyindia.com/erp/assets/images/";

  var original_image=base+props.img;

  const addTocart = (id, amt, title) => {
    
    setCart(cartSection.addCart(id, amt, title));
    toast.success("product Added Successfully ");
  }

  const productDetailpage = () =>{
    navigate('/productdetail');
  }

  return (
    <>
         <div class="item col-md-12">
                              <div class="product-miniature item-one first-item">
                                <div class="row">
                                  <div class="col-md-4">
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
                                    </div>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="product-description">
                                      <div class="product-groups">
                                        <div class="product-title">
                                        <Link to={`/productdetail/${props.title.replace(/ /g, "-")}`} >   <a  style={{cursor:"pointer"}} >
                                           {props.title}
                                          </a></Link>                                         
                                        </div>                                   
                                     </div>                                   
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
    </>
  )
}

export default Productlist