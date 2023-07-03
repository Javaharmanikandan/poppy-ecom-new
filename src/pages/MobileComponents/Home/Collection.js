import React from 'react';
import "./../styles/collection.css";

import collection_img_1 from "./../images/bf1.webp";
import collection_img_2 from "./../images/mf1.webp";
import collection_img_3 from "./../images/sf1.webp";
import collection_img_4 from "./../images/lf1.webp";
import collection_img_5 from "./../images/pf1.webp";
import collection_img_6 from "./../images/cf1.webp";
import youtube from "./../images/yf1.webp";


import india from "./../images/india.png";
import ecology from "./../images/ecology.png";
import costumer from "./../images/costumer.png";
import warranty from "./../images/warranty.png";
import { useNavigate } from 'react-router-dom';
/*icon-import*/
/*--- -import Waranty from '../../warranty';
--*/
const baseurl = process.env.REACT_APP_BASE_URL;

const imgurl = process.env.REACT_APP_IMG_URL;


function Collections(props) {

    
  const redirect_Data=(url)=>{
    // window.location.href = url
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  }

    const navigate = useNavigate();
    return (
        
        <div className='collection-container'>
            <h2>Shop By Series</h2>
            <div className='collections'>
            <div className='collection' onClick={()=>navigate('/productlist/Premium-Series')}>
            <img src={collection_img_1} className="collection_img " alt="collection_image" />
            <h5 className='collection-title'>Premium Series</h5>
            <p className='collection-description'>Mattresses infused <br></br>with Bonnell spring</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='New-product' className='price-btn'><i class="fa fa-inr"></i> 9,960</a>
            </div>
            </div>
            <div className='collection'  onClick={()=>navigate('/productlist/Medico-Series')}>
            <img src={collection_img_2} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Medico Series</h5>
            <p className='collection-description'>Crafted with love for  <br></br> your neck and spine</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 9,585</a>
            </div>
            </div>
            <div className='collection' onClick={()=>navigate('/productlist/Grand-Series')}>
            <img src={collection_img_3} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Grand Series</h5>
            <p className='collection-description'> Pocketed springs for <br></br>luxurious sleep</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 12,330</a>
            </div>
            </div>
            <div className='collection' onClick={()=>navigate('/productlist/Latex-Series')}>
            <img src={collection_img_4} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Latex Series</h5>
            <p className='collection-description'>Crafted with Nature’s <br></br>Pin core blanketed latex</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 17,820</a>
            </div>
            </div>
            <div className='collection' onClick={()=>navigate('/productlist/PU-Foam-Series')}>
            <img src={collection_img_5} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>PU Foam Series</h5>
            <p className='collection-description'>Made with only the best quality <br></br>foam out there</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 6,225</a>
            </div>
            </div>
            <div className='collection' onClick={()=>navigate('/productlist/Rubberized-Coir-Series')}>
            <img src={collection_img_6} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Rubberized Coir</h5>
            <p className='collection-description'>Mattresses crafted from <br></br>natural heritage of coir</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 6,705</a>
            </div>
            </div>
        </div>
        <div className='demo-video mobile-responisve' style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
       {/*  <iframe src="https://www.youtube.com/embed/OKKXnKwAPwc" width="853"
      height="480"> </iframe>*/}
      <img onClick={()=>{redirect_Data(props.dataShare && props.dataShare.youtube_url)}} src={props.dataShare && imgurl+props.dataShare.youtube_image}  style={{width:"90%"}}/>
        </div> 
        <div className='highlights mobile-responisve  '>
            <div className='highlight-contents'>
            <img src={costumer} className="heighlight-icon" alt="Icons" />
            <p>Priority to<br></br>Customer<br></br>Satisfaction</p>
            </div>
            <div className='highlight-contents'>
            <img src={india} className="heighlight-icon" alt="Icons" />
            <p>Made in<br></br>India</p>
            </div>
            <div className='highlight-contents'>
            <img src={ecology} className="heighlight-icon" alt="Icons" />
            <p>Environmental<br></br>Cautious</p>
            </div>
            <div className='highlight-contents'>
            <img src={warranty} className="heighlight-icon" alt="Icons" />
            <p>Warranty<br></br>Protected</p>
            </div>
        </div>
        </div>
    )    
    }

    export default Collections;