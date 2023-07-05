import "./styles/testimonial.css";

import React, { useEffect, useState } from "react";
import feedLogo from "./feedback1.png"
const imgurl = process.env.REACT_APP_IMG_URL;
function TestimonialSingle(props) {
   const [isReadMore, setIsReadMore] = useState(true);
   const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
     <>    
    {/* //        <div>
    //       <img src={imgurl+props.img} />
    //       <div className="myCarousel">
    //         <h4>{props.name.toUpperCase()}</h4>
            
    //         <p>
    //            {props.review}
    //         </p>
    //       </div>
    //     </div> */}


    <div class="product-card">
      <div class="card-test ">
        <div class="card-image" style={{position:"relative"}}>
        
        <img src={imgurl+props.img}  />  
        <img src={feedLogo} style={{width:65,position:"absolute",bottom:-30,left:15}}/>        
        </div>
        <div>
      
        </div>
        <div class="card-content" style={{height:180}}>
          <div class="row">
            <div class="col s12">
              <p>
              {/* {props.review.substring(0, 100)}              </p> */}
              {isReadMore ? props.review.slice(0, 100): props.review }
    
 {props.review.length > 100 && 
        <span style={{color:"black",cursor:'pointer'}} onClick={toggleReadMore}>
          {isReadMore ? '...read more' : ' -show less'}
          
        </span>
      }
      </p>


              <p style={{color:"black",fontWeight:"bold"}}>{props.name.toUpperCase()}</p>
            </div>
          </div>
         
        </div>
      </div>
 
</div>

    </>
  );
}

export default TestimonialSingle;
