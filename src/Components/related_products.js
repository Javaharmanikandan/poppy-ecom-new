import "./styles/related.css";

import { useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from 'react-router-dom';

import { Link } from "react-router-dom";
import React from "react";
import axios from 'axios';
import { ProductCardCommon } from "../pages/Components/ProductCardCommon";
import { MobileProductCard } from "../pages/Components/MobileProductCard";
const baseurl = process.env.REACT_APP_BASE_URL;

const imgurl = process.env.REACT_APP_IMG_URL;
function Related_product(props) {
let cat = props.category;

let navigate = useNavigate();
    const [related_product, setRel] = useState({});

 const [refresh, setrefresh] = useState(false);

     useEffect(() => {
    
         getralted_products();
       
    
     }, [cat]);
    
    
    
    
    
    
  const getralted_products = async () => {

    // console.log(category[0].id);
    


    const requestBody = {
      category_id: cat,
      
     
    };


    let response = await axios
    .post(baseurl + "user/product_list", requestBody)
    .then( (result) => {

  
      setRel(result.data.data);



  });
  }
  
    
    
    const movepage = (id_get) =>{
    //TODO NAVIGATE TO ERROR PAGE
    navigate('/redirect/'+id_get.replace(/ /g, "-"));
  }
  
    
    
    
  useEffect(() => {
    

    
    loadScript("assests/libs/owl-carousel/owl.carousel.min.js"); // PS. in order to import path out side your src folder and inside public folder use ${process.env.PUBLIC_URL}/js/revslider.js
    loadScript("assests/js/theme.js");
    scrollMove();
  }, []);
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", function () {
        resolve();
      });
      script.addEventListener("error", function (e) {
        reject(e);
      });

      document.body.appendChild(script);
    });
  }

  function scrollMove(){
    var slid = document.createElement("cus-sli");

    slid.scrollBy(0,50);
  }


  return (
    <>
  
     <center> <h4 className="title_rel">Related Products</h4></center>

      <div className="cus-sli-container1">
              <div id="cus-sli" className="cus-sli-chk1 "> 
                  {related_product.length > 0 ?
                      related_product.map(
                          (element, index) => (

                              // <div className="cus-sli-wrapper1">
                              //     <img onClick={() =>{movepage(element.product_name)}}
                              //         src={imgurl + element.product_imageurl}
                              //       alt={element.product_name}
                              //     />                                   
                              //     <div class="content-bottom1">
                              //         <div class="item-title1">
                              //              <a onClick={() =>{movepage(element.product_name)}}> <b>{ element.product_name}</b></a>
                              //         </div>
                              //          <div class="readmore1" >
                              //             <a  onClick={() => {
                              //                 movepage(element.product_name)
                              //             }} >View Details</a>
                              //         </div>
                              //     </div>
                              // </div>
                              // </div>
<>
<div style={{marginLeft:40}}>                   
  <ProductCardCommon dataDetails={element} img={imgurl+element.product_imageurl}/>
  </div>
                

</>

                          )) : ""};


        </div>
      </div>
    </>
  );
}

export default Related_product;
