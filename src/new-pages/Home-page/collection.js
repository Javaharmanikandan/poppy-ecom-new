import React from 'react';
import "./styles/collection.css";

import collection_img_1 from "./images/collection-1.jpg";
import collection_img_2 from "./images/collection-2.jpg";
import collection_img_3 from "./images/collection-3.jpg";
import collection_img_4 from "./images/collection-4.jpg";
import collection_img_5 from "./images/collection-5.jpg";
import collection_img_6 from "./images/collection-6.jpg";


/*icon-import*/
import heighlight_icon_1 from "./images/heighlight-icon-1.png";
/*--- ---*/


function Collections() {
    return (
        
        <div className='collection-container'>
            <h2>Collections</h2>
            <div className='collections'>
            <div className='collection'>
            <img src={collection_img_1} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Premium Series</h5>
            <p className='collection-description'>Based From<br></br>Bonnel Spring</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='New-product' className='price-btn'><i class="fa fa-inr"></i> 7,762</a>
            </div>
            </div>
            <div className='collection'>
            <img src={collection_img_2} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Medico Series</h5>
            <p className='collection-description'>Specially Constructed for <br></br> Spine’s natural curves</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 8,626</a>
            </div>
            </div>
            <div className='collection'>
            <img src={collection_img_3} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Grand Series</h5>
            <p className='collection-description'>Based From Pocketed Spring<br></br>inducing Luxury Sleep</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 11,097</a>
            </div>
            </div>
            <div className='collection'>
            <img src={collection_img_4} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Latex Series</h5>
            <p className='collection-description'>Based From Nature's<br></br>Pin core banked Latex</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 16,038</a>
            </div>
            </div>
            <div className='collection'>
            <img src={collection_img_5} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>PU Foam Series</h5>
            <p className='collection-description'>Based From High Quality<br></br>Foam Materials</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 7,924</a>
            </div>
            </div>
            <div className='collection'>
            <img src={collection_img_6} className="collection_img" alt="collection_image" />
            <h5 className='collection-title'>Rubberized Coir</h5>
            <p className='collection-description'>Based From Heritage<br></br>Natural Coir</p>
            <div className='price-details'>
                <p>Mattress Range<br></br>Starts From</p>
                <a href='#' className='price-btn'><i class="fa fa-inr"></i> 5,049</a>
            </div>
            </div>
        </div>
        <div className='demo-video'>
        <iframe src="https://www.youtube.com/embed/OKKXnKwAPwc" width="853"
      height="480"> </iframe>
        </div>
        <div className='highlights'>
            <div className='highlight-contents'>
            <img src={heighlight_icon_1} className="heighlight-icon" alt="Icons" />
            <p>Priority to<br></br>Customer<br></br>Satisfaction</p>
            </div>
            <div className='highlight-contents'>
            <img src={heighlight_icon_1} className="heighlight-icon" alt="Icons" />
            <p>Made in<br></br>India</p>
            </div>
            <div className='highlight-contents'>
            <img src={heighlight_icon_1} className="heighlight-icon" alt="Icons" />
            <p>Environmental<br></br>Cautious</p>
            </div>
            <div className='highlight-contents'>
            <img src={heighlight_icon_1} className="heighlight-icon" alt="Icons" />
            <p>Warranty<br></br>Protected</p>
            </div>
        </div>
        </div>
    )    
    }

    export default Collections;