import { Link } from 'react-router-dom';
import "./styles/cusProduct.css"


function CusProduct() {
    


  return (
    <>
     <div className='cus-pro-container'>
         
         <div className='cus-conainer'>
             <div className='cus-title'>
                 <h5>Find your perfect mattress</h5>
             </div>
             <div className='cus-content'>
                 <p>Our mattress selector tool matches your sleep preferences and suggests the best one for you</p>
             </div>
            
             <div className='cus-button'>
                 <Link to="/poppy-react/filt">
                    <div className='cus-bt-cntr'>
                        <p>Choose Here</p>
                        <i className='bx bx-check'></i>
                    </div>
                 </Link>
             </div>
         </div>


     </div>
    </>
  )
}

export default CusProduct