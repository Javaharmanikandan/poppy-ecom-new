import React, { useEffect, useState } from "react";

import "./styles/order_track.css";
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import {OrderPending , OrderOnprogress, OrderDispatched, OrderDelivered} from "./order_track/PendingOrder";

import { render } from "react-dom";

const  baseurl = process.env.REACT_APP_BASE_URL;

function Order_Track() {
 
    const [details,setDetails]=useState({});

    const { id } = useParams();


    useEffect(() => {

        getorder_Details();
  
      },[]);

      const OrderTrack = (orderTrack) => {

       

        switch(orderTrack) {
            case "Pending" || "pending" :
              // code block
              return <OrderPending/>

              break;
            case "onprogress" || "Onprogress":
              // code block

              return <OrderOnprogress/>

              case "dispatched" || "Dispatched" :
              // code block

              return <OrderDispatched/>
              break;


              case "completed" || "Completed":
                // code block
  
                return <OrderDelivered/>
                break;
            
            default:
              // code block
            //   return <PendingOrder/>
          }

      }


      const getorder_Details = async () => {

  
   
         const requestBody = {
           
            order_id: id

        };
      
        
    
         const result_data = await axios
      
           .post(baseurl + "user/order_track", requestBody)
      
           .then(function (response) {
      
         //TO SET PRODUCT BED TYPE 

        
      
         setDetails(response.data.data)
      
    
     
      
        })
      
      }

      

     
    

  return (
    <>
<br/>
<br />
<div class="card">
    <div class="title1">Purchase Reciept</div>
    <div class="info">
        <div class="row">
            <div class="col-7"> <span id="heading">Date .</span> <span id="details">{details.length > 0 ? details[0].date_time: "0" }</span> </div>
            <div class="col-5 pull-right"> <span  id="heading">Order No.</span> <span style={{color:'#982876',fontWeight:'bold'}} id="details">{details.length > 0 ? details[0].order_id: "0" }</span> </div>
        </div>
    </div>
    <div class="pricing">

    { details.length > 0 ?   
                                    details.map(
                                      (element_details, index) => (


        <div class="row" style={{marginLeft:0}}>
            <div class="col-3"> <span id="name">{element_details.product_name}</span> </div>
            
            <div class="col-3"> <span id="name">{element_details.bed_type}</span> </div>
            <div class="col-3"> <span id="name">{element_details.dimension}</span> </div>
            <div class="col-3"> <span id="price"> ₹ {element_details.price}</span> </div>
        </div>

)
) : ""}
      
    </div>
    <div class="total">
        <div class="row">
            <div class="col-9"></div>
            <div class="col-3"><big>₹ {details.length > 0 ? details[0].total_price: "0" }</big></div>
        </div>
    </div>
    <div class="tracking">
        <div class="title1">Tracking Order</div>
    </div>
    <div class="progress-track">
        <ul id="progressbar">
            {OrderTrack(details.length > 0 ? details[0].order_status: "pending" )}
           


        </ul>
    </div>
    <div class="footer">
        <div class="row">
            <div class="col-2"><img class="img-fluid" src="/favicon.png" /></div>
            <div class="col-10">Want any help? Please &nbsp;<a> contact us</a></div>
        </div>
    </div>
</div>
<br />
<br />
    
    </>
  );
}

export default Order_Track;





