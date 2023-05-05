import Footer from "../Components/footer";
import Header from "../Components/header";
import Loader from "../Components/loader";
import React from "react";

const imgurl = process.env.REACT_APP_IMG_URL;
function about_us() {
  return (
    <>
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
                        <span>Our Story</span>
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </nav>
            <div id="main">
              <div class="page-home">
                <div class="container">
                  <div class="about-us-content">
                     <h3 class="page-subheading extra_about">Our Story</h3>
                    <div class="row">
                      <div class="col-lg-12 col-md-6 col-sm-6 right">
                      <center>  <a href="#">
                          <img
                            class="img-fluid"
                            src={imgurl+"factory.jpg"}
                            alt="Best mattress manufacturing in Tamilnadu - Poppy"
                          />
                        </a></center>
                      </div>
                      <div class="col-lg-12 col-md-6 col-sm-6 left">
                   <center>   <div class="cms-block f-right paragraph_class" >
                         
                          <p > 
                           A vision simply starts your journey on the road to success. Our humble beginnings as a brand began in 2012 when we started an SSI unit manufacturing coir mattresses. We were novices in this industry of established giants and we learned a little more through our persistence with our goals. In 2014, we climbed the first step upward as we expanded to manufacturing spring and Foam Mattresses. Our manufacturing facilities were slowly expanding to accommodate the market demands.</p>

<p>  We owe our brand recall to placing customer satisfaction as our primary measure of success versus ROIs and KPIs. The best-laid plans can become nothing if the customer is not king. Uncompromised quality is the second most important factor to which we owe our growth.</p>

<p>  The simple principles have served us well and in 2018 we laid the foundation stone for a modern, manufacturing facility in Karur. In 2019, we had the privilege of opening a 70,000 Sq.ft facility, and our current mattress production volume per day ranges around 500 pieces. In the coming years, we will reach a production capacity of 800 mattresses per day. Our goal for our brand is to make it a household name pan India and to create generations of satisfied customers.</p>

<p>  Our guarantee to a customer today is 100% quality and a product mindful of your comfort all day, every day.</p>
                          
                  
                          {/* <a>
                            <img
                              class="img-fluid"
                              src={require("../assets/img/other/4.png")}
                              alt="#"
                            />
                            <span>Mr. kwang shang - CEO</span>
                          </a> */}
                        </div></center>  
                      </div>
                      {/* <div class="col-lg-6 col-md-6 col-sm-6 right">
                        <div class="cms-block f-left">
                          <h3 class="page-subheading">Why Poppy</h3>
                          <p>
                          We wanted to tell you that if you are not a believer in falling at the right moment, then our mattress will be your myth breaker. Because our beds are convenient for various reasons. Here we are just being picky about it
                          </p>
                      
                        </div>
                      </div> */}
                      {/* <div class="col-lg-6 col-md-6 col-sm-6 left">
                        <a href="#">
                          <img
                            class="img-fluid"
                            src={require("../assets/img/other/2.jpg")}
                            alt="#"
                          />
                        </a>
                      </div> */}
                      {/* <div class="col-lg-6 col-md-6 col-sm-6 right">
                        <a href="#">
                          <img
                            class="img-fluid"
                            src={require("../assets/img/other/3.jpg")}
                            alt="#"
                          />
                        </a>
                      </div> */}
                      {/* <div class="col-lg-6 col-md-6 col-sm-6 left">
                        <div class="cms-block f-right">
                          <h3 class="page-subheading no-before">
                            MEET OUR TEAM
                          </h3>
                          <div class="testimonials owl-carousel owl-theme owl-loaded owl-drag">
                            <div class="item">
                              
                              <p>
                               We have spent sleepless nights deciding how the mattresses are contributing to the disturbed sleep. And we figured that there could be an extremely odd number of reasons, but our products can be the only solution. We hand-pick the fabric, filling, springs, and any other ingredient that's part of mattresses, pillows, and accessories. We assure healthy sleep every night
                              </p>
                            </div>
               
                   
            
                          </div>
                
                        </div>
                      </div> */}
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

export default about_us;
