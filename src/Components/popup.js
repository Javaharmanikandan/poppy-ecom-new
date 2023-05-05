import "./styles/popup.css";

import React, { useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

const imgurl = process.env.REACT_APP_IMG_URL;
const baseurl = process.env.REACT_APP_BASE_URL;

function Popup() {
  
  let navigate = useNavigate();
  
    const [popupstate, setPopupstate] = useState(true);

  
  const [popup_image, setpopup] = useState("pr10.jpg");
  
 const [url_set, seturl] = useState("");
    
  useEffect(() => {
    
    popup_api();
  },[]);
  
  
  const popup_api = async () => {
    

    const result_data = await axios
    
    .get(baseurl + "user/popup")
    
    .then(function (response) {
      
      //TO SET PRODUCT BED TYPE 
      
      setpopup(response.data.data[0].image)
      seturl(response.data.data[0].url)
   
    })
    
  }

  var url = imgurl + popup_image;
    var divImage = {
    backgroundImage : "url(" + url + ")" 
  };




    const navigation = async () => {
    setPopupstate(false)
 navigate(url_set);
    
  }

  return (
    <>

      {
          popupstate? <div className="popup-container" >
          <div class="container conclass" >
            <div class="cookiesContent" id="cookiesPopup" style={divImage}>
              <button onClick={()=>setPopupstate(false)} class="close">✖</button>
              {/* <img
                src={imgurl+popup_image}
                alt="cookies-img"
              />
              <p>
                Offer Today
              </p> */}
              <button class="accept" onClick={() =>{
        navigation()
      }}>Explore</button>
            </div>
          </div>
          </div> : null
      }
    
    </>
  );
}

export default Popup;
