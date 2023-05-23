import "./styles/ProductDetail.css";

import { Default_discount, percentageCalculation } from "../Helper/Common";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from "react-router-dom";

import { CartContext } from "../Context/Ecomcontext";
import Loader from "../Components/loader";
import Related_product from "../Components/related_products";
import axios from "axios";
import cartSection from "../Helper/Cart";
import { toast } from "react-toastify";
import ProductSlider from "./MobileComponents/Home/BestSellers";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { addtoWishlist } from "../Helper/Wishlist";
import Lottie from "react-lottie";
import CoupenPng from "./MobileComponents/images/badge.png";
import * as animationData from "./gift.json";

const imgurl = process.env.REACT_APP_IMG_URL;
const baseurl = process.env.REACT_APP_BASE_URL;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const userData = JSON.parse(localStorage.getItem("userInfo"));

export default function ProductDetail() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  //Image variables
  let navigate = useNavigate();

  toast.configure();

  //Customer Review

  const [name, set_name] = useState("");
  const [coupenstatus, setcoupenstatus] = useState(false);
  const [email, set_email] = useState("");
  const [coloursOptions, setColoursOptions] = useState([]);

  const [comments, set_comments] = useState("");
  const [coupenDis, set_coupenDis] = useState(0);
  //End Customer

  //Function For Insert Comments

  const customer_review = () => {
    if (name === "" || email === "" || comments === "") {
      toast.error("Please Fill All the Fields");
    } else {
      const requestBody = {
        name: name,
        email: email,
        comments: comments,
        product_id: id,
      };
      const result_data = axios

        .post(baseurl + "user/product_review/", requestBody)

        .then(customer_review_list_func());

      toast.success("Thanks For Your Review!");
      document.getElementById("review-form").reset();

      set_name("");
      set_email("");
      set_comments("");
    }
  };
  const [id, setId] = useState(1);
  const [cate_name, setcategory_name] = useState("");

  const [cart, setCart] = useContext(CartContext);

  const [price, set_price] = useState(0);
  const [coupen_code, set_coupen] = useState(0);

  const [bed_Data, set_bed] = useState({});
  
  const [dimension, set_dimention] = useState({});
  const [thickness, set_thickness] = useState({});
  const [Product_Details, set_product_Details] = useState({});
  const [subdivision, set_subdivision] = useState({});
  const [customer_review_list, set_cus_list] = useState({});
  // INTIAL STATES
  const [type_sub_devision, set_type_sub] = useState("");
  const [height, set_height] = useState("");
  const [local, set_localbed] = useState("");
  const [Dimen, set_localdimen] = useState("");
  const [cato, set_cat] = useState(1);

  const [new_dbcoupen, set_dbcoupen] = useState("");
  const [new_coupen, set_newcoupen] = useState(0);
  const [coupenDisPer, set_coupenDisPer] = useState(0);
  //Image Section

  const [image1, set_image1] = useState("pr10.jpg");
  const [image2, set_image2] = useState("pr10.jpg");
  const [image3, set_image3] = useState("pr10.jpg");
  const [image4, set_image4] = useState("pr10.jpg");

  const [free_image, setfreeimage] = useState("pr10.jpg");
  const [bot_img, setbot_img] = useState("pr10.jpg");
  const [top_img, settop_img] = useState("pr10.jpg");
  const [description_image, setdescriptionimage] = useState("pr10.jpg");
  // const location = useLocation();
  const { product_name_param } = useParams();

  //CUSTOMISE HEIGHT AND WIDTH

  const [custom_height, set_custom_height] = useState("");
  const [custom_width, set_custom_width] = useState("");

  useEffect(() => {
    product_id_get(getProductById);
  }, [id, cato]);

  const product_id_get = async (callback) => {
    const requestBody = {
      product_name: product_name_param.replace(/-/g, " "),
    };

    const result_data = await axios

      .post(baseurl + "user/product_id_find/", requestBody)

      .then(function (response) {
        setId(response.data.data[0].id);
        setcategory_name(response.data.data[0].category_name);
        callback();
      });
  };

  const errorPage = () => {
    //TODO NAVIGATE TO ERROR PAGE
    navigate("/error");
  };

  useEffect(() => {
    getProduct_price();
    couoncode_get();
  }, []);

  useEffect(() => {
    customer_review_list_func();
  }, []);

  const customer_review_list_func = async () => {
    //  const baseurl = 'http://localhost:8002/';

    //  const bed_localhost=localStorage.getItem('bed_type');
    const requestBody = {
      product_id: id,
    };

    const result_data = await axios

      .post(baseurl + "user/product_review_list/", requestBody)

      .then(function (response) {
        //TO SET PRODUCT BED TYPE

        set_cus_list(response.data.data);
      });
  };

  const couoncode_get = async () => {
    const requestBody = {
      c_for: "Mattress",
    };

    const result_data = await axios

      .post(baseurl + "user/coupon_get/", requestBody)

      .then(function (response) {
        //TO SET PRODUCT BED TYPE

        set_dbcoupen(response.data.data[0].coupen_code);
        set_coupenDisPer(response.data.data[0].discount_percentage);
      });
  };

  const copenApply = () => {
    if (new_dbcoupen == new_coupen) {
      toast.success("Coupon Applied");
      const discount_less = percentageCalculation(share, coupenDisPer);
      set_coupenDis(discount_less);
      setcoupenstatus(true);
    } else {
      toast.error("Invalide Coupon Code");
      setcoupenstatus(false);
    }
  };

  const getProductById = async () => {
    //  const baseurl = 'http://localhost:8002/';

    //  const bed_localhost=localStorage.getItem('bed_type');
// alert(id)
    const requestBody = {
      product_id: id,
      name: product_name_param.replace(/-/g, " "),
      type_devision: type_sub_devision,
      height: height,
      bed_type: local,
      dimension: Dimen,
    };

    const result_data = await axios

      .post(baseurl + "user/product_details/", requestBody)

      .then(function (response) {


        // response &&  setColoursOptions(response.data.colours)
        // console.log(dataColor.split(","),"Coolors")
        //TO SET PRODUCT BED TYPE

        set_bed(response.data.bed_type);

        set_localbed(response.data.bed_type[0].bed_type);

        //TO SET PRODUCT_DIMENSION BED TYPE

        set_dimention(response.data.dimentions);

        set_localdimen(response.data.dimentions[0].product_dimensions);

        // set_localdimen(response.data.dimentions[0].product_dimensions)

        //TO SET THICKNESS BED TYPE

        set_thickness(response.data.thickness);

        set_height(response.data.thickness[0].thickness);

        //TO SET PRODUCT DETAILS

        set_product_Details(response.data.product_data[0]);

        set_cat(response.data.product_data[0].category_id);

        set_image1(response.data.product_data[0].product_imageurl);

        set_image2(response.data.product_data[0].product_imageurl_1);

        set_image3(response.data.product_data[0].product_imageurl_2);

        set_image4(response.data.product_data[0].product_imageurl_3);

        setfreeimage(response.data.product_data[0].free_imge);

        settop_img(response.data.product_data[0].description_top_image);
        setbot_img(response.data.product_data[0].description_bottom_image);

        response && setdescriptionimage(
          response.data.product_data[0].description_main_image
        );
        //TO SET PRODUCT DETAILS

        response && set_subdivision(response.data.product_sub);

        response && set_type_sub(response.data.product_sub[0].subdivision);

        response && set_coupen(response.data.coupen_code[0].discount_percentage);
      });
  };

  // useEffect(()=>{
  //   set_images();

  // },[Product_Details]);

  useEffect(() => {
    dimentionMethod();
  }, [height, local]);

  useEffect(() => {
    getProduct_price();
  }, [Dimen]);

  useEffect(() => {
    getSizedandHeight();
  }, [type_sub_devision]);

  //TODO SECOND FUNCTION

  const getSizedandHeight = async () => {
    // set_type_sub(type_sub_devision)

    const requestBody = {
      product_id: id,
      type_devision: type_sub_devision,
    };

    const result_data = await axios

      .post(baseurl + "user/product_height_size/", requestBody)

      .then(function (response) {
        set_thickness(response.data.thickness);

        set_height(response.data.thickness[0].thickness);

        //
        dimentionMethod();
      });
  };

  //TODO THIRD FUNCTION

  const dimentionMethod = async (index, height_get) => {
    const requestBody = {
      product_id: id,
      type_devision: type_sub_devision,
      height: height,
      size: local,
    };

    // console.log(id)
    const result_data = await axios

      .post(baseurl + "user/product_dimension/", requestBody)

      .then(function (response) {
        //TO SET PRODUCT_DIMENSION BED TYPE

        response && set_dimention(response.data.dimentions);

        // alert(response.data.dimensions[0].product_dimensions);

        response && set_localdimen(response.data.dimentions[0].product_dimensions);

        getProduct_price();
      });
  };

  const getProduct_price = async () => {
    const requestBody = {
      product_id: id,
      bed_type: local,
      dimension: Dimen,
      thickness: height,
      type: type_sub_devision,
      customise_type: 0,
    };

    const result_data = await axios
      .post(baseurl + "user/price_data/", requestBody)
      .then(function (response) {
        response && set_price(response.data.data[0].product_price);
      });
  };

  var desc = Product_Details.product_description;

  //Free Section

  var free_content = Product_Details.free_content;
  var free_price = Product_Details.free_price;
  // var free_imge=Product_Details.length > 0 ? Product_Details.free_imge :"free_product.png";

  var original_image = Product_Details.product_imageurl;
  var original_image2 = Product_Details.product_imageurl_1;
  var original_image3 = Product_Details.product_imageurl_2;
  var original_image4 = Product_Details.product_imageurl_3;

  // console.log(free_imge)

  //Description

  var bottom_content = Product_Details.description_bottom;

  var bottom_type = Product_Details.bottom_type;

  var top_type = Product_Details.top_type;

  var top_content = Product_Details.description_top;

  var top_header = Product_Details.description_top_header;

  var bottom_header = Product_Details.description_bottom_header;

  var discount = Product_Details.discount_percentage;

  //Type Subdivision click

  const [heightmenu, setHegihtmenu] = useState(0);

  //Height Button

  const [heightmenu2, setHegihtmenu2] = useState(0);

  //Size Button
  const [heightmenu3, setHegihtmenu3] = useState(0);

  const toggleButton = (index, type_sub_get) => {
    setHegihtmenu(index);

    set_type_sub(type_sub_get);
  };

  const buy_func = () => {
    // navigate('/checkout');
    window.location.href = "https://poppyindia.com/checkout";
  };

  const toggleButton2 = (index, height_get) => {
    setHegihtmenu2(index);

    set_height(height_get);
  };

  const toggleButton3 = (index, size_get) => {
    setHegihtmenu3(index);

    set_localbed(size_get);

    getProduct_price();
  };

  const diment_click = (di) => {
    set_custom_height("");
    set_custom_width("");

    document.getElementById("create-course-form").reset();
    set_localdimen(di);
  };

  const toggleCustomsize = () => {
    var element = document.getElementById("custom-size");

    if (element.hasAttribute("hidden")) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", true);
    }
  };

  const toggleCouponButton = () => {
    var element = document.getElementById("coupon-section1");

    if (element.hasAttribute("hidden")) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", true);
    }
  };

  const toggleCouponButtonMobile = () => {
    var element = document.getElementById("coupon-section");

    if (element.hasAttribute("hidden")) {
      element.removeAttribute("hidden");
    } else {
      element.setAttribute("hidden", true);
    }
  };
  const addTocart = (id, amt, title, image, bed_type, dimension, thickness) => {
    //TODO METHOD ACTION FOR ADD
    toast.success("product Added Successfully ");

    setCart(
      cartSection.addCart(id, amt, title, image, bed_type, dimension, thickness)
    );
  };

  //Discouted Price Here

  const discount_less = percentageCalculation(price, discount);

  const share = price - discount_less;

  const default_discount = Default_discount(share, coupen_code);

  //TO CALL CUTOMISE HEIGHT AND WIDTH

  const customise_pricelist = async () => {
    const requestBody = {
      product_id: id,
      bed_type: local,
      customise_hight: custom_height,
      customise_width: custom_width,
      thickness: height,
      type: type_sub_devision,
      customise_type: "1",
    };

    const result_data = await axios
      .post(baseurl + "user/price_customise_data/", requestBody)
      .then(function (response) {
        set_price(response.data.data[0].product_price);
      });
  };

  if (
    custom_height !== "" &&
    custom_width !== "" &&
    custom_height.length === 2 &&
    custom_width.length === 2
  ) {
    customise_pricelist();
  }

  const wishlist_add = async (
    p_id,
    total_amount,
    product_name,
    product_image,
    product_size,
    product_dimen,
    product_height
  ) => {
    await addtoWishlist(
      p_id,
      total_amount,
      product_name,
      product_image,
      product_size,
      product_dimen,
      product_height
    );
  };

  const related = () => {
    return <Related_product category={cate_name} />;
  };

  return (
    <>
      <div class="product-contain">
        <div id="product-detail">
          <div class="main-content">
            <div id="wrapper-site">
              <div id="content-wrapper">
                <div id="main">
                  <div class="page-home">
                    <nav class="breadcrumb-bg">
                      <div class="container no-index">
                        <div class="breadcrumb"></div>
                      </div>
                    </nav>
                    <div class="container">
                      <div class="content">
                        <div class="row">
                          <div class="col-sm-12 col-lg-12 col-md-12">
                            <div class="main-product-detail">
                              {/* <div className="product-path">
                                <ol>
                                  <li>
                                    <a href="/">
                                      <span>Home &gt; </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="/">
                                      <span>Mattress &gt;</span>
                                    </a>
                                  </li>

                                  <li>
                                    <a href="#">
                                      <span>
                                        {Product_Details.product_name}{" "}
                                      </span>
                                    </a>
                                  </li>
                                </ol>
                              </div> */}
                              <div class="product-single row">
                                <div class="product-detail col-xs-12 col-md-5 col-sm-5">
                                  <div class="page-content" id="content">
                                    <div class="images-container">
                                      <div class="js-qv-mask mask tab-content ">
                                        <div
                                          id="item1"
                                          class="tab-pane fade active in show"
                                        >
                                          <img
                                            src={imgurl + image1}
                                            alt={
                                              Product_Details.product_imageurl_alt
                                            }
                                          />
                                        </div>
                                        <div id="item2" class="tab-pane fade">
                                          <img
                                            src={imgurl + image2}
                                            alt={
                                              Product_Details.product_imageurl_1_alt
                                            }
                                          />
                                        </div>
                                        <div id="item3" class="tab-pane fade">
                                          <img
                                            src={imgurl + image3}
                                            alt={
                                              Product_Details.product_imageurl_2_alt
                                            }
                                          />
                                        </div>
                                        <div id="item4" class="tab-pane fade">
                                          <img
                                            src={imgurl + image4}
                                            alt={
                                              Product_Details.product_imageurl_3_alt
                                            }
                                          />
                                        </div>
                                        <div
                                          class="layer hidden-sm-down desktop-responisve"
                                          data-toggle="modal"
                                          data-target="#product-modal"
                                        >
                                          <i class="fa fa-expand"></i>
                                        </div>
                                      </div>
                                      <ul class="product-tab nav nav-tabs d-flex">
                                        <li class="active col">
                                          <a
                                            href="#item1"
                                            data-toggle="tab"
                                            aria-expanded="true"
                                            className="active "
                                          >
                                            <img
                                              src={imgurl + image1}
                                              alt={
                                                Product_Details.product_imageurl_alt
                                              }
                                            />
                                          </a>
                                        </li>
                                        <li class="col">
                                          <a href="#item2" data-toggle="tab">
                                            <img
                                              src={imgurl + image2}
                                              alt={
                                                Product_Details.product_imageurl_1_alt
                                              }
                                            />
                                          </a>
                                        </li>
                                        <li class="col">
                                          <a href="#item3" data-toggle="tab">
                                            <img
                                              src={imgurl + image3}
                                              alt={
                                                Product_Details.product_imageurl_2_alt
                                              }
                                            />
                                          </a>
                                        </li>
                                        <li class="col">
                                          <a href="#item4" data-toggle="tab">
                                            <img
                                              src={imgurl + image4}
                                              alt={
                                                Product_Details.product_imageurl_3_alt
                                              }
                                            />
                                          </a>
                                        </li>
                                      </ul>
                                      <div
                                        class="modal fade"
                                        id="product-modal"
                                        role="dialog"
                                      >
                                        <div class="modal-dialog">
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <div class="modal-body">
                                                <div class="product-detail">
                                                  <div>
                                                    <div class="images-container">
                                                      <div class="js-qv-mask mask tab-content">
                                                        <div
                                                          id="modal-item1"
                                                          class="tab-pane fade active in "
                                                        >
                                                          <img
                                                            src={
                                                              imgurl + image1
                                                            }
                                                            alt={
                                                              Product_Details.product_imageurl_alt
                                                            }
                                                          />
                                                        </div>
                                                        <div
                                                          id="modal-item2"
                                                          class="tab-pane fade"
                                                        >
                                                          <img
                                                            src={
                                                              imgurl + image2
                                                            }
                                                            alt={
                                                              Product_Details.product_imageurl_1_alt
                                                            }
                                                          />
                                                        </div>
                                                        <div
                                                          id="modal-item3"
                                                          class="tab-pane fade"
                                                        >
                                                          <img
                                                            src={
                                                              imgurl + image3
                                                            }
                                                            alt={
                                                              Product_Details.product_imageurl_2_alt
                                                            }
                                                          />
                                                        </div>
                                                        <div
                                                          id="modal-item4"
                                                          class="tab-pane fade"
                                                        >
                                                          <img
                                                            src={
                                                              imgurl + image4
                                                            }
                                                            alt={
                                                              Product_Details.product_imageurl_3_alt
                                                            }
                                                          />
                                                        </div>
                                                      </div>
                                                      <ul class="product-tab nav nav-tabs">
                                                        <li class="active">
                                                          <a
                                                            href="#modal-item1"
                                                            data-toggle="tab"
                                                            class=" active "
                                                          >
                                                            <img
                                                              src={
                                                                imgurl + image1
                                                              }
                                                              alt={
                                                                Product_Details.product_imageurl_alt
                                                              }
                                                            />
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a
                                                            href="#modal-item2"
                                                            data-toggle="tab"
                                                          >
                                                            <img
                                                              src={
                                                                imgurl + image2
                                                              }
                                                              alt={
                                                                Product_Details.product_imageurl_1_alt
                                                              }
                                                            />
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a
                                                            href="#modal-item3"
                                                            data-toggle="tab"
                                                          >
                                                            <img
                                                              src={
                                                                imgurl + image3
                                                              }
                                                              alt={
                                                                Product_Details.product_imageurl_2_alt
                                                              }
                                                            />
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a
                                                            href="#modal-item4"
                                                            data-toggle="tab"
                                                          >
                                                            <img
                                                              src={
                                                                imgurl + image4
                                                              }
                                                              alt={
                                                                Product_Details.product_imageurl_3_alt
                                                              }
                                                            />
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            
                                 <div className="desktop-responisve"><hr /></div> 
                                  <div className="free-area-style desktop-responisve">
                                  
                                    <Lottie
                                      options={defaultOptions}
                                      height={80}
                                      width={150}
                                      isStopped={false}
                                      isPaused={false}
                                    />
                                    <div> <span>Hurray, you’ve unlocked the complementary sleep accessories !</span> 
                                    <p>  {free_content}</p></div>

                                  </div>
                                </div>
                                <div class="product-info col-xs-12 col-md-7 col-sm-7">
                                  <div class="detail-description">
                                    <div class="price-del">
                                      {/* <span class="price">£150.00</span> */}
                                      {/* <span class="float-right">
    <span class="availb">Availability: </span>
    <span class="check">
    <i
    class="fa fa-check-square-o"
    aria-hidden="true"
    ></i>
    IN STOCK
    </span>
  </span> */}
                                    </div>
                                    {/* <p class="description">
  Proin gravida nibh vel velit auctor aliquet.
  Aenean lorem quis bibendum auctor, nisi elit
  consequat etiam non auctor.
</p> */}

                                    <div className="has-borders mobile-responisve">
                                      <p className="product-title-style">
                                        {Product_Details.product_name}{" "}
                                      </p>
                                      {/* <p className="product-dcp">
                                        {Product_Details.marketing_description}
                                      </p> */}
                                      <p
                                        className="product-dcp"
                                        style={{ color: "#982876" }}
                                      >
                                        * Price of{" "}
                                        {local + " " + Dimen + " X " + height}
                                      </p>
                                    </div>

                                    <div className="has-borders desktop-responisve">
                                      <p className="product-title-style">
                                        {Product_Details.product_name}{" "}
                                      </p>
                                      <p className="product-dcp">
                                        * Price of{" "}
                                        {local + " " + Dimen + " X " + height}
                                      </p>
                                    </div>

                                    <div className="product-price-container desktop-responisve">
                                      <div>
                                        <div class="price-info">
                                          <div
                                            class="mrp-price"
                                            style={{ marginTop: 0 }}
                                          >
                                            <p class="mrp-rate">
                                              M.R.P
                                              <s style={{ marginLeft: 8 }}>
                                                <i
                                                  class="fa fa-inr"
                                                  aria-hidden="true"
                                                >
                                                  {" "}
                                                </i>{" "}
                                                {price}
                                              </s>
                                            </p>
                                            <p class="offer-percentage">
                                              {discount}% off
                                            </p>
                                          </div>
                                          <div class="bg-btn">
                                            <a href="#">
                                              <span>You Save</span>{" "}
                                              <i
                                                class="fa fa-inr"
                                                aria-hidden="true"
                                              ></i>{" "}
                                              {discount_less + default_discount}
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="current-amt"
                                        style={{ marginLeft: 50 }}
                                      >
                                        <a href="#">
                                          <i
                                            class="fa fa-inr"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          {share - coupenDis}
                                        </a>
                                        <p>( inclusive of all taxes )</p>
                                      </div>
                                    </div>

                                    <div className="product-price-container-mobile mobile-responisve">
                                      <div>
                                        <div class="price-info">
                                          <div
                                            class="mrp-price"
                                            style={{ marginTop: 0 }}
                                          >
                                            <p class="mrp-rate">
                                              M.R.P
                                              <s style={{ marginLeft: 8 }}>
                                                <i
                                                  class="fa fa-inr"
                                                  aria-hidden="true"
                                                >
                                                  {" "}
                                                </i>{" "}
                                                {price}
                                              </s>
                                            </p>
                                            <p class="offer-percentage">
                                              {discount}% off
                                            </p>
                                          </div>
                                          <div class="bg-btn">
                                            <a href="#">
                                              <span>You Save</span>{" "}
                                              <i
                                                class="fa fa-inr"
                                                aria-hidden="true"
                                              ></i>{" "}
                                              {discount_less + default_discount}
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="current-amt">
                                        <a href="#">
                                          <i
                                            class="fa fa-inr"
                                            aria-hidden="true"
                                          ></i>{" "}
                                          {share - coupenDis}
                                        </a>
                                        <p>( inclusive of all taxes )</p>
                                      </div>
                                    </div>

                                    <div
                                      class="has-border"
                                      style={
                                        type_sub_devision === "0"
                                          ? { display: "none" }
                                          : { display: "block" }
                                      }
                                    >
                                      <label>TYPE:</label>
                                      <div className="height-sec-container_big">
                                        {subdivision.length > 0
                                          ? subdivision.map(
                                              (element_sub, index_sub) => (
                                                <div
                                                  className={
                                                    index_sub === heightmenu
                                                      ? "heigh-div-wraper-active"
                                                      : "heigh-div-wraper"
                                                  }
                                                >
                                                  <button
                                                    onClick={() => {
                                                      toggleButton(
                                                        index_sub,
                                                        element_sub.subdivision
                                                      );
                                                    }}
                                                  >
                                                    {element_sub.subdivision.toUpperCase()}
                                                  </button>
                                                </div>
                                              )
                                            )
                                          : ""}
                                      </div>
                                    </div>

                                    <div class="has-border ">
                                      <label>HEIGHT IN INCHES</label>
                                      <div className="height-sec-container">
                                        {thickness.length > 0
                                          ? thickness.map(
                                              (element_thickens, index) => (
                                                <div
                                                  className={
                                                    index === heightmenu2
                                                      ? "heigh-div-wraper-active"
                                                      : "heigh-div-wraper"
                                                  }
                                                >
                                                  <button
                                                    onClick={() => {
                                                      set_height(
                                                        element_thickens.thickness
                                                      );
                                                      toggleButton2(
                                                        index,
                                                        element_thickens.thickness
                                                      );
                                                    }}
                                                  >
                                                    {element_thickens.thickness.toUpperCase()}
                                                  </button>
                                                </div>
                                              )
                                            )
                                          : ""}
                                      </div>
                                    </div>

                                    <div
                                      class="has-border "
                                      style={{ paddingBottom: 0 }}
                                    >
                                      <label>
                                        SIZE ( DIMENTION IN INCHES )
                                      </label>
                                      <div className="height-sec-container">
                                        {bed_Data.length > 0
                                          ? bed_Data.map((element, index) => (
                                              <div
                                                className={
                                                  index === heightmenu3
                                                    ? "heigh-div-wraper-active"
                                                    : "heigh-div-wraper"
                                                }
                                              >
                                                <button
                                                  onClick={() => {
                                                    toggleButton3(
                                                      index,
                                                      element.bed_type
                                                    );
                                                    // custest(element.bed_type)
                                                  }}
                                                >
                                                  {element.bed_type.toUpperCase()}
                                                </button>
                                              </div>
                                            ))
                                          : ""}
                                      </div>
                                    </div>
                                    <hr />

                                    <div class="has-border ">
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          marginTop: 17,
                                          marginBottom: 10,
                                        }}
                                      >
                                        <select
                                          style={{ fontSize: "16 !important" }}
                                          onChange={(event) =>
                                            diment_click(event.target.value)
                                          }
                                          className="form-controll slectDimention"
                                        >
                                          {dimension.length > 0
                                            ? dimension.map(
                                                (element_dimention, index) => (
                                                  <option
                                                    value={
                                                      element_dimention.product_dimensions
                                                    }
                                                  >
                                                    {
                                                      element_dimention.product_dimensions
                                                    }
                                                  </option>
                                                )
                                              )
                                            : ""}
                                        </select>
                                        <span
                                          className="custom-Button"
                                          onClick={() => toggleCustomsize()}
                                        >
                                          {" "}
                                          Get Custom Size
                                        </span>
                                      </div>
                                      <span style={{ color: "#AEAEAE" }}>
                                        Note : Select Appropriate Size Before
                                        Proceeding
                                      </span>

                                      {/* <div class="size">
                        <span class="size">Thickness :</span>
                        <select>
                        
                        
                        { thickness.length > 0 ?   
                          thickness.map(
                            (element_thickens, index) => (
                              
                              <option value="">{element_thickens.thickness}</option>
                              )
                              ) : ""}
                              
                              
                              
                              </select>
                            </div> */}
                                    </div>

                                    <div className="d-flex2 ">
                                      <form id="create-course-form">
                                        <div
                                          id="custom-size"
                                          className="custom-size"
                                          hidden
                                        >
                                          <div className="custom-size-filed-wrapper">
                                            <label>LENGTH (in)</label>
                                            <input
                                              type="text"
                                              id="cus_width"
                                              onChange={(event) =>
                                                set_custom_height(
                                                  event.target.value
                                                )
                                              }
                                            />
                                          </div>

                                          <div className="custom-size-filed-wrapper">
                                            <label>WIDTH (in)</label>
                                            <input
                                              type="text"
                                              id="cus_width"
                                              onChange={(event) =>
                                                set_custom_width(
                                                  event.target.value
                                                )
                                              }
                                            />
                                          </div>

                                          <div className="extra_class">
                                            <p>
                                              * Length customization is allowed
                                              between 68 - 84 inch
                                            </p>
                                            <p>
                                              * Width customization is allowed
                                              between 30 - 72 inch
                                            </p>

                                            <p>
                                              * Please round down the size (For
                                              eg. if the size that you need is
                                              74.6 please make it 74).
                                            </p>
                                          </div>
                                        </div>
                                      </form>

                                      {/* <div className="custom-size-section">
                            <h6>
                            Can’t find your mattress size?{" "}
                            <span
                            onClick={() => toggleCustomsize()}
                            >
                            {" "}
                            Get Custom Size
                            </span>
                            </h6>
                            </div> */}
                                    </div>

                                    <div class="has-border ">
                                      <label>COLOUR</label>
                                      <div className="height-sec-container">
                                        {coloursOptions.length > 0
                                          ? coloursOptions.map(
                                              (element, index) => (
                                                <div
                                                  className={
                                                    index === heightmenu3
                                                      ? "heigh-div-wraper-color-active"
                                                      : "heigh-div-wraper-color"
                                                  }
                                                  onClick={onOpenModal}
                                                >
                                                  <img
                                                    onClick={onOpenModal}
                                                    src={imgurl + element.img}
                                                    alt={
                                                      Product_Details.product_imageurl_alt
                                                    }
                                                  />
                                                </div>
                                              )
                                            )
                                          : "No Colors Available"}
                                      </div>
                                    </div>

                                    <div className="pr-coupon mobile-responisve">
                                      <div
                                        style={{
                                          display: "flex",
                                          cursor: "pointer",
                                        }}
                                        onClick={() =>
                                          toggleCouponButtonMobile()
                                        }
                                      >
                                        <img
                                          src={CoupenPng}
                                          alt={"Coupen"}
                                          width={20}
                                          height={20}
                                        />

                                        <label
                                          style={{
                                            cursor: "pointer",
                                            marginLeft: 10,
                                          }}
                                        >
                                          APPLY COUPON CODE
                                        </label>
                                      </div>
                                      <div
                                        id="coupon-section"
                                        className="coupon-section"
                                        hidden
                                      >
                                        <textarea
                                          onChange={(event) =>
                                            set_newcoupen(event.target.value)
                                          }
                                        ></textarea>
                                        <a
                                          onClick={copenApply}
                                          style={{ color: "white" }}
                                        >
                                          Check
                                        </a>
                                      </div>
                                    </div>

                                    <div className="mobile-responisve"><hr /></div> 
                                    <div className="free-area-style mobile-responisve">
                                  
                                  <Lottie
                                    options={defaultOptions}
                                    height={100}
                                    width={150}
                                    isStopped={false}
                                    isPaused={false}
                                  />
                                  <div> <div style={{textAlign:"center",marginBottom:10}}><span>Hurray ! Free sleep accessories !</span></div> 
                                  <p>  {free_content}</p></div>

                                </div>

                                    <div className="buy-section mobile-responisve">
                                      <a
                                        onClick={() =>
                                          addTocart(
                                            id,
                                            share - coupenDis,
                                            Product_Details.product_name,
                                            Product_Details.product_imageurl,
                                            local,
                                            Dimen,
                                            height
                                          )
                                        }
                                        style={{ color: "white" }}
                                        className="add-cart"
                                      >
                                        ADD TO CART
                                      </a>
                                      <a
                                        style={{ color: "white" }}
                                        className="buy-now"
                                        onClick={() => {
                                          addTocart(
                                            id,
                                            share - coupenDis,
                                            Product_Details.product_name,
                                            Product_Details.product_imageurl,
                                            local,
                                            Dimen,
                                            height
                                          );
                                          buy_func();
                                        }}
                                      >
                                        BUY NOW
                                      </a>
                                    </div>

                                    <div
                                      style={{ display: "none" }}
                                      class="has-border cart-area desktop-responisve"
                                    >
                                      {/* <div className="cus-coupon-apply-container">
                            <div className="custom-coupon-apply-button">
                            <button onClick={()=>toggleCouponButton()}> Apply Coupon</button>
                            </div>
                            <div id="coupon-section" className="coupon-section" hidden>
                            <input type="text" onChange={(event)=> set_newcoupen(event.target.value)} />
                            <button onClick={copenApply}>Apply</button>
                            </div>
                            </div> */}
                                      <div className="payment-sec-container">
                                        <div className="payment-sect-left">
                                          <p>MRP ₹ {price}</p>

                                          <p>MRP ₹ {price - discount_less} </p>

                                          <p>{discount}% Discounted</p>
                                          <p>
                                            You Save ₹{" "}
                                            {discount_less + default_discount}
                                          </p>
                                        </div>

                                        <div className="payment-sect-right">
                                          <p
                                            style={{
                                              display: coupenstatus
                                                ? "block"
                                                : "none",
                                            }}
                                          >
                                            Coupon Applied - '{new_dbcoupen}'
                                          </p>
                                          <p style={{ fontSize: "24px" }}>
                                            Selling Price
                                          </p>
                                          <div className="spl-pri-wraper heart">
                                            ₹ {share - coupenDis}
                                          </div>
                                        </div>
                                      </div>

                                      <div class="product-quantity">
                                        <div class="qty">
                                          <div class="input-group input-group-cus">
                                            <span class="add">
                                              <button
                                                class="btn btn-primary add-to-cart add-item"
                                                data-button-action="add-to-cart"
                                                type="submit"
                                                onClick={() =>
                                                  addTocart(
                                                    id,
                                                    share - coupenDis,
                                                    Product_Details.product_name,
                                                    Product_Details.product_imageurl,
                                                    local,
                                                    Dimen,
                                                    height
                                                  )
                                                }
                                              >
                                                <i
                                                  class="fa fa-shopping-cart"
                                                  aria-hidden="true"
                                                ></i>
                                                <span>Add to cart</span>
                                              </button>
                                              <a
                                                class="addToWishlist"
                                                onClick={() =>
                                                  wishlist_add(
                                                    id,
                                                    share - coupenDis,
                                                    Product_Details.product_name,
                                                    Product_Details.product_imageurl,
                                                    local,
                                                    Dimen,
                                                    height
                                                  )
                                                }
                                              >
                                                <i
                                                  class="fa fa-heart"
                                                  aria-hidden="true"
                                                ></i>
                                              </a>
                                            </span>
                                            <button
                                              className="buynow"
                                              onClick={() => {
                                                addTocart(
                                                  id,
                                                  share - coupenDis,
                                                  Product_Details.product_name,
                                                  Product_Details.product_imageurl,
                                                  local,
                                                  Dimen,
                                                  height
                                                );
                                                buy_func();
                                              }}
                                            >
                                              Buy Now
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="clearfix"></div>
                                      <p class="product-minimal-quantity"></p>

                                      <div className="cus-coupon-apply-container">
                                        <div className="custom-coupon-apply-button">
                                          <button
                                            onClick={() => toggleCouponButton()}
                                          >
                                            {" "}
                                            Apply Coupon
                                          </button>
                                        </div>
                                        <div
                                          id="coupon-section"
                                          className="coupon-section"
                                          hidden
                                        >
                                          <input
                                            type="text"
                                            onChange={(event) =>
                                              set_newcoupen(event.target.value)
                                            }
                                          />
                                          <button onClick={copenApply}>
                                            Apply
                                          </button>
                                          <button onClick={copenApply}>
                                            Cancel
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    {/* <div className="has-border">
                            <div className="Addition-product-container">
                            <div className="addition-product-free-lable">
                            Free
                            </div>
                            <div className="addition-free-content">
                            <p>₹ {free_price}</p>
                            <img
                            src={imgurl+free_image}
                            alt="pillow"
                            />
                            
                            
                            <p>
                            {free_content}<span>Free</span>
                            </p>
                            </div>
                            </div>
                            
                            </div> */}

                                    <div className="pr-coupon desktop-responisve">
                                      <div
                                        style={{
                                          display: "flex",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => toggleCouponButton()}
                                      >
                                        <img
                                          src={CoupenPng}
                                          alt={"Coupen"}
                                          width={20}
                                          height={20}
                                        />

                                        <label
                                          style={{
                                            cursor: "pointer",
                                            marginLeft: 10,
                                          }}
                                        >
                                          APPLY COUPON CODE
                                        </label>
                                      </div>
                                      <div
                                        id="coupon-section1"
                                        className="coupon-section"
                                        hidden
                                      >
                                        <textarea
                                          onChange={(event) =>
                                            set_newcoupen(event.target.value)
                                          }
                                        ></textarea>
                                        <a
                                          onClick={copenApply}
                                          style={{ color: "white" }}
                                        >
                                          Check
                                        </a>
                                      </div>
                                    </div>

                                    <div
                                      class="product-quantity  desktop-responisve"
                                      style={{ marginTop: 30 }}
                                    >
                                      <div class="qty">
                                        <div class="input-group input-group-cus">
                                          <span class="add">
                                            <button
                                              className="buynow"
                                              data-button-action="add-to-cart"
                                              type="submit"
                                              onClick={() =>
                                                addTocart(
                                                  id,
                                                  share - coupenDis,
                                                  Product_Details.product_name,
                                                  Product_Details.product_imageurl,
                                                  local,
                                                  Dimen,
                                                  height
                                                )
                                              }
                                            >
                                              <i
                                                class="fa fa-shopping-cart"
                                                aria-hidden="true"
                                                style={{ marginRight: 10 }}
                                              ></i>
                                              <span>Add to cart</span>
                                            </button>
                                          </span>
                                          <button
                                            className="buynow"
                                            style={{ background: "black" }}
                                            onClick={() => {
                                              addTocart(
                                                id,
                                                share - coupenDis,
                                                Product_Details.product_name,
                                                Product_Details.product_imageurl,
                                                local,
                                                Dimen,
                                                height
                                              );
                                              buy_func();
                                            }}
                                          >
                                            Buy Now
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="review">
                                <ul class="nav nav-tabs">
                                  <li class="active">
                                    <a
                                      data-toggle="tab"
                                      href="#description"
                                      class="active "
                                    >
                                      Description
                                    </a>
                                  </li>

                                  <li>
                                    <a data-toggle="tab" href="#review">
                                      Reviews ({customer_review_list.length})
                                    </a>
                                  </li>
                                </ul>

                                <div class="tab-content">
                                  <div
                                    id="description"
                                    class="tab-pane fade in active show "
                                  >
                                    <div className="desc">
                                      <img
                                        className="desc1"
                                        src={imgurl + description_image}
                                        alt={
                                          Product_Details.description_main_image_alt
                                        }
                                      />
                                    </div>

                                    <div
                                      dangerouslySetInnerHTML={{ __html: desc }}
                                    />
                                  </div>

                                  <div id="review" class="tab-pane fade">
                                    <div class="spr-form">
                                      <div
                                        class="user-comment"
                                        style={{ margin: 10 }}
                                      >
                                        {customer_review_list.length > 0
                                          ? customer_review_list.map(
                                              (element_com) => (
                                                <div class="spr-review">
                                                  <div class="spr-review-header">
                                                    <span class="spr-review-header-byline">
                                                      <strong>
                                                        {element_com.name.toUpperCase()}
                                                      </strong>{" "}
                                                      -
                                                      <span>
                                                        {element_com.date_time}
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div class="spr-review-content">
                                                    <p class="spr-review-content-body">
                                                      {element_com.comment}
                                                    </p>
                                                  </div>
                                                </div>
                                              )
                                            )
                                          : "No Reviews Founded!"}
                                      </div>
                                    </div>
                                    <form id="review-form">
                                      <input
                                        type="hidden"
                                        name="review[rating]"
                                        value="3"
                                      />
                                      <input type="hidden" name="product_id" />
                                      <h3 class="spr-form-title">
                                        Write a review
                                      </h3>

                                      <fieldset class="spr-form-contact">
                                        <div class="spr-form-contact-name">
                                          <input
                                            class="spr-form-input spr-form-input-text form-control"
                                            placeholder="Enter your name"
                                            onChange={(event) =>
                                              set_name(event.target.value)
                                            }
                                          />
                                        </div>
                                        <div class="spr-form-contact-email">
                                          <input
                                            class="spr-form-input "
                                            placeholder="Enter your email"
                                            onChange={(event) =>
                                              set_email(event.target.value)
                                            }
                                          />
                                        </div>
                                      </fieldset>
                                      <fieldset>
                                        <div class="spr-form-review-body">
                                          <div class="spr-form-input">
                                            <textarea
                                              class="spr-form-input-textarea"
                                              rows="10"
                                              placeholder="Write your comments here"
                                              onChange={(event) =>
                                                set_comments(event.target.value)
                                              }
                                            ></textarea>
                                          </div>
                                        </div>
                                      </fieldset>
                                      <div
                                        class="submit"
                                        style={{
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginBottom: "10px",
                                        }}
                                      >
                                        <input
                                          type="button"
                                          name="addComment"
                                          id="submitComment"
                                          class="btn btn-default"
                                          value="Submit Review"
                                          onClick={() => {
                                            customer_review();
                                          }}
                                        />
                                      </div>
                                    </form>
                                  </div>
                                  <div id="tag" class="tab-pane fade in">
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua.Lorem ipsum dolor sit amet,
                                      consectetur adipisicing elit, sed do
                                      eiusmod tempor incididunt ut labore et
                                      dolore magna aliqua.
                                    </p>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod tempor
                                      incididunt ut labore et dolore magna
                                      aliqua.Lorem ipsum dolor sit amet,
                                      consectetur adipisicing elit, sed do
                                      eiusmod tempor incididunt ut labore et
                                      dolore magna aliqua.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cus-bt-container">
          <div className="row">
            <div id="cus-img" className="col-lg-6 col-md-6 col-xs-12 bg-cus">
              <div className="product-dt-bottom">
                <img
                  src={imgurl + top_img}
                  alt={Product_Details.description_top_image_alt}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 bg-cus">
              <div className="product-dt-bottom-cnt">
                <h3>{top_header}</h3>
                <p>{top_content}</p>
              </div>
            </div>
          </div>
          <div className="row left-right">
            <div className="col-lg-6 col-md-6 col-xs-12 bg-cus">
              <div className="product-dt-bottom-cnt">
                <h3>{bottom_header}</h3>
                <p>{bottom_content}</p>
              </div>
            </div>
            <div id="cus-img" className="col-lg-6 col-md-6 col-xs-12 bg-cus">
              <div className="product-dt-bottom">
                <img
                  src={imgurl + bot_img}
                  alt={Product_Details.description_bottom_image_alt}
                />
              </div>
            </div>
          </div>
        </div>

        {related()}

        {/* <ProductSlider detailsData={Product_Details} title="Related Products" />  */}

        <footer className="mobile-responisve">
          <div className="add-to-cart-section">
            <div className="price-view">
              <p className="mrp-rate">
                M.R.P{" "}
                <i class="fa fa-inr">
                  <s> {price}</s>
                </i>
              </p>
              <a href="#">
                <i class="fa fa-inr"></i> {share - coupenDis}
              </a>
            </div>
            <a
              onClick={() =>
                addTocart(
                  id,
                  share - coupenDis,
                  Product_Details.product_name,
                  Product_Details.product_imageurl,
                  local,
                  Dimen,
                  height
                )
              }
              className="add-to-cart-btn"
              // href="#"
              style={{ color: "white" }}
            >
              Add to Cart
            </a>
          </div>

          <Modal
            open={open}
            onClose={onCloseModal}
            center
            classNames={{
              overlayAnimationIn: "customEnterOverlayAnimation",
              overlayAnimationOut: "customLeaveOverlayAnimation",
              modalAnimationIn: "customEnterModalAnimation",
              modalAnimationOut: "customLeaveModalAnimation",
            }}
            animationDuration={800}
          >
            <img
              src={imgurl + image1}
              style={{ width: "100%", height: "100%" }}
            />
          </Modal>
        </footer>
      </div>
      <Loader />
    </>
  );
}
