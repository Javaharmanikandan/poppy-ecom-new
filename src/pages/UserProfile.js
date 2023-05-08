import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import Footer from "../Components/footer";
import Header from "../Components/header";
import Loader from "../Components/loader";
import axios from 'axios';
import {toast} from "react-toastify";

export default function UserProfile() {

 let navigate = useNavigate();
toast.configure();
  const [orders, setOrders] = useState([]);

  const userData =  JSON.parse(localStorage.getItem('userInfo'));

  const  baseurl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
 
    category_list_fun();
  

  }, []);



  const category_list_fun = async () => {



    if (userData === null) {

      toast.error("Please Login");
      
      navigate('/login');

    }
    else {
        
      const requestBody = {
    
        user_mobile:  userData.email
       
      };

      const result_data = await axios
        .post(baseurl + "user/order_view/", requestBody)
        .then(function (response) {

 
          setOrders(response.data.data)

        })



  
    }

  };



  return (
    <>
    <div class="user-acount">
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
                      <span>Order History</span>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </nav>

          <div class="acount head-acount">
            <div class="container">
              <div id="main">
                {/* <h1 class="title-page">My Account</h1> */}
                {/* <div class="content" id="block-history"> */}
                  {/* <table class="std table">
                    <tbody>
                      <tr>
                        <th class="first_item">My Name :</th>
                        <td>David James</td>
                      </tr>
                      <tr>
                        <th class="first_item">Company :</th>
                        <td>TivaTheme</td>
                      </tr>
                      <tr>
                        <th class="first_item">Address :</th>
                        <td>123 canberra Street, New York, USA</td>
                      </tr>
                      <tr>
                        <th class="first_item">City :</th>
                        <td>New York</td>
                      </tr>
                      <tr>
                        <th class="first_item">Postal/Zip Code :</th>
                        <td>10001</td>
                      </tr>
                      <tr>
                        <th class="first_item">Phone :</th>
                        <td>0123456789</td>
                      </tr>
                      <tr>
                        <th class="first_item">Country:</th>
                        <td>USA</td>
                      </tr>
                    </tbody>
                  </table> */}
                {/* </div> */}
                {/* <button
                  class="btn btn-primary"
                  data-link-action="sign-in"
                  type="submit"
                >
                  view Address
                </button> */}
                <div class="order">
                  <h4>
               
                    <span class="detail"> Order History</span>
                  </h4>
                  <div id="block-history" class="block-center">
                        <table class="std table">
                          <thead>
                            <tr>
                              <th class="first_item">Order Id</th>
                              <th class="item mywishlist_first">Order Date</th>
                              <th class="item mywishlist_first">Order Total</th>
                              <th class="item mywishlist_second">Order Status</th>
                              <th class="item mywishlist_second">Track ur Order</th>
                              {/* <th class="item mywishlist_second">
                                
                              </th>
                              <th class="item mywishlist_second">Default</th>
                              <th class="last_item mywishlist_first">Delete</th> */}
                            </tr>
                          </thead>
                          <tbody>

                          {orders.map((items_cat ,index)=>(


                            <tr id="wishlist_1">



                        

                              <td class="bold align_center">{items_cat.order_id}</td>
                                <td class="bold align_center">{items_cat.date_time}</td>

                                  <td class="bold align_center"> ₹ {items_cat.total_price}</td>
                                    <td class="bold align_center"><lable  style={{
        backgroundColor: 'orange',
       padding:'10px',
       color:'black',
       fontWeight:'bold'
       
      }}>Pending</lable></td>
{/* <Link to={`/order_track/${items_cat.order_id}`} > */}
<td class="bold align_center"><a href={`/order_track/${items_cat.order_id}`} ><lable  style={{
        backgroundColor: 'blue',
       padding:'10px',
       color:'black',
       fontWeight:'bold'
       
      }}>Track</lable></a></td>
                               
                                    
                             
                             
                             
                              
                     
                            
                            </tr>
                          ))}
                          </tbody>
                        </table>
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
