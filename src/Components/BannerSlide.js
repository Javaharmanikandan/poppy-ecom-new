import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import React, { Component, useContext, useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from 'react-router-dom';

import { festivebanner } from "../data/API";

const imgurl = process.env.REACT_APP_IMG_URL;
const baseurl = process.env.REACT_APP_BASE_URL;
function BannerSlide() {
let navigate = useNavigate();
const [testimonial, settestimonials] = useState([]);
const [firstimg, setfirstimg] = useState("");
const [secondimg, setsecondimg] = useState("");
const [thirdimg, setthirdimg] = useState("");
const [firsturl, setfirsturl] = useState("");
const [secondurl, setsecondurl] = useState("");
const [thirdurl, setthirdurl] = useState("");




 useEffect(() => {
    testimonials_get();
  }, []);

  const testimonials_get = async () => {
let response = await festivebanner();
     var width = window.screen.width;
        if(window.innerWidth < 765){

   settestimonials(response.data.data);
     setfirstimg(response.data.data[0].mobile_image)
     setfirsturl(response.data.data[0].url)

     setsecondimg(response.data.data[1].mobile_image)
     setsecondurl(response.data.data[1].url)

     setthirdimg(response.data.data[2].mobile_image)
     setthirdurl(response.data.data[2].url)

        }
        else
        {
     settestimonials(response.data.data);
     setfirstimg(response.data.data[0].image)
     setfirsturl(response.data.data[0].url)

     setsecondimg(response.data.data[1].image)
     setsecondurl(response.data.data[1].url)

     setthirdimg(response.data.data[2].image)
     setthirdurl(response.data.data[2].url)
        }
    
    
 

  };

 const navigation = async (url) => {   
 navigate(url);
  }
  return (
    <>
    <div style ={{margin:"10px"}}>
   <MDBCarousel  showIndicators>

      <a onClick={() =>{
        navigation(firsturl)
      }}>  <MDBCarouselItem
        className='w-100 d-block care_item'
        itemId={1}
        src={imgurl+firstimg}
        alt='...'
      >
        </MDBCarouselItem></a>
      
    <a onClick={() =>{
        navigation(secondurl)
      }}> <MDBCarouselItem
        className='w-100 d-block care_item'
        itemId={2}
        src={imgurl+secondimg}
        alt='...'
      >
       
      </MDBCarouselItem></a>
         <a onClick={() =>{
        navigation(thirdurl)
      }}> <MDBCarouselItem
        className='w-100 d-block care_item'
        itemId={3}
        src={imgurl+thirdimg}
        alt='...'
      >
       
</MDBCarouselItem> </a>
    </MDBCarousel>
    </div>
    </>
  );
}

export default BannerSlide;
