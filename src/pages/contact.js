import React from "react";
import c_head_img from "../assets/img/contact/contact_mess.png";
import btn_image from "../assets/img/contact/contact_email.png";
import Loader from "../Components/loader";
import Header from "../Components/header";
import Footer from "../Components/footer";
import {toast} from "react-toastify";
export default function Contact() {

  toast.configure();
  
    
  const toggleButton = () => {
    //TODO METHOD ACTION FOR ADD
    toast.success("Thanks For Contacting Us!.");
    
    
      
  }
  return (
    <>
    <div id="contact">
    <div class="main-content">
      <div id="wrapper-site">
        <div id="content-wrapper">
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
                      <span>Contact</span>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </nav>
          <div id="main">
            <div class="page-home">
              <div class="container">
                <h1 class="text-center title-page">Contact Us</h1>
                <div class="row-inhert">
                  <div class="header-contact">
                    <div class="row">
                      <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="item d-flex">
                          <div class="item-left">
                            <div class="icon">
                              <i class="zmdi zmdi-email"></i>
                            </div>
                          </div>
                          <div class="item-right d-flex">
                            <div class="title" style={{color:'rgb(52 52 52)'}}>Email:</div>
                            <div class="contact-content">
                              <a href="mailto:support@poppyindia.com">
                                support@poppyindia.com
                              </a>
                              <br />
                              <a href="mailto:info@poppyindia.com">
                                info@poppyindia.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="item d-flex">
                          <div class="item-left">
                            <div class="icon">
                              <i class="zmdi zmdi-home"></i>
                            </div>
                          </div>
                          <div class="item-right d-flex">
                                <div class="title" style={{color:'rgb(52 52 52)'}}>Address:</div>
                            <div class="contact-content">
                              S.F.No. 283/1B, Sukkampatti (Manalmedu), Thalapatti (P.O.),
                              <br />
                             Manmangalam (Tk), Karur - 639003, Tamil Nadu, India
                            </div>
                          </div>
                        </div> .
                      </div>
                      <div class="col-xs-12 col-sm-4 col-md-4">
                        <div class="item d-flex justify-content-end  last">
                          <div class="item-left">
                            <div class="icon">
                              <i class="zmdi zmdi-phone"></i>
                            </div>
                          </div>
                          <div class="item-right d-flex">
                                <div class="title" style={{color:'rgb(52 52 52)'}}>Hotline:</div>
                            <div class="contact-content">
                              +91 90548 48481
                              {/* <br />
                              0987-654-32100 */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="contact-map">
                        <div id="map">
                          
                         
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.881648092037!2d78.01594971472247!3d10.896598259943888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2f683e5debd1%3A0x27d24cb36c1afd3b!2sPoppy%20Mattress%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1653974879290!5m2!1sen!2sin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div class="input-contact">
                    {/* <p class="text-intro text-center">
                      “Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicudin, lorem quis bibendum auctor, nisi elit
                      consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                      odio sit amet nibh vultate cursus a sit amet mauris. Proin
                      gravida nibh vel velit auctor aliquet.”
                    </p> */}

                    <p class="icon text-center">
                      <a href="#">
                        <img src={c_head_img} alt="img" />
                      </a>
                    </p>

                    <div class="d-flex justify-content-center">
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="contact-form">
                          {/* <form
                            action="#"
                            method="post"
                            enctype="multipart/form-data"
                          > */}
                            <div class="form-fields">
                              <div class="form-group row">
                                <div class="col-md-6">
                                  <input
                                    class="form-control"
                                    name="name"
                                    placeholder="Your name"
                                  />
                                </div>
                                <div class="col-md-6 margin-bottom-mobie">
                                  <input
                                    class="form-control"
                                    name="from"
                                    type="email"
                                    value=""
                                    placeholder="Your email"
                                  />
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="col-md-12 margin-bottom-mobie">
                                  <input
                                    class="form-control"
                                    name="from"
                                    type="email"
                                    value=""
                                    placeholder="Subject"
                                  />
                                </div>
                              </div>
                              <div class="form-group row">
                                <div class="col-md-12">
                                  <textarea
                                    class="form-control"
                                    name="message"
                                    placeholder="Message"
                                    rows="8"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div>
                              <button
                                class="btn"
                                type="submit"
                                name="submitMessage"
                             onClick={() =>{
        toggleButton()
      }} >
                                <img class="img-fl" src={btn_image} alt="img" />
                                Send message
                              </button>
                            </div>
                          {/* </form> */}
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
