import "./styles/warranty.css";

import React, { useContext, useEffect, useState } from "react";

import Loader from "../Components/loader";
import Sidebar from "../Components/sidebar-desktop";
import axios from "axios";
import { toast } from "react-toastify";
import { ScrolltoTop } from "../utility";

const baseurl = process.env.REACT_APP_BASE_URL;
//FOR STATE BAESED DISTRICT

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
function Waranty() {
  toast.configure();
  const [customer_name, setCustomer] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");

  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const [active, setActive] = useState(1);

  const availableState = data.countries.find((c) => c.name === selectedState);

  const availableCities = availableState?.states?.find(
    (s) => s.name === selectedState
  );


  useEffect(() => {
    ScrolltoTop()
}, [])



  const toggleText = (inputId, eleId) => {
    var element = document.getElementById(eleId);
    var element_input = document.getElementById(inputId);

    if (element_input.files.length !== 0) {
      element.setAttribute("hidden", true);
    } else {
      element.removeAttribute("hidden");
    }
  };

  const toggleType = (id) => {
    var element = document.getElementById(id);
    element.type = "date";
  };

  //   async function warranty_register1() {

  //     const requestBody = {
  //       customer_name: customer_name,
  //       email: email,
  //       mobile: mobile,
  //       dob: dob,

  //     };
  //     const result = await axios.post(baseurl+"user/warrenty_register",requestBody);

  //     toast.success("Warrenty Registered!");

  // }

  //File Upload
  const [file, setFile] = useState(null);
  const upload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("val", file);
    formData.append("customer_name", customer_name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("state", selectedState);
    formData.append("district", selectedCity);
    formData.append("dob", dob);
    axios
      .post(baseurl + "upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success("Warranty Registered!");
        document.getElementById("customer-form-d").reset();
      });
  };

  //Claim Area

  const [customer_name_claim, setCustomerc] = useState("");

  const [mobile_claim, setMobilec] = useState("");

  const [email_claim, setEmailc] = useState("");

  const [date_claim, setDobc] = useState("");

  const [file1, setFile1] = useState(null);

  const [file2, setFile2] = useState(null);

  const setactive = (idd) => {
    setActive(idd);
  };

  const upload_claim = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("val1", file1);
    formData.append("val2", file2);
    formData.append("customer_name_claim", customer_name_claim);

    formData.append("mobile_claim", mobile_claim);
    formData.append("email_claim", email_claim);
    formData.append("date_claim", date_claim);
    formData.append("state_claim", selectedState);
    formData.append("district_claim", selectedCity);

    axios
      .post(baseurl + "upload_claim", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data.ResponseMsg);
        toast.success("Warranty Claim Submitted!");
        document.getElementById("customer-form").reset();
      });
  };

  return (
    <>
      <div class="main-content user-register blog">
        <div class="wrap-banner">
          <div class="menu-banner d-xs-none">
            <Sidebar />
          </div>

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
                      <span>Warranty</span>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </nav>
        </div>

        <div id="wrapper-site">
          <div class="container">
            <div class="row">
              <div
                id="content-wrapper"
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
              >
                <div id="main">
                  <div id="content" class="">
                    <div class="register-form text-left">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12, col-md-6 col-lg-6">
                          <h1 class="text-center title-page">
                            Register for Warranty
                          </h1>

                          <form
                            action="#"
                            id="customer-form-d"
                            class="js-customer-form"
                            method="post"
                          >

                          <div id="clear">
                            <div class="form-group">
                              <div>
                                <input
                                  class="form-control"
                                  name="firstname"
                                  type="text"
                                  placeholder="Customer Name"
                                  onChange={(event) =>
                                    setCustomer(event.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <div className="cus-fil-btn-wraper">
                                <input
                                  onChange={(e) => {
                                    setFile(e.target.files[0]);
                                    toggleText("cus-fil1", "spn-cus1");
                                  }}
                                  class="form-control cus-file-btn"
                                  id="cus-fil1"
                                  name="file"
                                  type="file"
                                  placeholder="Invoice Number"
                                />

                                <p>* Upload Invoice Image</p>
                              </div>
                            </div>
                            <div class="form-group">
                              <div>
                                <input
                                  class="form-control"
                                  name="email"
                                  type="email"
                                  placeholder="Email Address"
                                  onChange={(event) =>
                                    setEmail(event.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <div>
                                <input
                                  class="form-control"
                                  name="email"
                                  onFocus={() => toggleType("cus-date1")}
                                  id="cus-date1"
                                  type="text"
                                  placeholder="Date Of Birth"
                                  onChange={(event) =>
                                    setDob(event.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <div>
                                <input
                                  class="form-control"
                                  name="mob"
                                  type="number"
                                  placeholder="Mobile Number"
                                  onChange={(event) =>
                                    setMobile(event.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <div>
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
                                      <option value={value.name} key={key}>
                                        {value.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>

                            <div class="form-group">
                              <div>
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
                                  {availableCities?.district.map((e, key) => {
                                    return (
                                      <option value={e.name} key={key}>
                                        {e}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="clearfix">
                            <div>
                              <button
                                class="btn btn-primary"
                                data-link-action="sign-in"
                                onClick={(e) => upload(e)}
                              >
                                Submit
                              </button>
                            </div>
                          </div>

                          </form>
                        </div>

                        <div class="col-xs-12 col-sm-12, col-md-6 col-lg-6">
                          <h1 class="text-center title-page">Warranty Claim</h1>
                          <form
                            action="#"
                            id="customer-form"
                            class="js-customer-form"
                            method="post"
                          >
                            <div>
                              <div class="form-group">
                                <div>
                                  <input
                                    class="form-control"
                                    name="firstname"
                                    type="text"
                                    placeholder="Customer Name"
                                    onChange={(event) =>
                                      setCustomerc(event.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <div className="cus-fil-btn-wraper">
                                  <input
                                    onChange={(e) => {
                                      setFile1(e.target.files[0]);
                                      toggleText("cus-fil2", "spn-cus2");
                                    }}
                                    class="form-control cus-file-btn"
                                    name="email"
                                    type="file"
                                    id="cus-fil2"
                                    placeholder="Upload Image"
                                  />
                                </div>

                                <p>* Upload Invoice Image</p>
                              </div>
                              <div class="form-group">
                                <div className="cus-fil-btn-wraper">
                                  <input
                                    onChange={(e) => {
                                      setFile2(e.target.files[0]);
                                      toggleText("cus-fil2", "spn-cus2");
                                    }}
                                    class="form-control cus-file-btn"
                                    name="email"
                                    type="file"
                                    id="cus-fil2"
                                    placeholder="Upload Image"
                                  />
                                </div>
                                <p>* Upload Damage Image</p>
                              </div>
                              <div class="form-group">
                                <div>
                                  <input
                                    class="form-control"
                                    name="dt"
                                    type="text"
                                    onFocus={() => toggleType("cus-date2")}
                                    id="cus-date2"
                                    placeholder="Select Purchased Date"
                                    onChange={(event) =>
                                      setDobc(event.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <div>
                                  <input
                                    class="form-control"
                                    name="email"
                                    type="text"
                                    placeholder="Email Address"
                                    onChange={(event) =>
                                      setEmailc(event.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div class="form-group">
                                <div>
                                  <input
                                    class="form-control"
                                    name="email"
                                    type="number"
                                    placeholder="Mobile Number"
                                    onChange={(event) =>
                                      setMobilec(event.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div class="form-group">
                                <div>
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
                                        <option value={value.name} key={key}>
                                          {value.name}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>

                              <div class="form-group">
                                <div>
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
                                    {availableCities?.district.map((e, key) => {
                                      return (
                                        <option value={e.name} key={key}>
                                          {e}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div class="clearfix">
                              <div>
                                <button
                                  class="btn btn-primary"
                                  data-link-action="sign-in"
                                  type="submit"
                                  onClick={(e) => upload_claim(e)}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div
                id="content-wrapper"
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12"
              >
                <div id="main">
                  <div id="content" class="">
                    <div class="review">
                      <ul class="nav nav-tabs tab_ul">
                        <li
                          id="1"
                          className={active === 1 ? "active_liscr" : "tab_li"}
                        >
                          <a
                            data-toggle="tab"
                            href="#Grand"
                            onClick={(e) => setactive(1)}
                          >
                            Grand Series
                          </a>
                        </li>
                        <li
                          id="2"
                          className={active === 2 ? "active_liscr" : "tab_li"}
                        >
                          <a
                            data-toggle="tab"
                            href="#Premium"
                            onClick={(e) => setactive(2)}
                          >
                            Premium Series
                          </a>
                        </li>
                        <li
                          id="3"
                          className={active === 3 ? "active_liscr" : "tab_li"}
                        >
                          <a
                            data-toggle="tab"
                            href="#Medico"
                            onClick={(e) => setactive(3)}
                          >
                            Medico Series{" "}
                          </a>
                        </li>

                        <li
                          id="4"
                          className={active === 4 ? "active_liscr" : "tab_li"}
                        >
                          <a
                            data-toggle="tab"
                            href="#Latex"
                            onClick={(e) => setactive(4)}
                          >
                            Latex Series
                          </a>
                        </li>
                        <li
                          id="5"
                          className={active === 5 ? "active_liscr" : "tab_li"}
                        >
                          <a
                            data-toggle="tab"
                            href="#PU"
                            onClick={(e) => setactive(5)}
                          >
                            PU Foam Series
                          </a>
                        </li>
                        <li
                          id="6"
                          className={active === 6 ? "active_liscr" : "tab_li"}
                        >
                          <a
                            data-toggle="tab"
                            href="#Rubberized"
                            onClick={(e) => setactive(6)}
                          >
                            Rubberized coir Series
                          </a>
                        </li>

                        {/* <li
                          id="7"
                          className={active === 7 ? "active_liscr" : "tab_li"}
                        >
                          <a
                            data-toggle="tab"
                            href="#natur"
                            onClick={(e) => setactive(6)}
                          >
                            Natur Art services
                          </a>
                        </li> */}
                      </ul>

                      <div class="tab-content tab-borderui">
                        <div id="Grand" class="tab-pane fade in active show ">
                          <center>
                            <h5 style={{ marginBottom: "20px" }}>
                              WARRANTY SCHEDULE
                            </h5>

                            <table
                              class="std table"
                              style={{ textAlign: "center" }}
                            >
                              <thead class="th_back">
                                <tr>
                                  <th class="first_item">Product</th>
                                  <th class="item mywishlist_first">
                                    Total Warranty(Years)
                                  </th>
                                  <th class="item mywishlist_first">
                                    Peroid for charges for repair(In Years)
                                  </th>
                                  <th class="item mywishlist_second">
                                    Calculation of Charges for repair beyond
                                    free replacement period
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Exuber TT</a>
                                  </td>
                                  <td class="bold align_center">5</td>
                                  <td>2 to 5</td>
                                  <td></td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Exuber PT</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td>Value of the mattress</td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Exuber ET</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td>X</td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Aurora</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td></td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Classique</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td>Age of the Mattress</td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Grandeur</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td>Total Warranty Period</td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Grand master</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </center>
                        </div>

                        <div id="Premium" class="tab-pane fade in  show">
                          <center>
                            <h5 style={{ marginBottom: "20px" }}>
                              WARRANTY SCHEDULE
                            </h5>

                            <table
                              class="std table"
                              style={{ textAlign: "center" }}
                            >
                              <thead class="th_back">
                                <tr>
                                  <th class="first_item">Product</th>
                                  <th class="item mywishlist_first">
                                    Total Warranty(Years)
                                  </th>
                                  <th class="item mywishlist_first">
                                    Peroid for charges for repair(In Years)
                                  </th>
                                  <th class="item mywishlist_second">
                                    Calculation of Charges for repair beyond
                                    free replacement period
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Selene TT</a>
                                  </td>
                                  <td class="bold align_center">5</td>
                                  <td>2 to 5</td>
                                  <td
                                    rowspan="6"
                                    align="center"
                                    style={{
                                      verticalAlign: "middel",
                                      textAlign: "center",
                                    }}
                                  >
                                    Value of the mattress
                                    <br />
                                    X<br />
                                    Age of the Mattress
                                    <br />
                                    <hr />
                                    Total Warranty Period
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Selene PT</a>
                                  </td>
                                  <td class="bold align_center">5</td>
                                  <td>2 to 5</td>
                                  <td></td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Riser TT</a>
                                  </td>
                                  <td class="bold align_center">5</td>
                                  <td>2 to 5</td>
                                  <td></td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Luxe TT</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td></td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Luxe ET</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td></td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Luxe PT</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </center>
                        </div>

                        <div id="Medico" class="tab-pane fade in">
                          <center>
                            <h5 style={{ marginBottom: "20px" }}>
                              WARRANTY SCHEDULE
                            </h5>

                            <table
                              class="std table"
                              style={{ textAlign: "center" }}
                            >
                              <thead class="th_back">
                                <tr>
                                  <th class="first_item">Product</th>
                                  <th class="item mywishlist_first">
                                    Total Warranty(Years)
                                  </th>
                                  <th class="item mywishlist_first">
                                    Peroid for charges for repair(In Years)
                                  </th>
                                  <th class="item mywishlist_second">
                                    Calculation of Charges for repair beyond
                                    free replacement period
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      Guardianz
                                    </h6>
                                  </td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Bonnell Spring with MF + CF
                                    </a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Rebonded Foam with MF + CF
                                    </a>
                                  </td>
                                  <td class="bold align_center">7</td>
                                  <td>2 to 7</td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Rebonded Foam with Copper Infused
                                    </a>
                                  </td>
                                  <td class="bold align_center">5</td>
                                  <td>2 to 5</td>
                                  <td rowspan="5">
                                    {" "}
                                    Value of the mattress
                                    <br />
                                    X <br />
                                    Age of the Mattress
                                    <br />
                                    Total Warranty Period
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      Spine Shield
                                    </h6>
                                  </td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Rubberized Coir with MF + CF
                                    </a>
                                  </td>
                                  <td class="bold align_center">7</td>
                                  <td>2 to 7</td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Rubberized Coir with Copper Infused
                                    </a>
                                  </td>
                                  <td class="bold align_center">5</td>
                                  <td>2 to 5</td>
                                </tr>
                              </tbody>
                            </table>
                          </center>
                        </div>

                        <div id="Latex" class="tab-pane fade in">
                          <center>
                            <h5 style={{ marginBottom: "20px" }}>
                              WARRANTY SCHEDULE
                            </h5>

                            <table
                              class="std table"
                              style={{ textAlign: "center" }}
                            >
                              <thead class="th_back">
                                <tr>
                                  <th class="first_item">Product</th>
                                  <th class="item mywishlist_first">
                                    Total Warranty(Years)
                                  </th>
                                  <th class="item mywishlist_first">
                                    Peroid for charges for repair(In Years)
                                  </th>
                                  <th class="item mywishlist_second">
                                    Calculation of Charges for repair beyond
                                    free replacement period
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Pure Natural</a>
                                  </td>
                                  <td
                                    rowspan="3"
                                    align="center"
                                    style={{
                                      verticalAlign: "middel",
                                      textAlign: "center",
                                    }}
                                    class="bold align_center"
                                  >
                                    10
                                  </td>
                                  <td
                                    rowspan="3"
                                    align="center"
                                    style={{
                                      verticalAlign: "middel",
                                      textAlign: "center",
                                    }}
                                  >
                                    2 to 10
                                  </td>
                                  <td
                                    rowspan="3"
                                    align="center"
                                    style={{
                                      verticalAlign: "middel",
                                      textAlign: "center",
                                    }}
                                  >
                                    Value of the mattress
                                    <br />
                                    X<br />
                                    Age of the Mattress
                                    <br />
                                    <hr />
                                    Total Warranty Period
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Rubberized Coir + Latex
                                    </a>
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">HR Foam + Latex</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </center>
                        </div>

                        <div id="PU" class="tab-pane fade in">
                          <center>
                            <h5 style={{ marginBottom: "20px" }}>
                              WARRANTY SCHEDULE
                            </h5>

                            <table
                              class="std table"
                              style={{ textAlign: "center" }}
                            >
                              <thead class="th_back">
                                <tr>
                                  <th class="first_item">
                                    Total Warranty (Years)
                                  </th>
                                  <th class="item mywishlist_first">
                                    Company will Charge
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      2 YEAR MODEL - Fluffy
                                    </h6>
                                  </td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post purchase but within 12month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    0% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 12month but within 18month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    30% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 18month but within 24month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    60% on original M.R.P
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      3 YEAR MODEL - Eco Soft
                                    </h6>
                                  </td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post purchase but within 12month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    0% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 12month but within 24month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    30% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 24month but within 36month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    60% on original M.R.P
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      7 YEAR MODEL - BounZ
                                    </h6>
                                  </td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post purchase but within 12month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    0% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 12month but within 36month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    30% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 36month but within 60month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    60% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      {" "}
                                      Post 60month but within 84month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    90% on original M.R.P
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </center>
                          <br />
                          <center>
                            <table
                              class="std table"
                              style={{ textAlign: "center" }}
                            >
                              <thead class="th_back">
                                <tr>
                                  <th class="first_item">Product</th>
                                  <th class="item mywishlist_first">
                                    Total Warranty(Years)
                                  </th>
                                  <th class="item mywishlist_first">
                                    Peroid for charges for repair(In Years)
                                  </th>
                                  <th class="item mywishlist_second">
                                    Calculation of Charges for repair beyond
                                    free replacement period
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Composure</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td rowspan="4">
                                    Value of the mattress
                                    <br />
                                    X<br />
                                    Age of the Mattress
                                    <br />
                                    <hr />
                                    Total Warranty Period
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Luxury Bond</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td></td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Visco Brisk</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td></td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">Visco Vibe</a>
                                  </td>
                                  <td class="bold align_center">10</td>
                                  <td>2 to 10</td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </center>
                        </div>

                        <div id="Rubberized" class="tab-pane fade in">
                          <center>
                            <h5 style={{ marginBottom: "20px" }}>
                              WARRANTY SCHEDULE
                            </h5>

                            <table
                              class="std table"
                              style={{ textAlign: "center" }}
                            >
                              <thead class="th_back">
                                <tr>
                                  <th class="first_item">
                                    Total Warranty (Years)
                                  </th>
                                  <th class="item mywishlist_first">
                                    Company will Charge
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      2 YEAR MODEL -{" "}
                                      <span class="spancolor">
                                        Desire T.T
                                        <span
                                          style={{
                                            marginLeft: 10,
                                            marginRight: 10,
                                          }}
                                        >
                                          |
                                        </span>{" "}
                                        Access T.T
                                      </span>
                                    </h6>
                                  </td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post purchase but within 12month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    0% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 12month but within 18month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    30% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 18month but within 24month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    60% on original M.R.P
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      3 YEAR MODEL -{" "}
                                      <span class="spancolor">
                                        Saffron T.T
                                        <span
                                          style={{
                                            marginLeft: 10,
                                            marginRight: 10,
                                          }}
                                        >
                                          |
                                        </span>{" "}
                                        Desire P.T
                                      </span>
                                    </h6>
                                  </td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post purchase but within 12month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    0% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 12month but within 24month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    30% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 24month but within 36month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    60% on original M.R.P
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      5 YEAR MODEL -{" "}
                                      <span class="spancolor">
                                        {" "}
                                        Saffron DLX - E.T{" "}
                                        <span
                                          style={{
                                            marginLeft: 10,
                                            marginRight: 10,
                                          }}
                                        >
                                          |
                                        </span>{" "}
                                        Saffron DLX - T.T
                                      </span>
                                    </h6>
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post purchase but within 12month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    0% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 12month but within 24month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    30% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 24month but within 36month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    60% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      {" "}
                                      Post 36month but within 60month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    90% on original M.R.P
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <h6 style={{ color: "#842c77" }}>
                                      7 YEAR MODEL -{" "}
                                      <span class="spancolor">
                                        {" "}
                                        Saffron DLX Memory
                                      </span>
                                    </h6>
                                  </td>
                                </tr>
                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post purchase but within 12month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    0% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 12month but within 36month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    30% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      Post 36month but within 60month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    60% on original M.R.P
                                  </td>
                                </tr>

                                <tr id="wishlist_1">
                                  <td>
                                    <a href="javascript:;">
                                      {" "}
                                      Post 60month but within 84month of
                                      purchase
                                    </a>
                                  </td>
                                  <td class="bold align_center">
                                    90% on original M.R.P
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </center>
                        </div>

                        <div class="row margin_left">
                          <div class="col-xs-12 col-sm-12 col-md-6 down">
                            <div class="item d-flex">
                              <div class="item-right ">
                                <div class="titlewar">WHAT IS COVERED ?</div>
                                <div class="contact-content">
                                  <ul>
                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>
                                      Any defects due to worksmanship.{" "}
                                    </li>
                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>
                                      Fabric defects
                                    </li>
                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Defects due to spring coils.
                                    </li>
                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Improper shaking of the mattress.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-6 down">
                            <div class="item d-flex">
                              <div class="item-right ">
                                <div class="titlewar">
                                  WHAT IS NOT COVERED ?
                                </div>
                                <div class="contact-content">
                                  <ul>
                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Burns, Smell and Stains in fabric Comfort
                                      Preferences
                                    </li>

                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Damage caused by misuse of mattress
                                    </li>
                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Damage Caused by Bad Bed Frames
                                    </li>
                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Damage Caused due to insufficient rotation
                                      of the mattress
                                    </li>
                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Damage Caused by fluid Substances.
                                    </li>

                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Size variation of ± 0.5 inch for length ,
                                      width , thickness Is acceptable and will
                                      not be covered under warranty.
                                    </li>

                                    <li>
                                      {" "}
                                      <i
                                        class="fa fa-star fcolor"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Normal softening/ sagging that is less
                                      than one inch
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-12 down">
                            <div class="item d-flex ">
                              <div class="item-right ">
                                <div class="titlewar">
                                  WHAT IF DEFECT OCCURS ?
                                </div>
                                <div
                                  class="contact-content"
                                  style={{ margin: "10px" }}
                                >
                                  If you observe any defect, you shall either
                                  contact the authorized dealer from where you
                                  purchased the mattress or claim your warranty
                                  online. To claim warranty online, we request
                                  you to register your purchase within the first
                                  30 days, which will help us to process faster
                                  once you make your claim. Defected product
                                  must be within the duration of the warranty
                                  period.
                                  <br />
                                  To claim warranty, you shall produce the
                                  warranty card with the seal of Authorized
                                  Dealer and proof of purchase.
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xs-12 col-sm-12 col-md-6 down">
                            <div class="item d-flex ">
                              <div class="item-right ">
                                <div class="titlewar">WHAT WILL POPPY DO ?</div>
                                <div
                                  class="contact-content"
                                  style={{ margin: "10px" }}
                                >
                                  For any claim of warranty, for the defects
                                  covered under our warranty norms, subjected to
                                  the warranty period, we will repair or replace
                                  the mattress at our factory in a very short
                                  span along with extra charges, if any. We will
                                  replace the defected products, in accordance
                                  with our warranty conditions, with an equal or
                                  a higher value, whichever suits the best and
                                  this may not guarantee an exact replacement of
                                  your purchased product. It shall be noted that
                                  the transportation charges will be extra.
                                  <br />
                                  <br />
                                  The period of coverage of the warranty starts
                                  with the date of your purchase and you shall
                                  refer to your warranty card for other details.
                                  Once we do the repair or replacement of the
                                  mattress, the original date of purchase shall
                                  be continued for warranty purposes.
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xs-12 col-sm-12 col-md-6 down">
                            <div class="item d-flex ">
                              <div class="item-right ">
                                <div class="titlewar">
                                  INVALIDATION OF THE WARRANTTY{" "}
                                </div>
                                <div
                                  class="contact-content"
                                  style={{ margin: "10px" }}
                                >
                                  If the buyer did not have any valid proof of
                                  their claim, Poppy reserves the right of
                                  refusal of services and may invalidate the
                                  warranty itself. We recommend our customers to
                                  claim warranty subjected to our norms. The
                                  final decision on any claim made, shall solely
                                  rest with the Poppy Mattress Private Limited.
                                  <br />
                                  <span
                                    style={{ color: "#802b77", fontSize: 10 }}
                                  >
                                    * Disputes Arising Out, If Any, Subject To
                                    Karur Jurisdiction Only.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-xs-12 col-sm-12 col-md-12 down">
                            <div class="item d-flex ">
                              <div class="item-right ">
                                <center>
                                  <div class="titlewar">MATTRESS CARE </div>
                                </center>
                                <div
                                  class="contact-content"
                                  style={{ margin: "10px" }}
                                >
                                  We recommend you to use Mattress protector for
                                  Longer Life Period. Do flip and turn the
                                  mattress seasonally for the instructed ones.
                                  Your Mattress is designed to be slept on..
                                  Don't Jump or walk on. Don't bend, fold or
                                  drag the mattress , it can damage the
                                  mattress...
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
      <Loader />
    </>
  );
}

export default Waranty;
