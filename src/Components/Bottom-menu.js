import './styles/Bottom-menu.css';

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BottomMenu() {
  let navigate = useNavigate();

  const [menustate, menuSetstate] = useState({
    activeObject: {id: 1},
    objects:[{id:1,icon:'bx bx-home',title:"Home",path:"home"},{id:2,icon:'bx bx-search',title:"search",path:"search"} ,{id:3,icon:'bx bx-receipt',title:"Products",path:"order"},{id:4,icon:'bx bx-cart',title:"Cart",path:"cart"},{id:5,icon:'bx bx-user',title:"Profile",path:"profile"}]
  });

function toggleState(index) {
  Navi(index);
  menuSetstate({...menustate, activeObject: menustate.objects[index]})
}
function toggleClass(index){
  if(menustate.objects[index] === menustate.activeObject){
    // toggleShape(index);
    return "Bottom-item-active";
  }else if(menustate.activeObject.id === menustate.objects[index].id){
    // toggleShape(index);
    return "Bottom-item-active";
    
  }else{
    return "";
  }
}
const Navi = (index) =>{
 
  var nav = menustate.objects[index].path;

  if(nav === 'profile'){

    const data = localStorage.getItem('userInfo');
    if(data !== null){
      navigate('/profile');
    }else{
      navigate('/login');
    }
    
    
  }
  if(nav === 'home'){

      navigate('/');
  
    
  }

  if(nav === 'order'){

 
      navigate('/productlist/all');

    
    
  }

  
  if(nav === 'cart'){

 
      navigate('/cart');

    
    
  }


  if (nav === 'search') {
    
    var element = document.getElementById('tiva-searchBox');

    element.style.visibility = 'visible';
    element.style.opacity = 1;
    element.style.left = 0;
    console.log("deo")

  }


  }
  

  

  
  

async function toggleShape(index){
  var wid = window.innerWidth;
  let nav = document.querySelector('.Bottom-menu-list');
    let nav_indicator = nav.querySelector('.Bottom-menu-indicator');
        
        console.log(window.innerWidth);
        var differenc = index * 70 + 60 - 47;
        // console.log(differenc);
        nav_indicator.style.left = `calc(${differenc}px)`
}
  return (
    <>
      <div className="Bottom-menu-container">
        <div className="Bottom-menu">
       
          <ul className="Bottom-menu-list">
            {menustate.objects.map((element, index)=>(
              <li><a  key={index} className={toggleClass(index)} onClick={()=>{toggleState(index)}}>
                <i class={element.icon}></i>
                <span class="title">{element.title}</span>
            </a></li>
            ))}
          </ul>
         
        </div>
      </div>

      
    </>
  );
}

export default BottomMenu;
