import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import axios from 'axios';

 


function Redirect_function() {
const { id } = useParams();
let navigate = useNavigate();
    
     useEffect(() => {
    
         movepage();
       
    
     }, []);
    
    
    
    
    
    
    const movepage = () => {
        
    //TODO NAVIGATE TO ERROR PAGE
       
        navigate('/productdetail/' + id);
        
  }
  
    
    
    


  return (
    <>
  

    </>
  );
}

export default Redirect_function;
