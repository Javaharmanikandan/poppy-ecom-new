import axios from 'axios';

export const p_data = [
    { id:1, title :"title1", img:"../assets/img/product/pr1.jpg", discount:30, dprice: 12, rprice:15 },
    { id:2, title :"title2", img:"../assets/img/product/pr2.jpg", discount:30, dprice: 12, rprice:15 },
    { id:3, title :"title3", img:"../assets/img/product/pr4.jpg", discount:30, dprice: 12, rprice:15 },
    { id:4, title :"title4", img:"../assets/img/product/pr5.jpg", discount:30, dprice: 12, rprice:15 },
    { id:5, title :"title5", img:"../assets/img/product/pr6.jpg", discount:30, dprice: 12, rprice:15 },
    { id:6, title :"title6", img:"../assets/img/product/pr8.jpg", discount:30, dprice: 12, rprice:15 }
];  


const baseurl = 'http://localhost:8002/';

export const p_data_api = async () => {

  //   const requestBody = {
//     view_id: view_type,
    
//   };
//   axios
//     .post(baseUrl + "user/category_id_finder", requestBody)
//     .then(function (response) {

//       console.log(response.data)
//     return response.data;

    
//     })

  //return await axios.get(baseurl+`user/product_list`);

  
}



export const p_data_list_api = async () => {

    return await axios.get(baseurl+`user/product_list`);
  
    
  }




export const p_data_list =[

    { id:1, title :"title1", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr1.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK"},
    { id:2, title :"title2", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr2.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK" },
    { id:3, title :"title3", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr4.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK" },
    { id:4, title :"title4", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr5.jpg", discount:30, dprice: 12, rprice:15, stock: " OUT OF STOCK" },
    { id:5, title :"title5", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr6.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK" },
    { id:6, title :"title6", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr8.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK" }

];


export const p_data_grid =[

    { id:1, title :"title1", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr1.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK"},
    { id:2, title :"title2", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr2.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK" },
    { id:3, title :"title3", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr4.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK" },
    { id:4, title :"title4", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr5.jpg", discount:30, dprice: 12, rprice:15, stock: " OUT OF STOCK" },
    { id:5, title :"title5", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr6.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK" },
    { id:6, title :"title6", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies eget velit vitae bibendum. Cras condimentum libero a lectus ultricies... ", img:"../assets/img/product/pr8.jpg", discount:30, dprice: 12, rprice:15, stock: " IN STOCK" }

]


