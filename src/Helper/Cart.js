//TODO ADD CART
exports.addCart = (id, amt, title,image,bed_type,dimension,thickness,freesection,color,percentage,price_original,sub_devision) =>{
    //TODO CHECK SESSION STORAGE
    var cart_data = sessionStorage.getItem("poppy-cart"); //TODO GET CART DATA 
    
    if(cart_data === null){
        //TODO CART ADDING
        var cart_value = [{product_id: id, amount: parseInt(amt), product_count: 1, title: title,image:image,bed_type:bed_type,dimension:dimension,thickness:thickness,free:freesection,color:color,percentage:percentage,price_original:price_original,sub_devision:sub_devision}];
        sessionStorage.setItem("poppy-cart", JSON.stringify(cart_value));
    }else{
        //TODO CART UPDATE
        var copyCart = JSON.parse(cart_data); //TODO JSON PARCE
        if( copyCart.some(cartItem => cartItem.product_id === id)){
            for (var i = 0; i < copyCart.length; i++) {
                if(copyCart[i].product_id === id){
                      copyCart[i].amount += amt;
                      copyCart[i].product_count += 1 ;
                      break;
                }
              }
        }else{
            var cart_value = {product_id: id, amount: amt, product_count: 1, title: title,image:image,bed_type:bed_type,dimension:dimension,thickness:thickness,free:freesection,color:color,percentage:percentage,price_original:price_original,sub_devision:sub_devision};
            copyCart.push(cart_value);
        }

        
        sessionStorage.setItem("poppy-cart", JSON.stringify(copyCart));
    }

    console.log(copyCart ,"Crt")
    return JSON.parse(sessionStorage.getItem("poppy-cart"));
}

//TODO REMOVE CART
exports.removeCart = (id) =>{
    //TODO GET VALUE FROM SESSION STORAGE
    var cart_data = JSON.parse(sessionStorage.getItem("poppy-cart"));
      cart_data = cart_data.filter(product => product.product_id !== id);
      sessionStorage.setItem("poppy-cart", JSON.stringify(cart_data));
      return(cart_data);

    
}

exports.removeCartall = (id) =>{
    //TODO GET VALUE FROM SESSION STORAGE
    // var cart_data = JSON.parse(sessionStorage.getItem("poppy-cart"));
    //   cart_data = cart_data.filter(product => product.product_id !== id);


let cart_data = [];
      sessionStorage.removeItem("poppy-cart");


      return(cart_data);

    
}





//TODO ADD CART
exports.addCart_update = (id, amt,type) =>{
    //TODO CHECK SESSION STORAGE
    var cart_data = sessionStorage.getItem("poppy-cart"); //TODO GET CART DATA 
    if(cart_data === null){
        //TODO CART ADDING
        // var cart_value = [{product_id: id, amount: amt, product_count: 1, title: title,image:image,bed_type:bed_type,dimension:dimension,thickness:thickness}];
        // sessionStorage.setItem("poppy-cart", JSON.stringify(cart_value));
    }else{
        //TODO CART UPDATE
        var copyCart = JSON.parse(cart_data); //TODO JSON PARCE
        if( copyCart.some(cartItem => cartItem.product_id === id)){

            if(type==="plus")
            {
            for (var i = 0; i < copyCart.length; i++) {
                if(copyCart[i].product_id === id){
                      copyCart[i].amount += amt;
                      copyCart[i].product_count += 1 ;
                      break;
                }
              }
        }
        else
        {


            for (var i = 0; i < copyCart.length; i++) {
                if(copyCart[i].product_id === id){

                    if(copyCart[i].product_count ===1)
                    {
                        var cart_data = JSON.parse(sessionStorage.getItem("poppy-cart"));
      cart_data = cart_data.filter(product => product.product_id !== id);
      sessionStorage.setItem("poppy-cart", JSON.stringify(cart_data));
      return(cart_data);
                    }
                      copyCart[i].amount -= amt;
                      copyCart[i].product_count -= 1 ;
                      break;
                }
              }


        }
    }
        else{
            // var cart_value = {product_id: id, amount: amt, product_count: 1, title: title};
            // copyCart.push(cart_value);
        }
        sessionStorage.setItem("poppy-cart", JSON.stringify(copyCart));
    }


    console.log(sessionStorage.getItem("poppy-cart"));

 
    return JSON.parse(sessionStorage.getItem("poppy-cart"));



}



