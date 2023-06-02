import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { category_list, name_list } from "../data/API";

import MenuBar from "./menubar-right";
import Sidebar from "../Components/sidebar-desktop";
import SidebarMbl from "./sidebar-mobile";
import axios from 'axios';
import logo from "../assets/img/logo.png";
import payimage from "../assets/img/footer/payment.png";
import sec_img from "../assets/img/footer/paymant.png";
import {toast} from 'react-toastify';

export default function Footer() {
const  baseurl = process.env.REACT_APP_BASE_URL;
 toast.configure();
 const [category, setCategory] = useState([]);

 const [newsmail,setnewsmail] =useState("");
console.log(newsmail)
  useEffect(() => {
 
    category_list_fun();
 
  

  }, []);
  const category_list_fun = async () => {

    let response = await category_list();
    response && setCategory(response.data.data);
   
  };

 const emailValidation = async (mail) =>
     {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!mail || regex.test(mail) === false){
            // this.setState({
            //     error: "Email is not valid"
            // });
            return false;
        }
        return true;
    }




        const insert_news = async (e) => {

         
            if(newsmail!="")
            {


const mailcheck=await emailValidation(newsmail);
if(mailcheck)
{
          const requestdata ={
              email:newsmail
            };
          
            // axios.post(baseurl+"user/newsmail", requestdata).then((res) => {
                // toast.success("Thanks For Your Response!");
 
            // });
           toast.success("Thanks For Your Response!");
           document.getElementById('tex').value = "";
          }
      
        else
        {
          toast.error("Invalide Mail Address");
        }
          }
          else
          {
             toast.error("Mail Address Should Be there!");
          }
        };

  return (
    <React.Fragment>
      <footer class="footer-one">
        <div class="inner-footer">
          <div class="container">
            <div class="footer-top col-lg-12 col-xs-12">
              <div class="row">
                <div class="tiva-html col-lg-4 col-md-12 col-xs-12">
                  <div class="block">
                    <div class="block-content">
                      <p class="logo-footer">
                        <img src={logo} style={{height:"50px"}} alt="img" />
                      </p>
                      <p class="content-logo" style={{marginTop:20}}>
                      Buy Mattress Online - India's Best Mattress Brand.
                      </p>
                    </div>
                  </div>
                  <div class="block">
                    <div class="block-content">
                      <ul>


                          {category.map((items_cat,id) =>(

                       
                        
                          <li key={id} >
                          <Link to={`/productlist/${items_cat.category_id}`} >  
                             {items_cat.category_name}
                         
                           </Link>
                          </li>

                             ))}
                       
                      </ul>
                    </div>
                  </div>
                  <div class="block">
                    <div class="block-content">
                      <p class="img-payment ">
                        <img class="img-fluid" src={sec_img} alt="img" />
                      </p>
                    </div>
                  </div>
                </div>
                <div class="tiva-html col-lg-4 col-md-6">
                  <div class="block m-top">
                    <div class="title-block">Contact Us</div>
                    <div class="block-content">
                      <div class="contact-us">
                        <div class="title-content">
                          <i class="fa fa-home" aria-hidden="true"></i>
                          <span>Address :</span>
                        </div>
                        <div class="content-contact address-contact">
                          <p>
                            S.F.No. 283/1B, Sukkampatti (Manalmedu), Thalapatti
                            (P.O.), Manmangalam (Tk), Karur - 639003, Tamil
                            Nadu, India.
                          </p>
                        </div>
                      </div>
                      <div class="contact-us">
                        <div class="title-content">
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                          <span>Email :</span>
                        </div>
                        <div class="content-contact mail-contact">
                          <p>support@poppyindia.com</p>
                        </div>
                      </div>
                      <div class="contact-us">
                        <div class="title-content">
                          <i class="fa fa-phone" aria-hidden="true"></i>
                          <span>Hotline :</span>
                        </div>
                        <div class="content-contact phone-contact">
                          <p>+91 90548 48481</p>
                        </div>
                      </div>
                      <div class="contact-us">
                        <div class="title-content">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                          <span>Opening Hours :</span>
                        </div>
                        <div class="content-contact hours-contact">
                          <p>Monday - Saturday / 09.30 AM - 06.30 PM</p>
                          <span>(Except Holidays)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tiva-modules col-lg-4 col-md-6">
                  <div class="block m-top">
                    <div class="block-content">
                      <div class="title-block">Newsletter</div>
                      <div class="sub-title">
                        Sign up to our newsletter to get the latest articles,
                        lookbooks voucher codes direct to your inbox
                      </div>
                      <div class="block-newsletter">
                        {/* <form action="#" method="post"> */}
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              name="email"
                             id="tex"
                              placeholder="Enter Your Email"
                              onChange={(event)=> setnewsmail(event.target.value)}
                            />
                            <span class="input-group-btn">
                              <button
                            
                                class="effect-btn btn btn-secondary "
                                name="submitNewsletter"
                                type="button"
                                onClick={(e) => insert_news(e)}
                              >
                                <span>subscribe</span>
                              </button>
                            </span>
                          </div>
                         
                        {/* </form> */}
                      </div>
                    </div>
                  </div>
                  <div class="block m-top1">
                    <div class="block-content">
                      <div class="social-content">
                        <div class="title-block">Follow us on</div>
                        <div id="social-block">
                          <div class="social">
                            <ul class="list-inline mb-0 justify-content-end">
                              <li class="list-inline-item mb-0">
                                <a href="https://m.facebook.com/poppymattressindia/" target="_blank">
                                  <i class="fa fa-facebook"></i>
                                </a>
                              </li>
                              
                               <li class="list-inline-item mb-0">
                                <a href="https://www.instagram.com/poppymattress" target="_blank">
                                  <i class="fa fa-instagram"></i>
                                </a>
                              </li>

                              <li class="list-inline-item mb-0">
                                <a href="https://in.linkedin.com/company/poppymattress" target="_blank">
                                  <i class="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li class="list-inline-item mb-0">
                                <a href="https://www.youtube.com/@poppymattress" target="_blank">
                                  <i class="fa fa-youtube"></i>
                                </a>
                              </li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 <div class="block m-top1">
                    <div class="block-content">
                      <div class="payment-content">
                        <div class="title-block "><a href="https://poppyindia.com/Ecom-Admin/a_assets/catelog/Catalog.pdf" target="_blank" class="download_pdf"><i class="fa fa-download" aria-hidden="true"></i> Download Poppy Mattress Catalogue</a></div>
                        
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
   
    <div class="back-to-top">
        <a href="#">
            <i class="fa fa-long-arrow-up"></i>
        </a>
    </div>
     <Sidebar />
      <SidebarMbl />
      <MenuBar />
    </React.Fragment>
  );
}
