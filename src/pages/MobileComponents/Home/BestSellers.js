import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductCardCommon } from "../../Components/ProductCardCommon";

export default function ProductSlider(props) {

  var settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    centerPadding: "10px",
    // slidesToShow: 1.5,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 2200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1.5,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          initialSlide: 1,
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-cart">
      <h2 className="headingSecond">{"- " + props.title + " -"} </h2>
      <div className="product-section">
        <Slider {...settings}>
          {props.detailsData.map((item) => {
            return (
              <ProductCardCommon
                dataDetails={item}
                img={
                  "https://poppyindia.com/Ecom-Admin/a_assets/images/react_img/sdlxtt.jpg"
                }
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
