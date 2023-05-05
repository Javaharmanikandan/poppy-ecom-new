import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

import { CartContext } from "../Context/Ecomcontext";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Loader from "../Components/loader";
import axios from "axios";
import cartSection from "../Helper/Cart";
import logo1 from "../assets/img/logo.png";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const commonJs = require("../Helper/Common");

const baseurl = process.env.REACT_APP_BASE_URL;

function Checkout() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const data = {
    countries: [
      {
        name: "TAMIL NADU",
        states: [
          {
            name: "TAMIL NADU",
            district: [
              "Ariyalur",
              "Chengalpattu",
              "Chennai",
              "Coimbatore",
              "Cuddalore",
              "Dharmapuri",
              "Dindigul",
              "Erode",
              "Kallakurichi",
              "Kanchipuram",
              "Kanyakumari",
              "Karur",
              "Krishnagiri",
              "Madurai",
              "Nagapattinam",
              "Namakkal",
              "Nilgiris",
              "Perambalur",
              "Pudukkottai",
              "Ramanathapuram",
              "Ranipet",
              "Salem",
              "Sivaganga",
              "Tenkasi",
              "Thanjavur",
              "Theni",
              "Thoothukudi(Tuticorin)",
              "Tiruchirappalli",
              "Tirunelveli",
              "Tirupathur",
              "Tiruppur",
              "Tiruvallur",
              "Tiruvannamalai",
              "Tiruvarur",
              "Vellore",
              "Viluppuram",
              "Virudhunagar",
            ],
          },
        ],
      },
      {
        name: "GOA",
        states: [
          {
            name: "GOA",
            district: ["North Goa", "South Goa"],
          },
        ],
      },

      {
        name: "PUDUCHERRY (UT)",
        states: [
          {
            name: "PUDUCHERRY (UT)",
            district: ["Karaikal", "Mahe", "Puducherry", "Yanam"],
          },
        ],
      },
      {
        name: "KERALA",
        states: [
          {
            name: "KERALA",
            district: [
              "Kannur",
              "Kasaragod",
              "Kollam",
              "Kottayam",
              "Kozhikode",
              "Malappuram",
              "Palakkad",
              "Pathanamthitta",
              "Thiruvananthapuram",
              "Thrissur",
              "Wayanad",
            ],
          },
        ],
      },

      {
        name: "KARNATAKA",
        states: [
          {
            name: "KARNATAKA",
            district: [
              "Bagalkot",
              "Ballari (Bellary)",
              "Belagavi (Belgaum)",
              "Bengaluru (Bangalore) Rural",
              "Bengaluru (Bangalore) Urban",
              "Bidar",
              "Chamarajanagar",
              "Chikballapur",
              "Chikkamagaluru (Chikmagalur)",
              "Chitradurga",
              "Dakshina Kannada",
              "Davangere",
              "Dharwad",
              "Gadag",
              "Hassan",
              "Haveri",
              "Kalaburagi (Gulbarga)",
              "Kodagu",
              "Kolar",
              "Koppal",
              "Mandya",
              "Mysuru (Mysore)",
              "Raichur",
              "Ramanagara",
              "Shivamogga (Shimoga)",
              "Tumakuru (Tumkur)",
              "Udupi",
              "Uttara Kannada (Karwar)",
              "Vijayapura (Bijapur)",
              "Yadgir",
            ],
          },
        ],
      },
    ],
  };

  //TODO GET DATA  FROM INPUT
  toast.configure();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [street, setStreet] = useState("");
  const [city1, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state1, setState] = useState("");
  const [country, setCountry] = useState("");

  const [cart, setCart] = useContext(CartContext);

  const removeProduct = () => {
    setCart(cartSection.removeCartall());
  };

  var total = cart.reduce((prev, next) => prev + next.amount, 0);

  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const availableState = data.countries.find((c) => c.name === selectedState);

  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );

  if (localStorage.getItem("userInfo") != null) {
    var userData = JSON.parse(localStorage.getItem("userInfo"));
  } else {
    var userData = "";
  }

  useEffect(() => {
    var cart_data = sessionStorage.getItem("poppy-cart");

    setCart(JSON.parse(cart_data));
    total = cart.reduce((prev, next) => prev + next.amount, 0);
  }, []);

  //LOAD SCRIPT

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  //PAYMENT ON SUBMIT
  const onSubmit = async (data, e) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const tot = total * 100;

    const requestBody = {
      payment: tot,
    };
    const result = await axios.post(baseurl + "user/Payment", requestBody);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const user_information = JSON.stringify([
      {
        user_name: data.firstName,
        user_email: data.email,
        user_mobile: data.mobile,
        street: data.street,
        city: data.city,
        pincode: data.Pincode,
        state: selectedState,
        district: selectedCity,
        order_notes: data.notes,
        contry: data.Country,
        total: total,
      },
    ]);

    const options = {
      key: "rzp_live_MCn1tClDeCveBq", // Enter the Key ID generated from the Dashboard
      amount: tot.toString(),
      currency: currency,
      name: "POPPY INDIA.",
      description: " Transaction",
      image: { logo1 },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          order_products: sessionStorage.getItem("poppy-cart"),
          user_information: user_information,
        };

        const result = await axios.post(baseurl + "user/success", data);

        const o_id = await result.data.orderc_id;

        if (result.data.msg === "success") {
          toast.success("Order Placed!");

          const requestBody = {
            order_id: o_id,
          };

          e.target.reset();
          const send = await axios
            .post("https://vegroute.com/poppy/admin/order_mail", requestBody)
            .then(function (response) {
              removeProduct();

              let url_redirect = "/order_track/" + o_id;

              // navigate(url_redirect);
              window.location.href = "https://poppyindia.com/order_track/"+ o_id;
            });
          //  navigate('/');
        }
      },
      prefill: {
        name: data.firstName,
        email: data.email,
        contact: data.mobile,
      },
      notes: {
        address: "karur",
      },
      theme: {
        color: "#a12877",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <div className="product-checkout checkout-cart">
        <div id="checkout" class="main-content">
          <div class="wrap-banner">
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
                        <span>Checkout</span>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </nav>
            <div id="wrapper-site">
              <div class="container">
                <div class="row">
                  <div
                    id="content-wrapper"
                    class="col-xs-12 col-sm-12 col-md-12 col-lg-12 onecol"
                  >
                    <div id="main">
                      <div class="cart-grid row">
                        <div class="col-md-9 check-info">
                          <div class="checkout-personal-step">
                            <h3 class="step-title h3 info">
                              ORDER INFORMATION
                            </h3>
                          </div>
                          <div class="content">
                            <ul
                              class="nav nav-inline"
                              style={{ display: "none" }}
                            >
                              <li class="nav-item">
                                <a
                                  class="nav-link active"
                                  data-toggle="tab"
                                  href="#checkout-guest-form"
                                >
                                  Continue As Guest
                                </a>
                              </li>

                              <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab">
                                  Already Have An Account ?
                                </a>
                              </li>

                              <li class="nav-item">
                                <Link to="/login">
                                  <a class="nav-link" data-toggle="tab">
                                    SIGN IN
                                  </a>
                                </Link>
                              </li>
                            </ul>
                            <div class="tab-content">
                              <div
                                class="tab-pane fade in active show"
                                id="checkout-guest-form"
                                role="tabpanel"
                              >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                  <div>
                                    <input
                                      type="hidden"
                                      name="id_customer"
                                      value=""
                                    />
                                    <div class="form-group row ">
                                      <input
                                        class="form-control"
                                        name="firstname"
                                        type="text"
                                        placeholder="Full name"
                                        value={
                                          userData != "" ||
                                          userData === "undefined"
                                            ? userData.uname
                                            : null
                                        }
                                        // onChange={(event)=> setFullname(event.target.value)}

                                        {...register("firstName", {
                                          required: true,
                                          maxLength: 30,
                                        })}
                                      />

                                      {errors.firstName && (
                                        <p style={{ color: "red" }}>
                                          Please check the First Name
                                        </p>
                                      )}
                                    </div>

                                    <div class="form-group row">
                                      <input
                                        class="form-control"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        value={
                                          userData != "" ||
                                          userData === "undefined"
                                            ? userData.email
                                            : null
                                        }
                                        // onChange={(event)=> setEmail(event.target.value)}
                                        {...register("email", {
                                          required: true,
                                          pattern:
                                            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        })}
                                      />

                                      {errors.email && (
                                        <p style={{ color: "red" }}>
                                          Please check the Email
                                        </p>
                                      )}
                                    </div>
                                    <div class="form-group row">
                                      <input
                                        class="form-control"
                                        name="mobile"
                                        type="text"
                                        placeholder="Phone"
                                        {...register("mobile", {
                                          required: true,
                                          maxLength: 10,
                                        })}
                                      />

                                      {errors.mobile && (
                                        <p style={{ color: "red" }}>
                                          Please check the Mobile Number
                                        </p>
                                      )}
                                    </div>

                                    <div class="form-group row">
                                      <input
                                        class="form-control"
                                        name="street"
                                        type="text"
                                        placeholder="Street Address"
                                        {...register("street", {
                                          required: true,
                                        })}
                                      />

                                      {errors.street && (
                                        <p style={{ color: "red" }}>
                                          Please check the Street Address
                                        </p>
                                      )}
                                    </div>

                                    <div class="form-group row">
                                      <input
                                        class="form-control"
                                        name="city"
                                        type="text"
                                        placeholder="Town / City "
                                        {...register("city", {
                                          required: true,
                                        })}
                                      />

                                      {errors.city && (
                                        <p style={{ color: "red" }}>
                                          Please check the City
                                        </p>
                                      )}
                                    </div>

                                    <div class="form-group row">

                                      <select
                                        id="country-state"
                                        name="country-state"
                                        class="form-control"
                                        value={selectedState}
                                        onChange={(e) =>
                                          setSelectedState(e.target.value)
                                        }
                                      >
                                        <option value="AN">Select State</option>

                                        {data.countries.map((value, key) => {
                                          return (
                                            <option
                                              value={value.name}
                                              key={key}
                                            >
                                              {value.name}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>

                                    <div class="form-group row">
                                      <select
                                        class="form-control"
                                        placeholder="City"
                                        value={selectedCity}
                                        onChange={(e) =>
                                          setSelectedCity(e.target.value)
                                        }
                                      >
                                        <option selected hidden disabled>
                                          Select District
                                        </option>
                                        {availableCities?.district.map(
                                          (e, key) => {
                                            return (
                                              <option value={e.name} key={key}>
                                                {e}
                                              </option>
                                            );
                                          }
                                        )}
                                      </select>

                                      {errors.district && (
                                        <p style={{ color: "red" }}>
                                          Please check the District
                                        </p>
                                      )}
                                    </div>

                                    <div class="form-group row">
                                      <input
                                        class="form-control"
                                        name="Pincode"
                                        type="text"
                                        placeholder="Pincode"
                                        {...register("Pincode", {
                                          required: true,
                                        })}
                                      />
                                    </div>

                                    <div class="form-group row">
                                      <input
                                        class="form-control"
                                        name="Country"
                                        type="text"
                                        value="India"
                                        placeholder="Country"
                                        {...register("Country", {
                                          required: true,
                                        })}
                                      />
                                    </div>

                                    <div class="form-group row">
                                      <textarea
                                        class="form-control"
                                        name="ordernotes"
                                        placeholder="Order Notes"
                                        {...register("notes", {
                                          required: false,
                                        })}
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div class="clearfix">
                                    <div class="row">
                                      <input
                                        type="hidden"
                                        name="submitCreate"
                                        value="1"
                                      />

                                      <button
                                        class="continue btn btn-primary pull-xs-right"
                                        name="continue"
                                        data-link-action="register-new-customer"
                                        type="submit"
                                        value="1"
                                        // onClick={displayRazorpay}
                                      >
                                        Continue
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div
                                class="tab-pane fade"
                                id="checkout-login-form"
                                role="tabpanel"
                              >
                                <form
                                  id="login-form"
                                  action="#"
                                  method="post"
                                  class="customer-form"
                                >
                                  <div>
                                    <input type="hidden" name="back" value="" />
                                    <div class="form-group row">
                                      <input
                                        class="form-control"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                      />
                                    </div>
                                    <div class="form-group row">
                                      <div class="input-group js-parent-focus">
                                        <input
                                          class="form-control js-child-focus js-visible-password"
                                          name="password"
                                          type="password"
                                          placeholder="Password"
                                        />
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="forgot-password">
                                        <a
                                          href="user-reset-password.html"
                                          rel="nofollow"
                                        >
                                          Forgot your password?
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="clearfix">
                                    <div
                                      class="row"
                                      style={{ justifyContent: "center" }}
                                    >
                                      <center>
                                        <button
                                          class="continue btn btn-primary pull-xs-right"
                                          name="continue"
                                          data-link-action="sign-in"
                                          type="submit"
                                          value="1"
                                        >
                                          Continue
                                        </button>
                                      </center>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="cart-grid-right col-xs-12 col-lg-3">
                          <div class="cart-summary">
                            <div class="cart-detailed-totals">
                              <div class="cart-summary-products">
                                <div class="summary-label">
                                  There are {cart.length < 0 ? 0 : cart.length}{" "}
                                  item in your cart
                                </div>
                              </div>

                              <div
                                class="cart-summary-line"
                                id="cart-subtotal-shipping"
                              >
                                <span class="label">Total Shipping : </span>
                                <span class="value"> Free</span>
                                <div>
                                  <small class="value"></small>
                                </div>
                              </div>
                              <div class="cart-summary-line cart-total">
                                <span class="label">Total : </span>
                                <span class="value">
                                  {" "}
                                  ₹ {total} (tax incl.)
                                </span>
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

export default Checkout;
