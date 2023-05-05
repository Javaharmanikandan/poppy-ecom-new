import React,{useState} from 'react';

import "./filter.css";


export default function Product_Filter()
{
    const [showhide, setShowhide]=useState("no")

    return(
    
        <div className='filter-section'>
        <div className="product-path">
            <ol>
            <li>
            <a href="#">
            <span>Home  &gt; </span>
            </a>
            </li>
            <li>
            <a href="#">
            <span>Mattress  </span>
            </a>
            </li>
            </ol>
            </div>

            <div className='pr-filter-name'>
                <h4>Showing <span>All Mattress</span></h4>
                <a data-toggle="tab" href='#product-filter' className='edit-icon'><i class='fa fa-edit'></i></a>
            </div>

            <div id='product-filter'>

            <div className='all-mattress-section'>
                <div className='filter-content-1'>
                    <div className='filters'>
                        <div>
                        <input type={'radio'} /> All Mattress
                        </div>
                        <div>
                        <input type={'radio'} /> Grand Series
                        </div>
                        <div>
                        <input type={'radio'} /> Premium Series
                        </div>
                        <div>
                        <input type={'radio'} /> Medico Series
                        </div>
                        <div>
                        <input type={'radio'} /> Pillows
                        </div>
                    </div>
                    </div>
                    <div className='filter-content-2'>
                    <div className='filters'>
                        <div>
                        <input type={'radio'} /> Latex Series
                        </div>
                        <div>
                        <input type={'radio'} /> Rubberised Coir
                        </div>
                        <div>
                        <input type={'radio'} /> PU Foam Series
                        </div>
                        <div>
                        <input type={'radio'} /> Protector
                        </div>
                    </div>
                    </div>
                    </div>

                <div className='firmness-section'>
                    <label>Firmness :</label>
                    <div className='all-mattress-section'>
                <div className='filter-content-1'>
                    <div className='filters'>
                        <div>
                        <input type={'radio'} /> All Mattress
                        </div>
                        <div>
                        <input type={'radio'} /> Grand Series
                        </div>
                    </div>
                    </div>
                    <div className='filter-content-2'>
                    <div className='filters'>
                        <div>
                        <input type={'radio'} /> Latex Series
                        </div>
                        <div>
                        <input type={'radio'} /> Rubberised Coir
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className='size-section'>
                <div className='firmness-section'>
                    <label>Size :</label>
                    <div className='all-mattress-section'>
                <div className='filter-content-1'>
                    <div className='filters'>
                        <div>
                        <input type={'radio'} /> Single
                        </div>
                        <div>
                        <input type={'radio'} />Queen
                        </div>
                    </div>
                    </div>
                    <div className='filter-content-2'>
                    <div className='filters'>
                        <div>
                        <input type={'radio'} /> Double
                        </div>
                        <div>
                        <input type={'radio'} /> King
                        </div>
                    </div>
                    </div>
                    <div className='filter-content-3'>
                    <div className='filters'>
                        <div>
                        <input type={'radio'} /> All
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