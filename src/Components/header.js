import "./styles/header.css";

import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { category_list, name_list } from "../data/API";

import { CartContext } from "../Context/Ecomcontext";
import axios from 'axios';
import cartSection from "../Helper/Cart";
import logo from "../assets/img/logo.png";
const imgurl = process.env.REACT_APP_IMG_URL;
const  baseurl = process.env.REACT_APP_BASE_URL;
export default function Header() {


  let navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [category_ass, setCategoryass] = useState([]);

  const [searchVisble,setSerachvisible] =useState(false)
  
  const [slogans, setslogan] = useState();
  const [pid, set_product_id] = useState({});
  const [accCategoryPillow, setAccCategoryPillow] = useState([]);
  const [product_name, setproductNames] = useState([]);

  useEffect(() => {
 
    category_list_fun();
    product_category_listacc();
    name_list_function();
  

  }, []);


const buy_func = ()=> {
    window.location.href = "https://poppyindia.com/checkout"
  };
  const category_list_fun = async () => {

    let response = await category_list();
    setCategory(response.data.data);
    setCategoryass(response.data.data);
  };


  const name_list_function = async () => {

    let response = await name_list();
    setproductNames(response.data.data);

  };


   const product_category_listacc = async (id) => {


    let response = await axios
    .get(baseurl + "user/acc_category")
    .then( (result) => {

       setAccCategoryPillow(result.data.pillows);
      

    

  });
  }

const signout = () =>{


    localStorage.removeItem("userInfo");

navigate('/login');


  }


  const filter_cat=(val)=>{

  //  var element = document.getElementById('tiva-searchBox');

  //   element.style.visibility = 'hidden';
  //   element.style.opacity = 0;
  
      
    
            var result = product_name.find(obj => {
  return obj.product_name === val
            })
    var pid= result.product_id
    var pname= result.product_name;
    navigate('/productdetail/'+pname.replace(/ /g, "-"));
       }

  const [topSec, setTopsec] = useState(false);
  var cart_data = sessionStorage.getItem("poppy-cart");
  const [cart, setCart] = useContext(CartContext);

  if (cart === "" || cart === null) {
   
    total = 0;
   
  }
  else
  {
     var total = cart.reduce((prev, next) => prev + next.amount, 0);
    
    }
  const hideTopsection = (e) => {
    var threshold = 1;

    if (window.scrollY >= threshold) {
      setTopsec(true);
      e.preventDefault();
    } else if (window.scrollY <= threshold) {
      setTopsec(false);
      e.preventDefault(); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideTopsection);
    if (cart_data != null) {
      if (cart != null) {
        setCart(JSON.parse(cart_data));

         total = cart.reduce((prev,next) => prev + next.amount,0);
      }
    }
  }, []);




  function MenuAction() {
    var element = document.getElementById("acount");
    var cl_list = element.classList;
    //TODO CHECK SHOW
    if (cl_list[1] === "show") {
      element.classList.remove("show");
    }
  }

  const removeProduct = (id) =>{
    setCart( cartSection.removeCart(id));
  }





    if(localStorage.getItem('userInfo')!=null)
    {
        
var userData =  JSON.parse(localStorage.getItem('userInfo'));
    }
    else
    {
      var  userData="";
    }

  //HEADER SLOGANS

   useEffect(() => {
    
    header_slogans();
  },[]);
  
  
  const header_slogans = async () => {
    

    const result_data = await axios
    
    .get(baseurl + "user/slogans")
    
    .then(function (response) {

     const dataReturn= response.data.data[0];
      //TO SET PRODUCT BED TYPE 
   
      dataReturn ? setslogan(response.data.data[0].slogans):setslogan("");
     
   
    })
    
  }



  return (
    <React.Fragment>
      <header>
        <div className={topSec ? "top_active" : "top-section"}>
          <div class="top-first">
            <ul>
              <li>
                <a href="tel:+919054848481">
                  <i class="fa fa-phone" aria-hidden="true"></i> +91 90548 48481
                </a>
              </li>
            </ul>
          </div>
          <div class="top-second">
            <ul>
              <li>
                { slogans}
              </li>
            </ul>
          </div>
          <div class="top-third">
            <ul>

 
              <li  style={{display: userData !="" || userData ==="undefined" ? 'none' : 'block'}}>
                <NavLink to="/login">
                  <button>
                    <i class="fa fa-user" aria-hidden="true"></i>Sign In
                  </button>
                </NavLink>
              </li>

              <li style={{display: userData !="" || userData ==="undefined" ? 'none' : 'block'}}>
                <NavLink to="/register">
                  <button>
                    <i class="fa fa-user" aria-hidden="true"></i>Sign Up
                  </button>
                </NavLink>
              </li>

                <li style={{display: userData === "" ? 'none' : 'block'}}>
                
                   <b> Hello  {userData.uname}</b>
                  
                
              </li>

            </ul>
          </div>
        </div>

        <div class="header-mobile d-md-none">
          <div class="mobile hidden-md-up text-xs-center d-flex align-items-center justify-content-around">
            <div id="mobile_mainmenu" class="item-mobile-top">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div class="mobile-logo">
              <Link to="/">
                
                  <img
                    class="logo-mobile"
                    style={{ height: "40px" }}
                    src={logo}
                    alt="Poppy Mattress"
                  />
                
              </Link>
            </div>
             {/* <div class="">
             <i class="fa fa-heart"></i>
            </div> */}

            {/* <div class="mobile-menutop" data-target="#mobile-pagemenu"> */}
            <div className="nav-items">
              
            <i class="fa fa-search fa-lg" aria-hidden="true" onClick={()=>{setSerachvisible(!searchVisble)}}></i>
            
        
            <div class="header-cart tiva-toggle-btn">
                    {/* <span class="cart-products-count">{cart_count !== 0 ? cart_count: 0}</span> */}
                    <Link to="/cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>

                    {cart.length !== 0 && ( 
                      <span class="cart-products-count topCartCount" style={{position:"absolute"}}>{cart.length}</span>
                    )}

                    
                  </div>
                  <Link to="/profile"> <i class="fa fa-user fa-lg" aria-hidden="true"></i></Link>

          <a href="tel:+91 90548 48481" className="phone-icon">  <div class="">
             <i class="fa fa-phone" style={{fontSize: "20px"}}></i>
            </div></a>
            
            </div>

          </div>


          {searchVisble  && <div  
             
          id="search_widget"
              style={{  right: "0" }}
              class="d-flex  "
              >
          <form method="get" action="#" style={{width:"100%",background:"#ffffff",marginRight:"0px",marginTop:30}}>
                <span
                  role="status"
                  aria-live="polite"
                  class="ui-helper-hidden-accessible"
                ></span>
                <input
                  type="text"
                  name="s"                 
                  placeholder="Search"
                  class="ui-autocomplete-input"
                  autocomplete="off"
                  list="data"
                  onChange={(event)=>{filter_cat(event.target.value)}} 
                  style={{background:"#ffffff"}}
                />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>

                <datalist id="data">
    
                {product_name.map(items_cat =>(
      <option value={items_cat.product_name} > </option>
                ))}
      
  
  </datalist>


              </form>
          </div>}

          
        </div>


        

        <div class="header-top d-xs-none">
          <div class="row margin-0">
            <div class="d-flex icon-menu align-items-center justify-content-center">
              <i class="fa fa-bars" aria-hidden="true" id="icon-menu"></i>
            </div>
            <div class="main-menu d-flex align-items-center justify-content-start navbar-expand-md">
              <div class="menu navbar collapse navbar-collapse">
                <ul class="menu-top navbar-nav">
                  <NavLink to="/">
                    <li class="nav-link">
                      <a href="#" class="parent">
                        Home
                      </a>
                    </li>
                  </NavLink>
                  <li>
                    <a href="#" class="parent">
                      Mattress
                    </a>
                    <div class="dropdown-menu">
                      <ul>

                     
                         {category.map(items_cat =>(

                       
                        
                          <li class="item">
                          <Link to={`/productlist/${items_cat.category_name.replace(/ /g, "-")}`} >  
                        
                             {items_cat.category_name}
                         
                           </Link>
                          </li>

                             ))}
                
                    </ul>
                    </div>
                  </li>
{/* <NavLink to="/accessories/all"> */}
                      <li >
                    <a href="#" class="parent">
                      Accessories
                    </a>
                   <div class="dropdown-menu">
                      <ul>

                     
                      {accCategoryPillow.map((items_cat ,index)=>(

                       
                        
                          <li class="item">
                          <Link to={`/accessories/${items_cat.sub_serious}`} >  
                             {items_cat.sub_serious}
                         
                           </Link>
                     
                          </li>

                             ))}

                               <li class="item">
                          <Link to={`/accessories/0`} >  
                             MATTRESS PROTECTER
                         
                           </Link>
                     
                          </li>
                
                    </ul>
                    </div>
                  </li> 
{/* </NavLink> */}

                 

                  {/* <Link to="/waranty">
                    <li>
                      <a href="contact.html" class="parent">
                        Warranty
                      </a>
                    </li>fa
                  </Link> */}
                  {/* <Link to="/productlist/all">
                    <li>
                      <a href="contact.html" class="parent">
                        Products
                      </a>
                    </li>
                  </Link> */}
                </ul>
              </div>
            </div>

            <div class="flex-2 d-flex align-items-center justify-content-center">
              <div id="logo">
                <Link to="/">
                 
                    <img style={{ height: "70px" }} src={logo} alt="Poppy Mattress" />
                 
                </Link>
              </div>
            </div>

            <div
              id="search_widget"
              style={{ position: "absolute", right: "0" }}
              class="d-flex align-items-center justify-content-end"
            >
              {/* <div class="search-header-top d-flex align-items-center justify-content-center">
                        <i class="search fa fa-search"></i>
                    </div> */}
              <form method="get" action="#">
                <span
                  role="status"
                  aria-live="polite"
                  class="ui-helper-hidden-accessible"
                ></span>
                <input
                  type="text"
                  name="s"
                 
                  placeholder="Search "
                  class="ui-autocomplete-input"
                  autocomplete="off"
                  list="data"
           

                  onChange={(event)=>{filter_cat(event.target.value)}} 
                />
                <button type="submit">
                  <i class="fa fa-search"></i>
                </button>

                <datalist id="data">
    
                {product_name.map(items_cat =>(
      <option value={items_cat.product_name} > </option>
                ))}
      
  
  </datalist>


              </form>

              <div class="desktop_cart d-flex align-items-center">
                <Link to="/list">
                  <a>
                    <i class="fa fa-heart"></i>
                  </a>
                </Link>
              </div>

              <div id="block_myaccount_infos">
                <div class="myaccount-title hidden-sm-down dropdown d-flex align-items-center justify-content-center">
                  <a href="#acount" data-toggle="collapse" class="acount">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </a>
                </div>
                <div id="acount" class="collapse">
                  <div class="account-list-content">
                    <div>
                      <Link to="/profile">
                        <a
                          onClick={MenuAction}
                          class="login"
                          href="user-acount.html"
                          rel="nofollow"
                          title="Log in to your customer account"
                        >
                          <i class="fa fa-cog"></i>
                          <span>My Orders</span>
                        </a>
                      </Link>
                    </div>

                    {/* <div>
                      <Link to="/checkout">
                        <a
                          onClick={MenuAction}
                          class="check-out"
                          href="product-checkout.html"
                          rel="nofollow"
                          title="Checkout"
                        >
                          <i class="fa fa-check" aria-hidden="true"></i>
                          <span>Checkout</span>
                        </a>
                      </Link>
                    </div> */}
                    {/* <div>
                      <Link to="/list">
                        <a
                          onClick={MenuAction}
                          href="user-wishlist.html"
                          title="My Wishlists"
                        >
                          <i class="fa fa-heart"></i>My Wishlists
                        </a>
                      </Link>
                    </div> */}

                    {/* <div>
                      <Link to="/productdetail">
                        <a
                          onClick={MenuAction}
                          href="user-wishlist.html"
                          title="My Wishlists"
                        >
                          <i class="fa fa-file"></i>Product Details
                        </a>
                      </Link>
                    </div> */}
                    <div style={{display: userData === "" ? 'none' : 'block'}}>
                     
                        <a
                          onClick={signout}
                          href="#"
                          title="My Wishlists"
                        >
                          <i class="fa fa-sign-out"></i>Sign Out
                        </a>
                   
                    </div>
                    {/* <div>
                      <Link to="/blogdetails">
                        <a
                          onClick={MenuAction}
                          href="user-wishlist.html"
                          title="My Wishlists"
                        >
                          <i class="fa fa-file"></i>Blog Details
                        </a>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="desktop_cart d-flex align-items-center">
                <div class="blockcart block-cart cart-preview tiva-toggle">
                  <div class="header-cart tiva-toggle-btn">
                    {/* <span class="cart-products-count">{cart_count !== 0 ? cart_count: 0}</span> */}

                    {cart.length !== 0 && (
                      <span class="cart-products-count">{cart.length}</span>
                    )}

                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </div>
                  {cart.length !== 0 && (
                    <div class="dropdown-content">
                      <div class="cart-content">
                        <table>
                          <tbody>
                            {cart.map(cartval =>(


//  {var base ="http://poppyindia.com/erp/assets/images/"}

//  var original_image=base+Product_Details.product_imageurl;


                                 <tr>
                                 <td class="product-image">
                                   <a href="product-detail.html">
                                     <img
                                       src={imgurl+cartval.image}
                                       alt="Product"
                                     />
                                   </a>
                                 </td>
                                 <td>
                                   <div class="product-name">
                                     <a href="product-detail.html">
                                       {cartval.title}
                                     </a>
                                   </div>
                                   <div>
                                     {cartval.product_count} x <span class="product-price">₹ {cartval.amount}</span>
                                   </div>

                                   <div>
                                     {cartval.bed_type+" - "+cartval.dimension+" - "+cartval.thickness}
                                   </div>

                            


                                   {/* <div>
                                     {cartval.product_count} x <span class="product-price">₹ {cartval.amount}</span>
                                   </div> */}

                                 </td>
                                 <td class="action">
                                   <a class="remove" style={{pointer:"cursor"}} onClick={()=>removeProduct(cartval.product_id)} >
                                     <i
                                       class="fa fa-trash-o"
                                       aria-hidden="true"
                                     ></i>
                                   </a>
                                 </td>
                               </tr>
                            ))}
                           
                          
                            <tr class="total">
                              <td colspan="2">Total:</td>
                              <td>₹ {total}</td>
                            </tr>

                            <tr>
                              <td
                                colspan="3"
                                class="d-flex justify-content-center"
                              >
                                <div class="cart-button">
                                <Link to="/cart">
                                    View Cart
                                 </Link>  
                                   <Link to="/checkout">  
                                    Checkout
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </header>



         <div id="tiva-searchBox" class="d-flex align-items-center text-center active">
        <div class="container">
            <span class="tiva-seachBoxClose">
                <i class="zmdi zmdi-close"></i>
            </span>
            <div class="tiva-seachBoxInner">
                <div class="title-search">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <span>Search </span>
                </div>
                {/* <div class="description">
                    Find your product with fast search. Enter some keyword such as dress, shirts, shoes etc. Or can search by product sku.
                </div> */}
                <div id="search" class="search-widget d-flex justify-content-center">
                    <form method="get" action="#">
                        <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
                        <input type="text" name="s"  placeholder="Search" class="ui-autocomplete-input"   autocomplete="off"
                  list="data"
           

                  onChange={(event)=>{filter_cat(event.target.value)}} />


                              <datalist id="data">
    
                {product_name.map(items_cat =>(
                 <option value={items_cat.product_name} > </option>
                ))}
      
  
                </datalist>
                


                        {/* <button type="button">
                            Search
                        </button> */}
                    </form>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}

