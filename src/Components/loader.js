import React from "react";
import{useEffect} from "react"
 

import load from "../assets/img/loader.gif";
function Loader() {
    useEffect(() => {
        var element = document.getElementById("page-preloader");
        const timer = setTimeout(() => {
          element.style="display:none";
        }, 5000);
        return () => clearTimeout(timer);
      }, []);
  return (
    <div id="page-preloader">
      <div class="page-loading">
        {/* <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div> */}

        <img src={load} />
      </div>
    </div>
  );
}

export default Loader;
