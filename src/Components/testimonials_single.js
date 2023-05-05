import "./styles/testimonial.css";

import React, { useEffect, useState } from "react";

const imgurl = process.env.REACT_APP_IMG_URL;
function TestimonialSingle(props) {
 
    

  return (
    <>            <div>
          <img src={imgurl+props.img} />
          <div className="myCarousel">
            <h4>{props.name.toUpperCase()}</h4>
            
            <p>
               {props.review}
            </p>
          </div>
        </div>
    </>
  );
}

export default TestimonialSingle;
