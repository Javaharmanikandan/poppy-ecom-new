import React, { useEffect, useState } from "react";

function Contactus() {

  return (
    <div class="container container1 cont-container" >
    <div class="content_contact">
        <div><h3 style={{textAlign:"center",color:'white',fontSize:18}}>Contact us today and let our experts <br />assist you in finding the ideal mattress!</h3></div>
        <div className="Cont-img" style={{cursor:'pointer'}}><img src="/assests/images/svg/customer.svg" width={50} height={50}/>
        <a href="tel:+91 9054848481" style={{color:"white",marginLeft:10}}><p>+91 9054848481</p></a></div>
    </div>
</div>






  )
}

export default Contactus