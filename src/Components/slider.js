import "./styles/slider.css";

import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

const baseurl = process.env.REACT_APP_BASE_URL;

const imgurl = process.env.REACT_APP_IMG_URL;
function Slider() {
const [displaypro1, setdisplay1] = useState(false);
const [displaypro2, setdisplay2] = useState(false);
const [displaypro3, setdisplay3] = useState(false);
const [displaypro7, setdisplay7] = useState(false);
const [displaypro8, setdisplay8] = useState(false);
const myfunction = (e,da) =>
{

     var width = window.screen.width;
        if(window.innerWidth < 765){


         switch(da) {
  case 1:
   setdisplay1(true)
   setdisplay2(false)
   setdisplay3(false)
   setdisplay7(false)
   setdisplay8(false)
    break;
  case 2:
    setdisplay1(false)
   setdisplay2(true)
   setdisplay3(false)
   setdisplay7(false)
   setdisplay8(false)
    break;
  case 3:
    setdisplay1(false)
   setdisplay2(false)
   setdisplay3(true)
   setdisplay7(false)
   setdisplay8(false)
    break;
 case 7:
   setdisplay1(false)
   setdisplay2(false)
   setdisplay3(false)
   setdisplay7(true)
   setdisplay8(false)
    break;
 case 8:
   setdisplay1(false)
   setdisplay2(false)
   setdisplay3(false)
   setdisplay7(false)
   setdisplay8(true)
    break;
  default:
  setdisplay1(false)
   setdisplay2(false)
   setdisplay3(false)
   setdisplay7(false)
   setdisplay8(false)
}


          

           
        } else {
          
setdisplay1(true)
   setdisplay2(true)
   setdisplay3(true)
   setdisplay7(true)
   setdisplay8(true)

        }
      
}

  useEffect(() => {
    

    
    loadScript("assests/libs/owl-carousel/owl.carousel.min.js"); // PS. in order to import path out side your src folder and inside public folder use ${process.env.PUBLIC_URL}/js/revslider.js
    loadScript("assests/js/theme.js");
    scrollMove();
  }, []);
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", function () {
        resolve();
      });
      script.addEventListener("error", function (e) {
        reject(e);
      });

      document.body.appendChild(script);
    });
  }

  function scrollMove(){
    var slid = document.createElement("cus-sli");

    slid.scrollBy(0,50);
  }


  return (
    <>
      <div>
        <div class="section spacing-10 groupbanner-special">
          {/* <div class="title-block">
          <span>Poppy India</span>
          <span> Gateway </span>
          <span>
            To Better Sleep <br />
            "A well spent day brings happy sleep"
          </span>
        </div> */}

          <div class="row">
            <div class="lookbook owl-carousel owl-theme owl-loaded owl-drag">


                          <div class="item">
                <div class="tiva-lookbook default">
                  <div class="items col-lg-12 col-sm-12 col-xs-12">
                    <div class="tiva-content-lookbook">
                      <img
                        class="img-fluid img-responsive"
                        src={require("../assets/img/slider/c.jpg")}
                        alt="Poppy comfort mattress"
                      />

                      <div class="item-lookbook item7">
                        <span class="number-lookbook heart colorheart" onClick={(e) => myfunction(e,7)}>+</span>
                        <div class="content-lookbook" style={{display:displaypro7 ? "block" : "none"}}>
                          <div class="main-lookbook d-flex align-items-center">
                            <div class="item-thumb">
                             <Link to={`/productdetail/SELENE P.T`} > <a href="#">
                                <img
                                  src={imgurl+"spta.jpg"}
                                  alt="Poppy Mattress SELENE P.T"
                                />
                              </a></Link> 
                            </div>
                            <div class="content-bottom">
                              <div class="item-title">
                             <Link to={`/productdetail/SELENE P.T`} >   <a href="#">
                                  SELENE P.T
                                </a></Link> 
                              </div>
                              <div class="rating">
                                <div class="star-content">
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                </div>
                              </div>
                             
                           <Link to={`/productdetail/SELENE P.T`} >   <div class="readmore">
                                <a href="#">View Product</a>
                              </div></Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div class="item-lookbook item8">
                        <span class="number-lookbook" onClick={(e) => myfunction(e,8)}>+</span>
                        <div class="content-lookbook" style={{display:displaypro8 ? "block" : "none"}}>
                          <div class="main-lookbook d-flex align-items-center">
                            <div class="item-thumb">
                              <Link to={`/productdetail/Grandeur-B.T`} > <a href="#">
                                 <img
                                 src={imgurl+"GCAB.jpg"}
                                  alt="lorem-ipsum-dolor-sit-amet"
                                />
                              </a></Link>
                            </div>
                            <div class="content-bottom">
                              <div class="item-title">
                                <a href="#">
                                Grandeur B.T
                                </a>
                              </div>
                              <div class="rating">
                                <div class="star-content">
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                </div>
                              </div>
                              
                           <Link to={`/productdetail/Grandeur-B.T`} >   <div class="readmore">
                                <a href="#">View Product</a>
                              </div></Link>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div class="info-lookbook"></div>
                  </div>
                </div>
              </div>

              
              <div class="item">
                <div class="tiva-lookbook defaul">
                  <div class="items col-lg-12 col-sm-12 col-xs-12">
                    <div class="tiva-content-lookbook">
                      <img
                        class="img-fluid img-responsive"
                        src={require("../assets/img/slider/a.jpg")}
                        alt="Best mattress for summer in India"
                      />

                      <div class="item-lookbook item1 ">
                        <span class="number-lookbook heart colorheart "  onClick={(e) => myfunction(e,1)}>+</span>
                        <div class="content-lookbook lookbook-custom" style={{display:displaypro1 ? "block" : "none"}}>
                          <div class="main-lookbook d-flex align-items-center">
                            <div class="item-thumb">
                                  <Link to={`/productdetail/Classique-S.PT-&-T.T`} >
                              <a href="#">
                                <img
                                  src={imgurl+"cpta.jpg"}
                                  alt="Poppy Mattress Classique-S.PT-&-T.T"
                                  />
                                   </a>
                                  </Link>
                             
                            </div>
                            <div class="content-bottom">
                              <div class="item-title">
                                <Link to={`/productdetail/Classique-S.PT-&-T.T`} > <a href="#">
                                  Classique S.PT & T.T
                                </a></Link> 
                              </div>
                              <div class="rating">
                                <div class="star-content">
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                </div>
                              </div>
                              {/* <div class="item-price">₹ 52.00</div> */}
                             <Link to={`/productdetail/Classique-S.PT-&-T.T`} >   <div class="readmore">
                            <a href="#">View Product</a>
                              </div></Link>  
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="item-lookbook item2">
                        <span class="number-lookbook heart colorheart" onClick={(e) => myfunction(e,2)}>+</span>
                        <div class="content-lookbook" style={{display:displaypro2 ? "block" : "none"}}>
                          <div class="main-lookbook d-flex align-items-center">
                            <div class="item-thumb">
                              <Link to={`/productdetail/Classique-S.PT-&-T.T`} >
                              <a href="#">
                                <img
                                src={imgurl+"cpta.jpg"}
                                  alt="Poppy Mattress Classique-S.PT-&-T.T"
                                />
                                </a>
                                </Link>
                            </div>
                            <div class="content-bottom">
                             <Link to={`/productdetail/Classique-S.PT-&-T.T`} >   <div class="item-title">
                              <a href="#">
                                   Classique S.PT & T.T
                                </a>
                              </div></Link> 
                              <div class="rating">
                                <div class="star-content">
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                </div>
                              </div>
                              {/* <div class="item-price">₹ 450</div> */}
                           <Link to={`/productdetail/Classique-S.PT-&-T.T`} >   <div class="readmore">
                                <a href="#">View Product</a>
                              </div></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="tiva-lookbook default">
                  <div class="items col-lg-12 col-sm-12 col-xs-12">
                    <div class="tiva-content-lookbook">
                    <img
                        class="img-fluid img-responsive"
                        src={require("../assets/img/slider/b.jpg")}
                        alt="Poppy Luxury mattress brand in India "
                      />

                      <div class="item-lookbook item3">
                        <span class="number-lookbook heart colorheart" onClick={(e) => myfunction(e,3)}>+</span>
                        <div class="content-lookbook" style={{display:displaypro3 ? "block" : "none"}}>
                          <div class="main-lookbook d-flex align-items-center">
                            <div class="item-thumb">
                            <Link to={`/productdetail/3`}> <a href="#">
                                <img
                                  src={imgurl+"GMCA (2).jpg"}
                                  alt="Poppy Mattress  The Grand Master D.T"
                                />
                              </a></Link>
                            </div>
                            <div class="content-bottom">
                              <div class="item-title">
                                <Link to={`/productdetail/The-Grand-Master-D.T`} >  <a href="#">
                                The Grand Master D.T
                                </a></Link>
                              </div>
                              <div class="rating">
                                <div class="star-content">
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                  <div class="star"></div>
                                </div>
                              </div>
                             
                             <Link to={`/productdetail/The-Grand-Master-D.T`} >   <div class="readmore">
                                <a href="#">View Product</a>
                              </div></Link>
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

      <div className="cus-sli-container" style={{display:'none !important'}}>
        <div id="cus-sli" className="cus-sli-chk ">
          <div className="cus-sli-wrapper">
              
                            
                                <img
                                  src={imgurl+"cpta.jpg"}
                                  alt="Poppy Mattress Classique-S.PT-&-T.T"
                                  />
                                   

            <div class="content-bottom">
              <div class="item-title">
              <Link to={`/productdetail/Classique-S.PT-&-T.T`} > <a href="#"> Classique S.PT & T.T</a></Link> 
              </div>
              <div class="rating">
                <div class="star-content">
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                </div>
              </div>
              
             <Link to={`/productdetail/Classique-S.PT-&-T.T`} >   <div class="readmore">
                 <a href="#">View Product</a>
              </div></Link>
            </div>
          </div>


          <div className="cus-sli-wrapper">
               <img
                                src={imgurl+"GMCA (2).jpg"}
                                  alt="Poppy Mattress The Grand Master D.T"
                                  />

            <div class="content-bottom">
              <div class="item-title">
               <Link to={`/productdetail/The-Grand-Master-D.T`} >   <a href="#">The Grand Master D.T</a></Link>
              </div>
              <div class="rating">
                <div class="star-content">
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                </div>
              </div>
              
              <Link to={`/productdetail/The-Grand-Master-D.T`} >     <div class="readmore">
                <a href="#">View Product</a>
              </div></Link>
            </div>
          </div>
          <div className="cus-sli-wrapper">
                <img
                                 src={imgurl+"GCAB.jpg"}
                                  alt="Poppy Mattress Grandeur B.T"
                                />

            <div class="content-bottom">
              <div class="item-title">
                <Link to={`/productdetail/Grandeur-B.T`} >   <a href="#">Grandeur B.T </a></Link>
              </div>
              <div class="rating">
                <div class="star-content">
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                  <div class="star"></div>
                </div>
              </div>
             
           <Link to={`/productdetail/Grandeur B.T`} >     <div class="readmore">
                <a href="#">View Product</a>
              </div></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
