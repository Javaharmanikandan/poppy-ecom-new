import './styles/blog.css';

import React, { useContext, useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';

import bestsellers from "./MobileComponents/images/best-seller.png";
import budget from "./MobileComponents/images/budget-friendly.png";
import allmatress from "./MobileComponents/images/all-mattress.png";

// English.



const baseurl = process.env.REACT_APP_BASE_URL;
const imgurl = process.env.REACT_APP_IMG_URL;
export default function Assists() {

  let navigate = useNavigate();

  const godetails=(id)=>{

navigate('/blogdetails/'+id);


  }






 



  return (
    <>

     <div class="main-content">
        <div id="wrapper-site">
            <div id="content-wrapper">
                <div id="main">
                    <div class="page-home">
                        
                        
                        <div class="container container1" style={{marginTop:80,marginBottom:30}}>
                            <div className="As-Main-Container">
                                <h5>How could you like <br />poppy mattress to assist you ?</h5>
                               <div className='As-item' onClick={()=>navigate("/productlist/best_seller")}>
                                <div className='As-Item_IMG_CONTENT'><img src={bestsellers} alt="best Selling products"/></div>
                                <div className='As-content'>Show me your best Selling products</div>
                               </div>
                               <div className='As-item' onClick={()=>navigate("/productlist/budget_friendly")}>
                                <div className='As-Item_IMG_CONTENT'><img src={budget} alt="best Selling products"/></div>
                                <div className='As-content'>Looking at budget friendly mattress</div>
                               </div>
                               <div className='As-item' onClick={()=>navigate("/productlist/all")}> 
                                <div className='As-Item_IMG_CONTENT'><img src={allmatress} alt="best Selling products"/></div>
                                <div className='As-content'>Like to know more about the products</div>
                               </div>

                               <div>
                                <i class="fa fa-angle-left"
                                  aria-hidden="true" style={{color:"#992876"}}></i><b onClick={()=>navigate("/")}>back</b>
                               </div>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
