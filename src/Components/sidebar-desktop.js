import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  let navigate = useNavigate();

  const warranty_page = () =>{
    navigate('/warranty');
  }

  const blog = () =>{
    navigate('/blog');
  }


  const about = () =>{
    navigate('/about');
  }


  const contact = () =>{
    navigate('/contact');
  }
  return (
    <div>
      <div class="wrap-banner">
        <div class="menu-banner d-xs-none">
          <div class="tiva-verticalmenu block" data-count_showmore="17">
            <div class="box-content block_content">
              <div class="verticalmenu" role="navigation">
                <ul class="menu level1">
                  <li class="item parent">
                  <a  style={{cursor:'pointer'}}class="hasicon" title="SIDE TABLE" onClick={about}>
                      <img src={require("../assets/img/home/bed.png")} alt="img" />
                      About Us
                    </a>
                   
                  </li>

                  <li class="item parent">
                  <a  style={{cursor:'pointer'}}class="hasicon" title="SIDE TABLE" onClick={contact}>
                      <img src={require("../assets/img/home/bed.png")} alt="img" />
                      Contact Us
                    </a>
                   
                  </li>

                
                  <li class="item parent">
               
                    <a  style={{cursor:'pointer'}}class="hasicon" title="SIDE TABLE" onClick={warranty_page}> 
                  
                      <img src={require("../assets/img/home/bed.png")} alt="img" />
                      Warranty
                    
                    </a>
                        
                   
                  </li>
              


                  <li class="item parent">
                  <a  style={{cursor:'pointer'}}class="hasicon" title="SIDE TABLE" onClick={blog}>

                      <img src={require("../assets/img/home/bed.png")} alt="img" />
                      Blog
                    </a>
                   
                  </li>

                   <li class="item parent">
                  <a  style={{cursor:'pointer'}} class="hasicon" title="SIDE TABLE" href="https://admin.poppyindia.com/a_assets/catelog/Catalog.pdf" target="_blank" >

                      <img src={require("../assets/img/home/bed.png")} alt="img" />
                      Catelogue
                    </a>
                   
                  </li>

                 



                  {/* <li class="item parent group">
                    <a href="#" class="hasicon" title="FI">
                      <img src={require("../assets/img/home/bed.png")} alt="img" />
                      FIREPLACE
                    </a>
                  </li> */}
                  {/* <li class="item group-category-img parent group">
                    <a href="#" class="hasicon" title="TABLE LAMP">
                      <img src={require("../assets/img/home/bed.png")} alt="img" />
                      TABLE LAMP
                    </a>
                  </li> */}
                </ul>
              </div>
              <div class="d-flex justify-content-center align-items-center header-top-left pull-left">
                <div class="toggle-nav act">
                  <div class="btnov-lines-large">
                    <i class="zmdi zmdi-close"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
