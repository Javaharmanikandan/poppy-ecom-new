import axios from 'axios';
import { toast } from "react-toastify";
const  baseurl = process.env.REACT_APP_BASE_URL;



export const addtoWishlist = async(p_id,total_amount,product_name,product_image,product_size,product_dimen,product_height) =>{
  toast.configure();
   const userData = JSON.parse(localStorage.getItem("userInfo"));

   if (userData === null) {
       toast.error("Please Login");
     } else {
       const requestBody = {
         product_id: p_id,
         total_amount: total_amount,
         product_name: product_name,
         product_image: product_image,
         product_size: product_size,
         product_dimen: product_dimen,
         product_height: product_height,
         user_id: userData.email,
       };

       const result_data = await axios.post(baseurl + "user/wishlist_add/", requestBody).then(function (response) {

        console.log()
           toast.success("product Added Successfully ");
        });
   }

}