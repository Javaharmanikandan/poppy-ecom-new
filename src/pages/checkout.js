import "./styles/New.css";
import { CartContext } from "../Context/Ecomcontext";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../Components/loader";
import axios from "axios";
import cartSection from "../Helper/Cart";
import logo1 from "../assets/img/logo.png";
import { toast } from "react-toastify";
import sec_img from "../assets/img/footer/paymant.png";
import sec_img1 from "../assets/img/footer/secure.png";
import { Modal } from "react-responsive-modal";

const baseurl = process.env.REACT_APP_BASE_URL;

const imgurl = process.env.REACT_APP_IMG_URL;

export default function Checkout() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [cart, setCart] = useContext(CartContext);
  var total = cart.reduce(
    (prev, next) => parseInt(prev) + parseInt(next.amount),
    0
  );

  var subtotal = cart.reduce(
    (prev, next) =>
      parseInt(prev) +
      parseInt(next.product_count) * parseInt(next.price_original),
    0
  );

  var product_count_all = cart.reduce(
    (prev, next) => parseInt(prev) + parseInt(next.product_count),
    0
  );

  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();

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

  const availableState = data.countries.find((c) => c.name === selectedState);

  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );

  useEffect(() => {
    var cart_data = sessionStorage.getItem("poppy-cart");
    console.log(cart_data);
    setCart(JSON.parse(cart_data));
    subtotal = cart.reduce(
      (prev, next) =>
        parseInt(prev) +
        parseInt(next.product_count) * parseInt(next.price_original),
      0
    );
    total = cart.reduce(
      (prev, next) => parseInt(prev) + parseInt(next.amount),
      0
    );
    product_count_all = cart.reduce(
      (prev, next) => parseInt(prev) + parseInt(next.product_count),
      0
    );
  }, []);

  const removeProduct = () => {
    setCart(cartSection.removeCartall());
  };

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
    const tot = 1 * 100;

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
            .post(
              "https://admin.poppyindia.com/admin/order_mail",
              requestBody
            )
            .then(function (response) {
              removeProduct();
              onOpenModal();
              let url_redirect = "/order_track/" + o_id;

              // navigate(url_redirect);
              // window.location.href =
              //   "https://poppyindia.com/order_track/" + o_id;
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
      {/* <div className="headingContent">
        <h4 style={{ color: "#992876" }}>Shipping details </h4>
      </div> */}

      <div className="Check-row">
        <div className="col-75">
          <h4 className="headingContent" style={{ color: "#992876" }}>
            Shipping details{" "}
          </h4>
          <div className="Check-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Check-row">
                <div className="col-50">
                  <label for="fname">
                    Full Name{" "}
                    {errors.firstName && (
                      <span
                        style={{ color: "red", marginLeft: 20, fontSize: 10 }}
                      >
                        Enter valid First Name
                      </span>
                    )}{" "}
                  </label>

                  <input
                    className="InputLayout"
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                    {...register("firstName", {
                      required: true,
                      maxLength: 30,
                    })}
                  />

                  <label for="email">
                    {" "}
                    Email{" "}
                    {errors.email && (
                      <span
                        style={{ color: "red", marginLeft: 20, fontSize: 10 }}
                      >
                        Enter valid Email Address{" "}
                      </span>
                    )}
                  </label>
                  <input
                    className="InputLayout"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />

                  <label for="email">
                    {" "}
                    Mobile Number{" "}
                    {errors.mobile && (
                      <span
                        style={{ color: "red", marginLeft: 20, fontSize: 10 }}
                      >
                        Enter valid Mobile Number{" "}
                      </span>
                    )}
                  </label>

                  <input
                    className="InputLayout"
                    type="text"
                    id="cname"
                    name="mobile"
                    placeholder="+91 1234567890"
                    {...register("mobile", {
                      required: true,
                      maxLength: 10,
                    })}
                  />

                  <label for="email">
                    {" "}
                    Street{" "}
                    {errors.street && (
                      <span
                        style={{ color: "red", marginLeft: 20, fontSize: 10 }}
                      >
                        Enter street name{" "}
                      </span>
                    )}
                  </label>
                  <input
                    className="InputLayout"
                    type="text"
                    id="adr"
                    name="street"
                    placeholder="542 W. 15th Street"
                    {...register("street", {
                      required: true,
                    })}
                  />
                  <label for="email">
                    {" "}
                    City{" "}
                    {errors.city && (
                      <span
                        style={{ color: "red", marginLeft: 20, fontSize: 10 }}
                      >
                        Enter city name{" "}
                      </span>
                    )}
                  </label>
                  <input
                    className="InputLayout"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="KK City"
                    {...register("city", {
                      required: true,
                    })}
                  />
                </div>

                <div className="col-50">
                  <label for="fname">State </label>

                  <select
                    style={{ height: 47 }}
                    id="country-state"
                    name="country-state"
                    className="InputLayout"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="AN">Select State</option>

                    {data.countries.map((value, key) => {
                      return (
                        <option value={value.name} key={key}>
                          {value.name}
                        </option>
                      );
                    })}
                  </select>
                  <label for="fname">District </label>

                  <select
                    style={{ height: 47 }}
                    className="InputLayout"
                    placeholder="City"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option selected hidden disabled>
                      Select District
                    </option>
                    {availableCities?.district.map((e, key) => {
                      return (
                        <option value={e.name} key={key}>
                          {e}
                        </option>
                      );
                    })}
                  </select>

                  <label for="fname">
                    Country{" "}
                    {errors.Country && (
                      <span
                        style={{ color: "red", marginLeft: 20, fontSize: 10 }}
                      >
                        Enter Country name
                      </span>
                    )}{" "}
                  </label>

                  <input
                    className="InputLayout"
                    type="text"
                    id="fname"
                    name="Country"
                    placeholder="India"
                    value="India"
                    {...register("Country", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                  <label for="fname">
                    Pin Code{" "}
                    {errors.firstName && (
                      <span
                        style={{ color: "red", marginLeft: 20, fontSize: 10 }}
                      >
                        Enter valid Pin code
                      </span>
                    )}{" "}
                  </label>

                  <input
                    className="InputLayout"
                    type="text"
                    id="fname"
                    name="Pincode"
                    placeholder="123456"
                    {...register("Pincode", {
                      required: true,
                      maxLength: 30,
                    })}
                  />

                  <label for="fname">Order Notes </label>

                  <input
                    className="InputLayout"
                    type="text"
                    id="fname"
                    name="ordernotes"
                    placeholder="Order notes"
                    {...register("notes", {
                      required: false,
                    })}
                  />
                </div>
              </div>

              <input type="submit" value={"PAY NOW"} className="btnChekcout" />
            </form>
          </div>
        </div>
        <div className="col-25">
          <h4 className="headingContent" style={{ color: "#992876" }}>
            Order summary{" "}
          </h4>
          <div className="Check-containerRight">
            {/* <h5 style={{ color: "black" }}>Your's Cart Items</h5> */}

            {cart
              ? cart.map((ad) => (
                <>
                  <div className="Checkout-products ">
                    <div className="checkout-item-layout">
                      <img className="checkout-item-image" src={imgurl + ad.image} alt={ad.title} />
                      <div style={{ marginLeft: 20, marginTop: 4 }}>
                        <p style={{ fontSize: 18, color: "black" }}>
                          {ad.title} <br />
                          {ad.sub_devision !=0 &&  <span style={{color:"#982876",fontSize:10}}> {ad.sub_devision}</span>}
                        </p>
                        <hr style={{ marginTop: 5, marginBottom: 2 }} />
                        <span
                          style={{
                            fontSize: 14,
                            marginTop: 5,
                            display: "flex",
                            gap: 30,
                          }}
                        >
                          {ad.bed_type} | {ad.dimension} | {ad.thickness}{" "}
                          <span> Qty - {ad.product_count}</span>
                        </span>
                        {/*  */}
                        {/* <div style={{display:"flex",gap:10,marginTop: 5}}>
                        <img src={imgurl + ad.image} alt={ad.title} style={{width:30,height:30,borderRadius:50,border:'1px solid rgba(0, 0, 0, 0.15)'}} /> */}
                        <span
                          style={{
                            display: "flex",
                            fontSize: 12,
                            marginTop: 5,
                          }}
                        >
                          <b>Selected Color - {ad.color}</b>
                        </span>
                        {/* </div> */}

                        <hr style={{ marginTop: 5, marginBottom: 2 }} />

                        <p style={{ fontSize: 11 }}>
                          M.R.P{" "}
                          <span
                            style={{
                              marginLeft: 10,
                              fontFamily: "system-ui",
                              textDecoration: "line-through",
                            }}
                          >
                            {" "}
                            <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                            {ad.price_original} /-
                          </span>{" "}
                          <span>{ad.percentage} %</span>{" "}
                          <span
                            style={{
                              fontSize: 16,
                              marginLeft: 20,
                              fontFamily: "system-ui",
                              fontWeight: 500,
                            }}
                          >
                            <b>
                              <i class="fa fa-inr" aria-hidden="true"></i>{" "}
                              {parseInt(ad.amount)}
                            </b>
                            /-
                          </span>
                        </p>

                        <p
                          style={{
                            fontSize: 10,
                            fontStyle: "italic",
                            marginTop: 10,
                            border: "1px solid rgba(0, 0, 0, 0.15)",
                            padding: 10,
                            borderRadius: 10,
                          }}
                        >
                          Free Gift - {ad.free}
                        </p>
                      </div>
                    </div>

                    
                    {/* <div>
                      <span className="price" style={{ marginTop: 10 }}>
                        {" "}
                        ₹ {ad.amount} /-
                      </span>
                    </div> */}
                    
                  </div>

<hr style={{ marginTop: 5, marginBottom: 2,border:'dashed 0.8px #982876' }} />
                   
</>    ))
              : null}

            <hr />
            {/* <p>
              Total{" "}
              <span
                className="price"
                style={{
                  color: "black",
                  fontSize: 24,
                  fontFamily: "system-ui",
                }}
              >
                <b>₹ {total} /-</b>
              </span>
            </p> */}

            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: 16 }}>
                  {" "}
                  Price ({product_count_all} Items){" "}
                </p>
                <b style={{ fontSize: 16, fontFamily: "system-ui", }}> <i class="fa fa-inr" aria-hidden="true"></i> {parseInt(subtotal)} </b>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <p style={{ fontSize: 16 }}> Discount </p>
                <b style={{ fontSize: 16 , fontFamily: "system-ui",}}>
                <i class="fa fa-inr" aria-hidden="true"></i> {parseInt(subtotal) - parseInt(total)}{" "}
                </b>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <p style={{ fontSize: 16 }}> Shipping </p>
                <b style={{ fontSize: 16 }}>Free </b>
              </div>
            </div>
            <hr />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <p style={{ fontSize: 16 }}>
                  {" "}
                  Total Price
                  <br /> <small>Inclusive of taxes</small>{" "}
                </p>
                <b style={{ fontSize: 20, fontFamily: "system-ui", }}> <i class="fa fa-inr" aria-hidden="true"></i> {parseInt(total)} </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="CheckoutImgContainer">
        <img
          // onClick={onOpenModal}
          style={{ maxWidth: "100%", paddingTop: 20, marginBottom: 20 }}
          src={sec_img1}
          // width="100%"
        />
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background:
              'url("https://img1.picmix.com/output/stamp/thumb/5/3/3/4/1034335_985ee.gif")',
          }}
        >
          {" "}
          <img
            src={"https://i.gifer.com/7efs.gif"}
            style={{ width: "50%", height: "50%" }}
          />
          <h4 className="desktop-responisve">
            {" "}
            Great news ! Your Order has been Placed !
          </h4>
          <h4 align="center" className="mobile-responisve">
            {" "}
            Great news !<br /> Your Order has been Placed !
          </h4>
          <p
            align="center"
            style={{ width: "75%", fontSize: 14, lineHeight: "28px" }}
          >
            Thank you For your Purchase! You will receive an Order confirmation
            email with tracking details of your order.
          </p>
          <div class="block m-top1" style={{ marginTop: 10 }}>
            <div class="block-content">
              <div class="social-content">
                <h6 align="center">Follow us on</h6>
                <div id="social-block">
                  <div class="social">
                    <ul class="list-inline mb-0 justify-content-end">
                      <li class="list-inline-item mb-0">
                        <a
                          href="https://m.facebook.com/poppymattressindia/"
                          target="_blank"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>

                      <li class="list-inline-item mb-0">
                        <a
                          href="https://www.instagram.com/poppymattress"
                          target="_blank"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>

                      <li class="list-inline-item mb-0">
                        <a
                          href="https://in.linkedin.com/company/poppymattress"
                          target="_blank"
                        >
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li class="list-inline-item mb-0">
                        <a
                          href="https://www.youtube.com/@poppymattress"
                          target="_blank"
                        >
                          <i class="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
