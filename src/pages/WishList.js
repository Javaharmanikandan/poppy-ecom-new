import React, { useState ,useEffect,useContext} from "react";
import Loader from "../Components/loader";
// import Header from "../Components/header";
// import Footer from "../Components/footer";

import {toast} from "react-toastify";

import cartSection from "../Helper/Cart";

import { CartContext } from "../Context/Ecomcontext";

import axios from 'axios';


const  baseurl = process.env.REACT_APP_BASE_URL;

const userData =  JSON.parse(localStorage.getItem('userInfo'));


export default function WishList() {


  toast.configure();
  const [cart, setCart] = useContext(CartContext); 
  const [wishlist,set_wishlist]=useState({});
  




  useEffect(() => {
    
    // // getProduct_price();
    // alert(local);
    
    getwishlist_details()
    
  },[wishlist]);
    



  const getwishlist_details = async () => {
    
    
    if(userData===null)
    {

      toast.error("Please Login");
      
     

    }
    else
    {
    const requestBody = {
      
      user_id: userData.email,
 
      
    };
    
    
    
    const result_data = await axios
    
    .post(baseurl + "user/wishlist_list_view/", requestBody)
    
    .then(function (response) {
      
      //TO SET PRODUCT BED TYPE 
      
      set_wishlist(response.data.data)
      
    
    })
  }
  }


 
 
  const removewishlist = (id) => {
    
    const requestBody = {
      
      id:id,
 
      
    };
    
    
    
    const result_data =  axios
    
    .post(baseurl + "user/remove_wishlist/", requestBody)
    
    .then(function (response) {
      
     
      
    
    })

    toast.error("product Deleted Successfully ");
    
    
  };

  const addTocart = (id, amt, title,image,bed_type,dimension,thickness) => {
    //TODO METHOD ACTION FOR ADD
    toast.success("product Added Successfully ");
    
    
    
    setCart(cartSection.addCart(id, amt, title,image,bed_type,dimension,thickness));
    
  }
  

console.log(wishlist)
  return (
    <>
    <div class="user-wishlist blog">
      <div class="main-content">
        <div class="wrap-banner">
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
                      <span>Wishlists</span>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </nav>
        </div>

        <div id="wrapper-site">
          <div class="container">
            <div class="row">
              <div
                id="content-wrapper"
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol"
              >
                <div id="main">
                  <div id="content" class="page-content">
                    <div id="mywishlist">
                      <h1 class="title-page">My Wishlists</h1>
                      {/* <form method="post" class="std" id="customer-form">
                        <fieldset>
                          <h3>New wishlist</h3>
                          <div class="input-group">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Name"
                              class="form-control"
                              value=""
                            />
                            <button
                              class="btn"
                              type="submit"
                              data-action="show-password"
                              data-text-show="Show"
                              data-text-hide="Hide"
                            >
                              Save
                            </button>
                          </div>
                        </fieldset>
                      </form> */}
                      <div id="block-history" class="block-center">
                        <table class="std table">
                          <thead>
                            <tr>
                              <th class="first_item">Product Name</th>
                              <th class="item mywishlist_first">Height</th>
                              <th class="item mywishlist_first">Size</th>
                              <th class="item mywishlist_second">Dimension</th>
                              <th class="item mywishlist_second">
                                Price
                              </th>
                              <th class="item mywishlist_second"><center>To Cart</center></th>
                              <th class="last_item mywishlist_first">Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                          { wishlist.length > 0 ?   
                    wishlist.map(
                      (ele_wish, index) => (
                            <tr id="wishlist_1">
                              <td>
                                <a
                                  href="javascript:;"
                                  onclick="javascript:WishlistManage('block-order-detail', '1');"
                                >
                                  {ele_wish.product_name.toUpperCase()}
                                </a>
                              </td>
                              <td class="bold align_center"> {ele_wish.height}</td>
                              <td> {ele_wish.size.toUpperCase()}</td>
                              <td> {ele_wish.dimension}</td>
                              <td> {ele_wish.product_amount}</td>
                              <td >
                             <center><a class="addToWishlist"  onClick={() => addTocart(ele_wish.product_id,ele_wish.product_amount ,ele_wish.product_name,ele_wish.product_image,ele_wish.size,ele_wish.dimension,ele_wish.height)}>
                            <i
                            class="fa fa-heart"
                            aria-hidden="true"
                            ></i>
                            </a></center>
                              </td>
                           
                              <td class="wishlist_delete">
                                <a
                                  href="javascript:;"
                                  onClick={() => removewishlist(ele_wish.id)}
                                >
                                  Delete
                                </a>
                              </td>
                            </tr>
                      )):<tr><td colspan="7"><center>< img src={"https://mehrallies.co.tz/shop/img/core-img/no_products_found.png"} /></center></td></tr>}
                          </tbody>
                        </table>
                      </div>
                      {/* <div class="page-home">
                        <a class="btn btn-default" href="index-2.html">
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Homepage</span>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader />
    </div>
    </>
  );
}
