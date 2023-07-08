import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

export default function FirstBanner() {

    let navigate = useNavigate();

    const baseurl = process.env.REACT_APP_BASE_URL;

    const imgurl = process.env.REACT_APP_IMG_URL;

const[FirstBanner,setFirstBanner]=useState([]);

    useEffect(()=>{
        bestSellersList() 
    },[])

    const bestSellersList = async () => {
        let response = await axios
          .get(baseurl + "user/first_banner")
          .then((result) => {
            console.log(result.data.data,"First Banner")
            setFirstBanner(result.data.data);
          });
      };

      const movepage = (id_get) =>{

        //TODO NAVIGATE TO ERROR PAGE
        navigate(id_get);
      }



    const settings = {
        arrows:false,
        dots: false,
        infinite: true,
        // speed: 500,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
      };


  return (
    <Slider {...settings}>

{FirstBanner && FirstBanner.map((item,idex) => {
            return (


    <div className=" px-4 py-3" key={idex}>
   
    <div className="tw-h-[500px] tw-bg-gray-400 w-full tw-rounded-[50px] tw-relative tw-overflow-hidden  tw-bg-cover tw-bg-center " style={{backgroundImage: `url(${(imgurl+item.banner_image)})`}}> 
      <div className="tw-absolute tw-inset-0 tw-flex w-full tw-justify-start tw-items-center px-5">
        <div className="tw-flex tw-flex-col tw-gap-5 tw-px-5 tw-py-5 tw-rounded-lg tw-w-5/12 tw-items-center">
          <h1 className="tw-text-white ">{item.banner_heading}</h1> 
          <p className="tw-text-white tw-text-[18px] tw-text-center"> {item.banner_content}</p>
          <button className=" active:tw-opacity-50 tw-cursor-pointer tw-border-none tw-px-5 tw-py-3 tw-bg-white tw-rounded-lg tw-capitalize tw-font-bold  tw-w-4/12" onClick={()=>{movepage(item.banner_url)}}>
            click here
          </button>
        </div>

      </div>
    </div>

  </div>
            )})}
  </Slider>
  )
}
