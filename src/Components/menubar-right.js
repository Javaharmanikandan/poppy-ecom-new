import { Link } from 'react-router-dom'
import React from 'react'

function MenuBar() {

   function handleClick(){
      var element = document.getElementById("mobile-pagemenu");
      element.classList.remove('mobile-boxpage','d-flex','hidden-md-up','active','d-md-none','active-pagemenu');
      element.classList.add('mobile-boxpage','d-flex','hidden-md-up','active','d-md-none');
      }
    return (
        <div id="mobile-pagemenu" class="mobile-boxpage d-flex hidden-md-up active d-md-none">
        <div class="content-boxpage col">
            <div class="box-header d-flex justify-content-between align-items-center">
                <div class="title-box">Menu</div>
                <div class="close-box">Close</div>
            </div>
            <div class="box-content">
                <nav>
                    <div id="megamenu" class="clearfix">
                        <ul class="menu level1">
                             <li class="item has-sub">
                                <Link to="/">
                                <a  title="Contact us" onClick={handleClick}>
                                    <i class="fa fa-home" aria-hidden="true"></i>Home</a>
                                    </Link>
                            </li>
                           
                           
                            <li class="item has-sub">
                                <Link to="/register">
                                <a href="" title="Contact us" onClick={handleClick}>
                                    <i class="fa fa-user" aria-hidden="true"></i>Register</a>
                                    </Link>
                            </li>
                            <li class="item has-sub">
                                <Link to="/login">
                                <a href="" title="Contact us" onClick={handleClick}>
                                    <i class="fa fa-sign-in" aria-hidden="true"></i>Login</a>
                                    </Link>
                            </li>

                              <li class="item has-sub">
                                <Link to="/login">
                                <a href="" title="Contact us" onClick={handleClick}>
                                    <i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
                                    </Link>
                            </li>
                           
                           
                           
                           
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>

    )
}

export default MenuBar
