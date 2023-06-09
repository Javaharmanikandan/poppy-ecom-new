import React from "react";
import { useNavigate } from "react-router-dom";

function SidebarMbl() {


    
    if(localStorage.getItem('userInfo')!=null)
    {
        
var userData =  JSON.parse(localStorage.getItem('userInfo'));
    }
    else
    {
      var  userData="";
    }

    
  let navigate = useNavigate();

  const warranty_page = () =>{
    navigate('/warranty');
  }

  const wishlist = () =>{
    navigate('/list');
  }

  

  const blog = () =>{
    navigate('/blog');
  }

  const about = () =>{
    navigate('/about');
  }

   const Accessories = () =>{
    navigate('/accessories/all');
  }

  const Mattress = () =>{
    navigate('/productlist/all');
  }

  

  const contact = () =>{
    navigate('/contact');
    }
      const signup = () =>{
    navigate('/register');
    }
      const signin = () =>{
    navigate('/login');
    }

const signout = () =>{


    localStorage.removeItem("userInfo");

navigate('/login');

  }

    return (
        <div class="mobile-top-menu d-md-none">
        <button type="button" class="close" aria-label="Close">
            <i class="zmdi zmdi-close"></i>
        </button>
        <div class="tiva-verticalmenu block" data-count_showmore="17">
            <div class="box-content block-content">
                <div class="verticalmenu" role="navigation">
                    <ul class="menu level1">


                    <li class="item ">
                  <a  style={{cursor:'pointer'}} class="hasicon" title="SIDE TABLE" onClick={Mattress} target="_blank" >

                      <i class="fa fa-bookmark-o" style={{marginRight:"15px"}}></i> 
                    
                      Mattress
                    </a>
                   
                  </li>

                      
                    <li class="item ">
                  <a  style={{cursor:'pointer'}} class="hasicon" title="SIDE TABLE" onClick={Accessories} target="_blank" >

                      <i class="fa fa-bookmark-o" style={{marginRight:"15px"}}></i> 
                    
                      Accessories
                    </a>
                   
                  </li>
                       
                        <li class="item">
                               <a  style={{cursor:'pointer'}}class="hasicon" title="SIDE TABLE" onClick={about}>
                    <i class="fa fa-info-circle"  style={{marginRight:"15px"}}></i> 
                      About Us
                    </a>
                        </li>
                        <li class="item">
                                <a  style={{cursor:'pointer'}}class="hasicon" title="SIDE TABLE" onClick={contact}>
                      <i class="fa fa-address-book"  style={{marginRight:"15px"}}></i> 
                      Contact Us
                    </a>
                        </li>
                        <li class="item">
                                <a  style={{cursor:'pointer'}}class="hasicon" title="SIDE TABLE" onClick={warranty_page}> 
                  
                      <i class="fa fa-check-circle-o" style={{marginRight:"15px"}}></i> 
                      Warranty
                    
                    </a>
                            </li>
                            

<li class="item">
                                    <a  style={{cursor:'pointer'}}class="hasicon" title="SIDE TABLE" onClick={blog}>
 
                       <i class="fa fa-commenting-o" style={{marginRight:"15px"}}></i> 
                      Blog
                                </a>
                                </li>

                                  <li class="item ">
                  <a  style={{cursor:'pointer'}} class="hasicon" title="SIDE TABLE" href="https://admin.poppyindia.com/a_assets/catelog/Catalog.pdf" target="_blank" >
<i class="fa fa-book" aria-hidden="true" style={{marginRight:"15px"}}></i>
                      
                      Catelogue
                    </a>
                   
                  </li>

                    <li class="item ">
                  <a  style={{cursor:'pointer'}} class="hasicon" title="SIDE TABLE" onClick={wishlist}>

                      <i class="fa fa-heart" style={{marginRight:"15px"}}></i>
                      Wishlist
                    </a>
                   
                  </li>

                    <li class="item "  style={{display: userData !="" || userData ==="undefined" ? 'none' : 'block'}}>
                  <a  style={{cursor:'pointer'}} class="hasicon" title="SIDE TABLE" onClick={signup}>

                      <i class="fa fa-sign-in" style={{marginRight:"15px"}}></i>
                      Signup 
                    </a>
                   
                  </li>

                    <li class="item "  style={{display: userData !="" || userData ==="undefined" ? 'none' : 'block'}}>
                  <a  style={{cursor:'pointer'}} class="hasicon" title="SIDE TABLE" onClick={signin}>

                      <i class="fa fa-sign-in" style={{marginRight:"15px"}}></i>
                      Signin
                    </a>
                   
                  </li>


                    <li class="item " style={{display: userData === "" ? 'none' : 'block'}}>
                  <a  style={{cursor:'pointer'}} class="hasicon" title="SIDE TABLE" onClick={signout}>

                      <i class="fa fa-sign-out" style={{marginRight:"15px"}}></i>
                      Signout
                    </a>
                   
                  </li>






                    </ul>
                </div>
            </div>
        </div>

    </div>

    )
}

export default SidebarMbl
