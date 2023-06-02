// export const category_list = [
//     { id:2, category_name :"title1"},
//     { id:3, category_name :"title2"},
//     { id:4, category_name :"title3"},
//     { id:5, category_name :"title4"},
//     { id:6, category_name :"title5"}

   
// ];

import axios from 'axios';

const  baseurl = process.env.REACT_APP_BASE_URL;
const headers = {
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  
};

export const category_list = async () => {





  try{
    // return fetch(`${baseurl}user/category`)
    // .then((response) => response.json())
    // .then((data) => setUser(data));
 return await axios.get(`${baseurl}user/category`,{headers});
  }
  catch(err)
  {
    console.log("catched")
console.log(err)
  }

 
}


export const name_list = async () => {

  return await axios.get(`${baseurl}user/product_name_list`);
}

export const testimonials = async () => {



  return await axios.get(`${baseurl}user/testimonials`);
}


export const festivebanner = async () => {

 

  return await axios.get(`${baseurl}user/festivebanner`);
}


export const festivebanner_settings = async () => {

 

  return await axios.get(`${baseurl}user/festivebanner_settings`);
}

export const bottom_list = async () => {
  console.log("bot")
  return await axios.get(`${baseurl}user/bottom_banner`);
}



// export const category_view_type = async (view_type) => {



//   const requestBody = {
//     view_id: view_type,
    
//   };
//   axios
//     .post(baseUrl + "user/category_id_finder", requestBody)
//     .then(function (response) {

//       console.log(response.data)
//     return response.data;

    
//     })



 
// }


    