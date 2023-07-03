import "./styles/home.css";

import React, { useEffect, useState } from "react";
import {
  bottom_list,
  category_list,
  festivebanner_settings,
  testimonials,
} from "../data/API";
import { useHistory, useNavigate, useParams } from "react-router-dom";

import BannerSlide from "../Components/BannerSlide";
import CusProduct from "../Components/cusProduct";
import Loader from "../Components/loader";
import Product_card from "../Components/product_card";
import Slider from "../Components/slider";
import Testimonial from "../Components/testimonial";
import TestimonialSingle from "../Components/testimonials_single";
import axios from "axios";
import logo_text from "../assets/loader.gif";
import { p_data_api } from "../data/product_data";
import Topslider from "./MobileComponents/Home/Topslider";
import Collections from "./MobileComponents/Home/Collection";
import BottomBannerNew from "./MobileComponents/Home/BottomBanner";
import { ProductCardCommon } from "./Components/ProductCardCommon";
import ProductSlider from "./MobileComponents/Home/BestSellers";
import BlogCard from "./Components/BlogCard";
import Contactus from "./Components/Contactus";
import youtube from "./MobileComponents/images/yf1.webp";
import { ScrolltoTop } from "../utility";




const baseurl = process.env.REACT_APP_BASE_URL;

const imgurl = process.env.REACT_APP_IMG_URL;

