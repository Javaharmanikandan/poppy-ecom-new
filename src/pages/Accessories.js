import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../Components/loader";
import ProductgridAcc from "../Components/product_cart_grid_Ass";
import Productlist from "../Components/product_cart_list";
import axios from "axios";
import { category_list } from "../data/API";
import logo_text from "../assets/loader.gif";
import { p_data_list_api } from "../data/product_data";
import { ScrolltoTop } from "../utility";

const baseurl = process.env.REACT_APP_BASE_URL;
function Accessories() {
  const [accCategoryPillow, setAccCategoryPillow] = useState([]);

  const [accCategoryProtector, setAccCategoryProtector] = useState([]);
  const [product_list, setProduct_li] = useState([]);

  const [loader, isLoad] = useState(false);

  const { id } = useParams();

  const [params_id, setparams] = useState(id);

  const navigate = useNavigate();

  // const category_list_fun = async () => {

  //   let response = await category_list();

  //   setCategory(response.data.data);

  // };

  useEffect(() => {
    ScrolltoTop()
}, [])



  useEffect(() => {
    product_category_list().then(product_list_view(id));
  }, [id]);

  const product_list_view = async (id) => {
    const requestBody = {
      category_name: id,
    };

    let response = await axios
      .post(baseurl + "user/accessories_list", requestBody)
      .then((result) => {
        console.log(result.data.data,"Ass")
        setProduct_li(result.data.data);

        isLoad(true);
      });
  };

  const product_category_list = async (id) => {
    let response = await axios
      .get(baseurl + "user/acc_category")
      .then((result) => {
        setAccCategoryPillow(result.data.pillows);
        setAccCategoryProtector(result.data.protector);

        isLoad(true);
      });
  };

  const filter_cat = (id) => {
    isLoad(false);
    setTimeout(() => {
      navigate("/accessories/" + id);
    }, 100);
  };

  const product_list_ = product_list.map((data) => {
    return (
      <Productlist
        id={data.id}
        title={data.accessories_name}
        img={data.image1}
        img1={data.image2}
        price={data.id}
        description={data.id}
        stock={data.id}
      />
    );
  });

  const product_grid = product_list.map((data) => {
    return (
      <ProductgridAcc
        id={data.id}
        title={data.accessories_name}
        img={data.image1}
        img1={data.image2}
        price={data.price}
        description={data.id}
        stock={data.id}
        product_type={"accessories"}
      />
    );
  });

  const mystyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div id="product-sidebar-left" className="product-grid-sidebar-left">
        <div class="main-content">
          <div id="wrapper-site">
            <div id="content-wrapper" class="full-width">
              <div id="main">
                <div class="page-home">
                  <nav class="breadcrumb-bg">
                    <div class="container no-index">
                      <div class="breadcrumb">
                        <ol>
                          <li>
                            <a href="#">
                              <span>Home</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Accessories</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>All</span>
                            </a>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </nav>

                  <div class="container">
                    <div class="content">
                      <div class="row">
                        <div class="sidebar-3 sidebar-collection col-lg-3 col-md-4 col-sm-4">
                          <div class="sidebar-block">
                            <div class="title-block">CATEGORIES</div>
                            <div class="new-item-content desk_res">
                              <h3 class="title-product ">Pillows</h3>

                              <ul class="scroll-product ">
                                <li>
<label class="check">
  <input type="radio"  onClick={()=>{filter_cat("all")}} name="radio_button" value= "All" defaultChecked />
  <span class="checkmark"></span>
</label>
<a href="#">
  <b> ALL</b>

</a>
                                </li>

                                {accCategoryPillow.map((items_cat, index) => (
                                  <li>
                                    <label class="check">
                                      <input
                                        type="radio"
                                        onClick={() => {
                                          filter_cat(items_cat.sub_serious);
                                        }}
                                        name="radio_button"
                                        value={items_cat.sub_serious}
                                      />
                                      <span class="checkmark"></span>
                                    </label>
                                    <a href="#">
                                      <b> {items_cat.sub_serious}</b>
                                    </a>
                                  </li>
                                ))}
                              </ul>

                              <h3 class="title-product">Protector</h3>
                              <ul class="scroll-product">
                                <li>
                                  <label class="check">
                                    <input
                                      type="radio"
                                      onClick={() => {
                                        filter_cat(0);
                                      }}
                                      name="radio_button"
                                      value="Mattress Protecter"
                                    />
                                    <span class="checkmark"></span>
                                  </label>
                                  <a href="#">
                                    <b>Mattress Protecter</b>
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div class="new-item-content mobile_res">
                              <div class="newClass">
                                {" "}
                                <h3 class="title-product ">Pillows</h3>
                                <i
                                  class="fa fa-plus collapsed active"
                                  data-target="#products"
                                  data-toggle="collapse"
                                ></i>
                              </div>

                              <ul
                                class="scroll-product sub-menu collapse fade"
                                id="products"
                              >
                                <li>
<label class="check">
  <input type="radio"  onClick={()=>{filter_cat("all")}} name="radio_button1" value= "All"  />
  <span class="checkmark"></span>
</label>
<a href="#">
  <b> ALL</b>

</a>
                                </li>

                                {accCategoryPillow.map((items_cat, index) => (
                                  <li>
                                    <label class="check">
                                      <input
                                        type="radio"
                                        onClick={() => {
                                          filter_cat(items_cat.sub_serious);
                                        }}
                                        name="radio_button"
                                        value={items_cat.sub_serious}
                                      />
                                      <span class="checkmark"></span>
                                    </label>
                                    <a href="#">
                                      <b> {items_cat.sub_serious}</b>
                                    </a>
                                  </li>
                                ))}
                              </ul>

                              <div class="newClass">
                                {" "}
                                <h3 class="title-product">Protector</h3>
                                <i
                                  class="fa fa-plus collapsed active"
                                  data-target="#protec"
                                  data-toggle="collapse"
                                ></i>
                              </div>
                              <ul
                                class="scroll-product sub-menu collapse fade"
                                id="protec"
                              >
                                <li>
                                  <label class="check">
                                    <input
                                      type="radio"
                                      onClick={() => {
                                        filter_cat(0);
                                      }}
                                      name="radio_button"
                                      value="Protector"
                                    />
                                    <span class="checkmark"></span>
                                  </label>
                                  <a href="#">
                                    <b> Protector</b>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-8 col-lg-9 col-md-8 product-container">
                          <h1>Our Accessories</h1>
                          <div class="js-product-list-top firt nav-top">
                            <div class="d-flex justify-content-around row">
                              <div class="col col-xs-12">
                                <ul class="nav nav-tabs">
                                  <li>
                                    <a
                                      href="#grid"
                                      data-toggle="tab"
                                      class="active show fa fa-th-large"
                                    ></a>
                                  </li>
                                  {/* <li>
                                    <a
                                      href="#list"
                                      data-toggle="tab"
                                      class="fa fa-list-ul"
                                    ></a>
                                  </li> */}
                                </ul>
                                <div class="hidden-sm-down total-products">
                                  <p>
                                    There are {product_list_.length} products.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="tab-content product-items">
                            <div
                              id="grid"
                              class="related tab-pane fade in active show"
                            >
                              <div class="row">
                                {/* {product_grid} */}

                                {loader ? (
                                  product_grid
                                ) : (
                                  <div>
                                    <img src={logo_text} alt="loading..." />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div id="list" class="related tab-pane fade">
                              <div class="row">{product_list_}</div>
                            </div>
                          </div>

                          <div class="pagination">
                            <div class="js-product-list-top ">
                              <div class="d-flex justify-content-around row">
                                {/* <div class="showing col col-xs-12">
                              <span>SHOWING 1-3 OF 3 ITEM(S)</span>
                            </div> */}
                                {/* <div class="page-list col col-xs-12">
                              <ul>
                                <li>
                                  <a
                                    rel="prev"
                                    href="#"
                                    class="previous disabled js-search-link"
                                  >
                                    Previous
                                  </a>
                                </li>
                                <li class="current active">
                                  <a
                                    rel="nofollow"
                                    href="#"
                                    class="disabled js-search-link"
                                  >
                                    1
                                  </a>
                                </li>
                                <li>
                                  <a
                                    rel="nofollow"
                                    href="#"
                                    class="disabled js-search-link"
                                  >
                                    2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    rel="nofollow"
                                    href="#"
                                    class="disabled js-search-link"
                                  >
                                    3
                                  </a>
                                </li>

                                <li>
                                  <a
                                    rel="next"
                                    href="#"
                                    class="next disabled js-search-link"
                                  >
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div> */}
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
        <Loader />
      </div>
    </>
  );
}

export default Accessories;
