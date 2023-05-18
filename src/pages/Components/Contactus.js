import React, { useEffect, useState } from "react";

function Contactus() {

  return (
    <div class="container container1" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div class="content_contact">
        <div>Call Our Sleep Experts to <br />Choose your Right Mattress</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><img src="/assests/images/svg/customer.svg" width={50} height={50}/>
        <a href="tel:+6199942413" style={{color:"white",marginLeft:10}}><p>+91 9054848481</p></a></div>
    </div>
</div>
  )
}

export default Contactus