function Home() {
  let navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [youtube_ban, setYoutubeBanner] = useState([]);
  
  const [bannerSettings, setbannerSettings] = useState("");
  const [testimonial, settestimonials] = useState([]);
  const [loader, isLoad] = useState(false);

  const category_list_fun = async () => {
    let response = await category_list();
    response && setCategory(response.data.data);
  };

  const godetails = (id) => {
    navigate("/blogdetails/" + id);
  };

  const bannerVisbleCheck = async () => {
    let response_return = await festivebanner_settings();
    let visible = await response_return.data.data[0].visible;

    setbannerSettings(visible);
  };

  const toggle = (index) => {
    if (index == 0) {
      return "active";
    }
    return "";
  };

  const [product_li, setProduct] = useState([]);
  const [bestSellers, setBestProduct] = useState([]);

  useEffect(() => {
    ScrolltoTop()
}, [])

  useEffect(() => {
    category_list_fun().then(product_list_fun("Grand Series"));
  }, []);

  useEffect(() => {
    bannerVisbleCheck();
  }, []);

  useEffect(() => {
    bestSellersList();
  },[]);

  useEffect(() => {
    youtube_banner()
  },[]);

  const bestSellersList = async () => {
    let response = await axios
      .get(baseurl + "user/best_sellers")
      .then((result) => {
        setBestProduct(result.data.data);
      });
  };

  const youtube_banner = async () => {
    let response = await axios
      .get(baseurl + "user/youtube_banner")
      .then((result) => {
        console.log(result.data.data,"Youtube")
        setYoutubeBanner(result.data.data[0]);
      });
  };

  const product_list_fun = async (id) => {
    const requestBody = {
      category_id: id.replace(/-/g, " "),
    };

    let response = await axios
      .post(baseurl + "user/product_list", requestBody)
      .then((result) => {
        setProduct(result.data.data);
        console.log(result.data.data, "Data");
        setTimeout(() => {
          isLoad(false);
        }, 100);
      });
  };



  const navigation = async (url) => {
    navigate(url);
  };


  const redirect_Data=(url)=>{
    // window.location.href = url
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  }

  // console.log("Entered");
  const product_with_data = product_li.map((data) => {
    return (
      <Product_card
        id={data.id}
        title={data.product_name}
        img={data.product_imageurl}
        discount={data.discount_percentage}
        dprice={data.DiscountedPrice.toFixed(0)}
        rprice={data.product_price.toFixed(0)}
        imgalt={data.product_imageurl_url}
        marketing_description={data.marketing_description}
      />
    );
  });

  const filter_cat = (id) => {
    isLoad(false);
    setTimeout(() => {
      product_list_fun(id.replace(/ /g, "-"));

      isLoad(true);
    }, 100);
  };



  const mystyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  //TODO: CHANGE BODY TAG ID FOR CONTACT
  return (
    <>
      <div class="main-content">
        <div id="wrapper-site">
          <div id="content-wrapper" class="full-width">
            <div id="main">
              <section class="page-home">
                {bannerSettings === "Enable" ? <BannerSlide /> : null}
                <div className="desktop-responisve" style={{display:'none'}}>
                  <Slider />
                </div>
                <div className="mobile-responisve">
                  <Topslider />
                </div>
                {/* <div className="mobile-rsponisve"> <BottomBannerNew /> </div>   */}

                {/* <CusProduct /> */}

                <div className="highlight-banner-container">
                  <div className="highlight-banner">
                    <div className="highlight-banner-block">
                      <div className="highlight-banner-icon">
                        <img
                          src={imgurl + "supremeQuality.png"}
                          alt="Supreme quality"
                        />
                      </div>
                      <div className="highlight-banner-text">
                        Supreme Quality
                      </div>
                    </div>
                    <div className="highlight-banner-block">
                      <div className="highlight-banner-icon">
                        <img src={imgurl + "Earned.png"} alt="Earned Trust" />
                      </div>
                      <div className="highlight-banner-text">Earned Trust</div>
                    </div>
                    <div className="highlight-banner-block">
                      <div className="highlight-banner-icon">
                        <img
                          src={imgurl + "Hygiene.png"}
                          alt="Hygiene Standards"
                        />
                      </div>
                      <div className="highlight-banner-text">
                        Hygiene Standards
                      </div>
                    </div>
                    <div className="highlight-banner-block">
                      <div className="highlight-banner-icon">
                        <img src={imgurl + "india.png"} alt="Made in India" />
                      </div>
                      <div className="highlight-banner-text">Made in India</div>
                    </div>
                    <div className="highlight-banner-block">
                      <div className="highlight-banner-icon">
                        <img
                          src={imgurl + "support.png"}
                          alt="Customer Support"
                        />
                      </div>
                      <div className="highlight-banner-text">
                        Support on Call
                      </div>
                    </div>
                  </div>
                </div>

                <div    style={{  backgroundImage: `url("background.webp")` ,backgroundRepeat:'no-repeat',backgroundPosition:'bottom'}}>
                  <center>
                    {" "}
                    <ProductSlider
                      detailsData={bestSellers}
                      title="Best Sellers"
                    />
                  </center>
                </div>
                <div className="mobile">
                  {" "}
                   <BottomBannerNew />{" "}
                </div>

                <div style={{marginTop:50}}>
                  {" "}
                  <Collections  dataShare={youtube_ban && youtube_ban} />{" "}
                </div>

                <div style={{ marginBottom: "50px" ,marginTop:"50px"}}>
        <Contactus />
      </div>
               <div
                  className="demo-video desktop-responisve"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 80,
                  }}
                >
                 {/*   <iframe
                    src="https://www.youtube.com/embed/OKKXnKwAPwc"
                    width="90%"
                    height="450px"
                    style={{ borderRadius: 25 }}
                  >
                    {" "}
                  </iframe>*/}

                  <img onClick={()=>{redirect_Data(youtube_ban && youtube_ban.youtube_url)}}  width="90%" src={youtube_ban && imgurl+youtube_ban.youtube_image}   style={{cursor:"pointer"}}/>
                </div> 

              </section>
            </div>
          </div>
        </div>
        <Loader />
      </div>


     



      <div style={{ marginBottom: "50px",marginTop:"50px" }}>
        <Testimonial />
      </div>
     

      <div style={{ marginBottom: "50px" }}>
        <BlogCard />
      </div>

     
    </>
  );
}

export default Home;
