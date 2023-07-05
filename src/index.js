import "./index.css";
import "./style/tailwind.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "./pages/about_us";
import Accessories from "./pages/Accessories"
import AccessoriesDetail from "./pages/AccessoriesDetail";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import BottomMenu from "./Components/Bottom-menu";
import Cart from "./pages/cart";
import { CartProvider } from './Context/Ecomcontext';
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Empty_cart from "./pages/empty_cart";
import Filter from "./pages/Filter";
import Footer from "./Components/footer";
import Header from "./Components/header";
// import Login from './pages/login';
// import Register from './pages/register';
import Home from "./pages/home";
import LoginSignUp from "./pages/login_signup";
import NotFound from "./pages/Pagenotfound";
import Order_track from "./Components/order_track";
import Popup from "./Components/popup";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/Products";
import React from "react";
import ReactDOM from "react-dom";
import Redirect_function from "./Components/redirect"
import UserProfile from "./pages/UserProfile";
import Waranty from "./pages/warranty";
import WishList from "./pages/WishList";
import Index from "./new-pages/Home-page/Index";
import New_Details from "./new-pages/product-page/Product_Index";
import Product_Filter from "./new-pages/filter-page/filter";
import Assists from './pages/assists';
import SideCart from "./Components/UI/SideCart";
import CommonContextProvider from "./Context/CommonContext";

document.title = "Poppy India";

const WithHeader = () => {


  // console.log = function () {};

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/New-home" element={<Index />}></Route>
        <Route path="/New-product" element={<New_Details />}></Route>
        <Route path="/New-filter" element={<Product_Filter />}></Route>

        <Route path="/productlist/:category_str" element={<ProductList />}></Route>
        <Route path="/accessories/:id" element={<Accessories />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/assists" element={<Assists />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        {/* <Route path="/checkoutNew" element={<NewCheckOutPage />}  ></Route> */}
        <Route path="/checkout" element={<Checkout />}  ></Route>

        <Route path="/order_track/:id" element={<Order_track />}></Route>

        {/* <Route path="/edit/:id"></Route> */}
        <Route path="/productdetail/:product_name_param" element={<ProductDetail />} />
        <Route path="/accessoriesdetail/:acc_name" element={<AccessoriesDetail />} />
        <Route path="/redirect/:id" element={<Redirect_function />} />
        <Route path="/empty_cart" element={<Empty_cart />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/list" element={<WishList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/warranty" element={<Waranty />} />
        <Route path="/filt" element={<Filter />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <BottomMenu />
      <SideCart />
      <Popup />
      <Footer />
    </>);
};

const ErrorPage = () => {

  // console.log = function () {};


  return (
    <>
      <Routes>
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

ReactDOM.render(
  <CartProvider>
    <CommonContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginSignUp data={"login"} />}></Route>
          <Route path="/register" element={<LoginSignUp data={"register"} />} />
          <Route path="/*" element={<WithHeader />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </CommonContextProvider>
  </CartProvider>,
  document.getElementById("root")
);
