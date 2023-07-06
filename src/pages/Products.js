import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../Components/loader";
import Productgrid from "../Components/product_cart_grid";
import Productlist from "../Components/product_cart_list";
import axios from "axios";
import { category_list } from "../data/API";
import logo_text from "../assets/loader.gif";
import { p_data_list_api } from "../data/product_data";
import { ScrolltoTop } from "../utility";

const baseurl = process.env.REACT_APP_BASE_URL;
function Products() {
  const [category, setCategory] = useState([]);
  const [isActive, setActive] = useState(false);
  const [collectionType, setCollectionType] = useState("Series");
  const toggleClass = () => {
    setActive(!isActive);
  };

  const [product_list, setProduct_li] = useState([]);

  const [loader, isLoad] = useState(false);

  const { category_str } = useParams();

  const id = category_str.replace(/-/g, " ");

  const [params_id, setparams] = useState(id);

  const navigate = useNavigate();



  const category_list_fun = async () => {
    let response = await category_list();

    setCategory(response.data.data);
  };

  useEffect(() => {
    ScrolltoTop();
  }, []);

  useEffect(() => {
    if (
      id === "best_seller" ||
      id === "budget_friendly" ||
      id === "motion_disturbance"
    ) {
      category_list_fun().then(assetsLoader(id));
    } else {
      category_list_fun().then(product_list_view(id));
    }

    if (
      category_str === "Grand-Series" ||
      category_str === "Premium-Series" ||
      category_str === "Medico-Series" ||
      category_str === "Latex-Seriess" ||
      category_str === "PU-Foam-Series" ||
      category_str === "Rubberized-coir-Series"
    ) {
      setCollectionType("Series");
    } else if (
      category_str === "Soft" ||
      category_str === "Hard" ||
      category_str === "Medium-Soft" ||
      category_str === "Medium-Hard" ||
      category_str === "Dual-Comfort"
    ) {
      setCollectionType("Firmness");
    } else if (
      category_str === "motion_disturbance" ||
      category_str === "budget_friendly" ||
      category_str === "best_seller"
    ) {
      setCollectionType("Category");
    }
    else if(category_str ==="Spring-Mattress" || category_str ==="Pocketed-Spring" || category_str ==="Bonnell-Spring" || category_str ==="Natural-Latex" || category_str ==="Coir-mattress" || category_str ==="Foam-mattress"){
      setCollectionType("Material");
    }
    else if(category_str ==="all"){
      setCollectionType("Series");
    }
  }, [id]);

  const product_list_view = async (id) => {
    // console.log(category[0].id);
    const requestBody = {
      category_id: id,
    };
    
    let response = await axios
      .post(baseurl + "user/product_list", requestBody)
      .then((result) => {
        console.log(result);
        setProduct_li(result.data.data);
        setTimeout(() => {
          isLoad(true);
        }, 1000);
      });
  };
  const filter_cat = async (category_name_pass) => {
    isLoad(false);
    setTimeout(() => {
      navigate("/productlist/" + category_name_pass.replace(/ /g, "-"));
    }, 100);
  };

  const assetsLoader = async () => {
    const requestBody = {
      assetsName: id,
    };
    let response = await axios
      .post(baseurl + "user/assetsFilter", requestBody)
      .then((result) => {
        console.log(result);
        setProduct_li(result.data.data);
        setTimeout(() => {
          isLoad(true);
        }, 1000);
      });
  };

  const product_list_ = product_list.map((data) => {
    return (
      <Productlist
        id={data.id}
        title={data.product_name}
        img={data.product_imageurl}
        img1={data.product_imageurl_1}
        price={data.id}
        description={data.id}
        stock={data.id}
      />
    );
  });

  const product_grid = product_list.map((data) => {
    return (
      <Productgrid
        detailsData={data}
        id={data.id}
        title={data.product_name}
        img={data.product_imageurl}
        img1={data.product_imageurl_1}
        price={data.id}
        description={data.id}
        stock={data.id}
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
                              <span>Products</span>
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

                  <div class="container containerRes">
                    <div class="content" style={{ marginTop: "2rem" }}>
                      <div className="productslist_lable">
                        <p style={{ fontSize: 32 }}>
                          {collectionType +
                            " - " +
                            category_str
                              .replace(/[^a-zA-Z0-9 ]/g, " ")
                              .charAt(0)
                              .toUpperCase() +
                            category_str.replace(/[^a-zA-Z0-9 ]/g, " ").slice(1)}
                        </p>
                      </div>
                      <div class="row">
                        <div class="sidebar-3 sidebar-collection col-lg-4 col-md-4 col-sm-4  desktop-responisve">
                          <div class="sidebar-block">
                            <div className="desktop-responisve cardFilter">
                              <div className="filter-section">
                                {/* <div className="pr-filter-name">
                              <h4>
                                Showing <span>All Mattress</span>
                              </h4>
                              <a
                                data-toggle="tab"
                                href="#product-filter"
                                className="edit-icon blink"

                              >
                                <i class="fa fa-edit" onClick={toggleClass}></i>
                              </a>
                            </div> */}

                                <div id={"product-filter"}>
                                  <div className="all-mattress-section"></div>
                                  <div className="Main-filterContainer">
                                    <div className="filters Grid-item">
                                      <div>
                                        <input
                                          type={"radio"}
                                          onClick={() => {
                                            filter_cat("all");
                                          }}
                                          name="radio_button"
                                          value="all"
                                        />{" "}
                                        <lable>All Matress</lable>
                                      </div>
                                    </div>

                                    {/* <lable>All Matress</lable> */}
                                    <div className="Main-filterGrid">
                                      {category
                                        .filter(
                                          (view) =>
                                            view.category_id !== "7" &&
                                            view.category_id !== "8"
                                        )
                                        .map((items_cat, index) => (
                                          <div className="filters Grid-item">
                                            <div>
                                              <input
                                                type={"radio"}
                                                onClick={() => {
                                                  filter_cat(
                                                    items_cat.category_name
                                                  );
                                                }}
                                                name="radio_button"
                                                value={items_cat.category_name}
                                              />{" "}
                                              {items_cat.category_name}
                                            </div>
                                          </div>
                                        ))}
                                    </div>
                                  </div>

                                  <div className="Main-filterContainer">
                                    <div className="filters Grid-item">
                                      <div>
                                        <input
                                          style={{ visibility: "hidden" }}
                                          type={"radio"}
                                          onClick={() => {
                                            filter_cat("all");
                                          }}
                                          name="radio_button"
                                          value="all"
                                        />{" "}
                                        <lable>Firmness</lable>
                                      </div>
                                    </div>
                                    <div className="Main-filterGrid">
                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Soft");
                                            }}
                                            name="radio_button"
                                            value="Soft"
                                          />{" "}
                                          Soft
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Hard");
                                            }}
                                            name="radio_button"
                                            value="Hard"
                                          />{" "}
                                          Hard
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Medium Soft");
                                            }}
                                            name="radio_button"
                                            value="Medium Soft"
                                          />{" "}
                                          Medium Soft
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Medium Hard");
                                            }}
                                            name="radio_button"
                                            value="Medium Hard"
                                          />{" "}
                                          Medium Hard
                                        </div>
                                      </div>
                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Dual Comfort");
                                            }}
                                            name="radio_button"
                                            value="Dual Comfort"
                                          />{" "}
                                          Dual Comfort
                                        </div>
                                      </div>
                                    </div>
                                  </div>



                                  <div className="Main-filterContainer">
                                    <div className="filters Grid-item">
                                      <div>
                                        <input
                                          style={{ visibility: "hidden" }}
                                          type={"radio"}
                                          onClick={() => {
                                            filter_cat("all");
                                          }}
                                          name="radio_button"
                                          value="all"
                                        />{" "}
                                        <lable>Materials</lable>
                                      </div>
                                    </div>
                                    <div className="Main-filterGrid">
                                    <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Spring Mattress");
                                            }}
                                            name="radio_button"
                                            value="Spring Mattress"
                                          />{" "}
                                          Spring Mattress
                                        </div>
                                      </div>
                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Pocketed Spring Mattress");
                                            }}
                                            name="radio_button"
                                            value="Pocketed Spring Mattress"
                                          />{" "}
                                          Pocketed Spring Mattress
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Bonnell Spring Mattress");
                                            }}
                                            name="radio_button"
                                            value="Bonnell Spring Mattress"
                                          />{" "}
                                          Bonnell Spring Mattress
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Natural Latex Mattress");
                                            }}
                                            name="radio_button"
                                            value="Natural Latex Mattress"
                                          />{" "}
                                         Natural Latex Mattress
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Foam Mattress");
                                            }}
                                            name="radio_button"
                                            value="Foam Mattress"
                                          />{" "}
                                          Foam Mattress
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Coir Mattress");
                                            }}
                                            name="radio_button"
                                            value="Coir Mattress"
                                          />{" "}
                                          Coir Mattress
                                        </div>
                                      </div>
                                     
                                    </div>
                                  </div>



                                  <div className="Main-filterContainer">
                                    <div className="filters Grid-item">
                                      <div>
                                        <input
                                          type={"radio"}
                                          onClick={() => {
                                            filter_cat("motion_disturbance");
                                          }}
                                          name="radio_button"
                                          value="motion_disturbance"
                                        />{" "}
                                        <lable>Zero Motion Disturbance</lable>
                                      </div>
                                    </div>

                                    <div className="filters Grid-item">
                                      <div>
                                        <input
                                          type={"radio"}
                                          onClick={() => {
                                            filter_cat("budget_friendly");
                                          }}
                                          name="radio_button"
                                          value="budget_friendly"
                                        />{" "}
                                        <lable>Budget Friendly</lable>
                                      </div>
                                    </div>

                                    <div className="filters Grid-item">
                                      <div>
                                        <input
                                          type={"radio"}
                                          onClick={() => {
                                            filter_cat("best_seller");
                                          }}
                                          name="radio_button"
                                          value="Best Sellers"
                                        />{" "}
                                        <lable>Best Sellers</lable>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="new-item-content mobile_res">
                              <div class="newClass">
                                {" "}
                                <h3 class="title-product ">MATTRESS</h3>
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
                                    <input
                                      type="radio"
                                      onClick={() => {
                                        filter_cat("all");
                                      }}
                                      name="radio_button1"
                                      value="All"
                                      defaultChecked
                                    />
                                    <span class="checkmark"></span>
                                  </label>
                                  <a href="#">
                                    <b> ALL</b>
                                  </a>
                                </li>

                                {category
                                  .filter(
                                    (view) =>
                                      view.category_id != "7" &&
                                      view.category_id != "8"
                                  )
                                  .map((items_cat, index) => (
                                    <li>
                                      <label class="check">
                                        <input
                                          type="radio"
                                          onClick={() => {
                                            filter_cat(items_cat.category_name);
                                          }}
                                          name="radio_button"
                                          value={items_cat.category_name}
                                        />
                                        <span class="checkmark"></span>
                                      </label>
                                      <a href="#">
                                        <b> {items_cat.category_name}</b>
                                      </a>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mobile-responisve cardFilter">
                          <div className="filter-section">
                            <div className="pr-filter-name">
                              <h4>
                                Showing <span>All Mattress</span>
                              </h4>
                              <a
                                data-toggle="tab"
                                href="#product-filter"
                                className="edit-icon blink"
                              >
                                <i class="fa fa-edit" onClick={toggleClass}></i>
                              </a>
                            </div>

                            <div
                              id={isActive ? "product-filter" : "displayNone"}
                            >
                              <div className="all-mattress-section"></div>

                              <div className="Main-filterContainer">
                                <div className="filters Grid-item">
                                  <div>
                                    <input
                                      type={"radio"}
                                      onClick={() => {
                                        filter_cat("all");
                                      }}
                                      name="radio_button"
                                      value="all"
                                    />{" "}
                                    <lable>All Matress</lable>
                                  </div>
                                </div>

                                {/* <lable>All Matress</lable> */}
                                <div className="Main-filterGrid">
                                  {category
                                    .filter(
                                      (view) =>
                                        view.category_id !== "7" &&
                                        view.category_id !== "8"
                                    )
                                    .map((items_cat, index) => (
                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat(
                                                items_cat.category_name
                                              );
                                            }}
                                            name="radio_button"
                                            value={items_cat.category_name}
                                          />{" "}
                                          {items_cat.category_name}
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>

                              <div className="Main-filterContainer">
                                <div className="filters Grid-item">
                                  <div>
                                    <input
                                      style={{ visibility: "hidden" }}
                                      type={"radio"}
                                      onClick={() => {
                                        filter_cat("all");
                                      }}
                                      name="radio_button"
                                      value="all"
                                    />{" "}
                                    <lable>Firmness</lable>
                                  </div>
                                </div>
                                <div className="Main-filterGrid">
                                  <div className="filters Grid-item">
                                    <div>
                                      <input
                                        type={"radio"}
                                        onClick={() => {
                                          filter_cat("Soft");
                                        }}
                                        name="radio_button"
                                        value="Soft"
                                      />{" "}
                                      Soft
                                    </div>
                                  </div>

                                  <div className="filters Grid-item">
                                    <div>
                                      <input
                                        type={"radio"}
                                        onClick={() => {
                                          filter_cat("Hard");
                                        }}
                                        name="radio_button"
                                        value="Hard"
                                      />{" "}
                                      Hard
                                    </div>
                                  </div>

                                  <div className="filters Grid-item">
                                    <div>
                                      <input
                                        type={"radio"}
                                        onClick={() => {
                                          filter_cat("Medium Soft");
                                        }}
                                        name="radio_button"
                                        value="Medium Soft"
                                      />{" "}
                                      Medium Soft
                                    </div>
                                  </div>

                                  <div className="filters Grid-item">
                                    <div>
                                      <input
                                        type={"radio"}
                                        onClick={() => {
                                          filter_cat("Medium Hard");
                                        }}
                                        name="radio_button"
                                        value="Medium Hard"
                                      />{" "}
                                      Medium Hard
                                    </div>
                                  </div>
                                  <div className="filters Grid-item">
                                    <div>
                                      <input
                                        type={"radio"}
                                        onClick={() => {
                                          filter_cat("Dual Comfort");
                                        }}
                                        name="radio_button"
                                        value="Dual Comfort"
                                      />{" "}
                                      Dual Comfort
                                    </div>
                                  </div>
                                </div>
                              </div>


                              <div className="Main-filterContainer">
                                    <div className="filters Grid-item">
                                      <div>
                                        <input
                                          style={{ visibility: "hidden" }}
                                          type={"radio"}
                                          onClick={() => {
                                            filter_cat("all");
                                          }}
                                          name="radio_button"
                                          value="all"
                                        />{" "}
                                        <lable>Materials</lable>
                                      </div>
                                    </div>
                                    <div className="Main-filterGrid">
                                    <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Spring Mattress");
                                            }}
                                            name="radio_button"
                                            value="Spring Mattress"
                                          />{" "}
                                          Spring Mattress
                                        </div>
                                      </div>
                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Pocketed Spring Mattress");
                                            }}
                                            name="radio_button"
                                            value="Pocketed Spring Mattress"
                                          />{" "}
                                          Pocketed Spring Mattress
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Bonnell Spring Mattress");
                                            }}
                                            name="radio_button"
                                            value="Bonnell Spring Mattress"
                                          />{" "}
                                          Bonnell Spring Mattress
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Natural Latex Mattress");
                                            }}
                                            name="radio_button"
                                            value="Natural Latex Mattress"
                                          />{" "}
                                         Natural Latex Mattress
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Foam Mattress");
                                            }}
                                            name="radio_button"
                                            value="Foam Mattress"
                                          />{" "}
                                          Foam Mattress
                                        </div>
                                      </div>

                                      <div className="filters Grid-item">
                                        <div>
                                          <input
                                            type={"radio"}
                                            onClick={() => {
                                              filter_cat("Coir Mattress");
                                            }}
                                            name="radio_button"
                                            value="Coir Mattress"
                                          />{" "}
                                          Coir Mattress
                                        </div>
                                      </div>
                                     
                                    </div>
                                  </div>


                              <div className="Main-filterContainer">
                                <div className="filters Grid-item">
                                  <div>
                                    <input
                                      type={"radio"}
                                      onClick={() => {
                                        filter_cat("motion_disturbance");
                                      }}
                                      name="radio_button"
                                      value="motion_disturbance"
                                    />{" "}
                                    <lable>Zero Motion Disturbance</lable>
                                  </div>
                                </div>

                                <div className="filters Grid-item">
                                  <div>
                                    <input
                                      type={"radio"}
                                      onClick={() => {
                                        filter_cat("budget_friendly");
                                      }}
                                      name="radio_button"
                                      value="budget_friendly"
                                    />{" "}
                                    <lable>Budget Friendly</lable>
                                  </div>
                                </div>

                                <div className="filters Grid-item">
                                  <div>
                                    <input
                                      type={"radio"}
                                      onClick={() => {
                                        filter_cat("best_seller");
                                      }}
                                      name="radio_button"
                                      value="Best Sellers"
                                    />{" "}
                                    <lable>Best Sellers</lable>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-8 col-lg-8 col-md-8 product-container">
                          {/* <h1>OUR MATTRESS</h1> */}
                          {/* <div class="js-product-list-top firt nav-top">
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
                            
                                </ul>
                                <div class="hidden-sm-down total-products">
                                  <p>
                                    There are {product_list_.length} products.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div> */}
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
                              <div class="d-flex justify-content-around row"></div>
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

export default Products;
