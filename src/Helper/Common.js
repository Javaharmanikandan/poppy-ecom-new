

//EMAIL validation
exports.emailValidation = (email) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(pattern)){
        console.log("true");
        return true
    }
    console.log("false");
    return false
}


exports.mobileValidation = (evt) => {

    var theEvent = evt || window.event;
    // Handle paste
    if (theEvent.type === 'paste') {
        key = evt.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which; 
        key = String.fromCharCode(key);
    }
    
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

exports.percentageCalculation =(total, percent) =>{


   var percent = (percent / 100) * total;


    return Math.round(percent);

}




exports.Default_discount =(total, percent) =>{

    console.log(total+","+percent)


    var percent = (percent / 100) * total;
 
 
     return Math.round(percent);
 
 }



