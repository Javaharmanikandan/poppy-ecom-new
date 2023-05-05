import './styles/login_signup.css';
import 'react-toastify/dist/ReactToastify.css';

import { Link, useNavigate } from "react-router-dom";
import {useEffect, useState} from 'react';

import { GoogleLogin } from 'react-google-login';
import Loader from '../Components/loader';
import React from "react";
import axios from "axios";
import { gapi } from 'gapi-script';
import {toast} from 'react-toastify';

const commonJs = require('../Helper/Common');


function LoginSignUp(props) {

  toast.configure();

  let navigate = useNavigate();
  let baseUrl = process.env.REACT_APP_BASE_URL;
  

  useEffect(()=>{
    if(props.data =="login"){
      loGin();
    }else{
      signUP();
    }
  },[])
  
  
  //TODO CONST USER IFORMATION USESTATE - U
  const [userName,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [mobile,setMobile] = useState("");
  const [regPassword,setRegPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});
  
  const setInputboxEmpty = () =>{
    setEmail("");
    setUsername("");
    setEmail("");
    setName("");
    setMobile("");
    setRegPassword("");
    setPassword("");
  } 
  




  //GOOGLE LOGIN SUCCESS

     const clientId = '853298021623-1onas4fia5fe85tniua3h0rtbvbenu1v.apps.googleusercontent.com';
    //localhost client id  const clientId = '395798341450-c8ob29ugjgct2q4mruqq7f7t26ft0eo0.apps.googleusercontent.com';

  
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });
  

  const onSuccess = (res) => {

 toast.success("Login Success");
 
  const user_details= {
       
        "uname": res.profileObj.name,
        "email": res.profileObj.email,
        
    };

    
               localStorage.setItem(
                "userInfo",
                JSON.stringify(user_details)
                );

      setUserInfo(user_details)
    


//  const requestBody = {
//             email: res.profileObj.email,
//           };
//           axios
//           .post(baseUrl + "user/login_details", requestBody)
//           .then(function (response) {

//              localStorage.setItem(
//                 "userInfo",
//                 JSON.stringify(response.data.ResponseData)
//                 );


                
//                 setUserInfo(response.data.ResponseData);


//           })

    // localStorage.setItem(
    //   "userInfo",
    //   JSON.stringify(res.profileObj)
    //   );
      
    //   setUserInfo(res.profileObj);
      
      
    };


    const onFailure = (err) => {
  console.log('failed:', err);
};




    
    //TODO LOGIN
    const loginCheck = () => {
      if (userName === "" || password === "") {
        toast.error("Please Fill All the Fields ");
      } else {
        // if (!commonJs.emailValidation(userName)) {
        //   toast.error("Please Enter Valid Details");
          
        // } else {
          const requestBody = {
            uname: userName,
            password: password,
          };
          axios
          .post(baseUrl + "user/login", requestBody)
          .then(function (response) {
            if (response.data.ResponseCode === 200) {
              setInputboxEmpty();
              toast.success(response.data.ResponseMsg);
              localStorage.setItem(
                "userInfo",
                JSON.stringify(response.data.ResponseData)
                );
                setUserInfo(response.data.ResponseData);
                console.log()
              } else {
                toast.error(response.data.ResponseMsg);
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          }
        
      };
      
      //TODO REGISTER
      const registerCheck = () => {
        if (name === "" || email === "" || regPassword === "" || mobile === "") {
          toast.error("Please Fill All the Fields ");
        } else {
          if (!commonJs.emailValidation(email)) {
            toast.error("Please Enter Valid Mail");
          }else if(mobile.length !== 10){
            toast.error("Please Enter 10 Digit Number");                 
          }
          else {
            const requestBody = {
              name: name,
              email: email,
              mobile: mobile,
              password: regPassword,
            };
            
            
            axios
            .post(baseUrl + "user/", requestBody).then(function (response) {
              if (response.data.ResponseCode === 200) {
                setInputboxEmpty();
                toast.success(response.data.ResponseMsg);

                 
                localStorage.setItem(
                  "userInfo",
                  JSON.stringify(response.data.ResponseData)
                  );
                  
                  console.log(response.data)

                  setUserInfo(response.data.ResponseData);
                 



                } else {
                  toast.error(response.data.ResponseMsg);
                }
              })
              
              
            }
          }
        };
        


        // const sendmail =(data) =>
        // {

        //   const requestBody = {
        //       name: data.uname,
        //       email: data.email,
            
        //     };   
        //     axios
        //     .post("https://vegroute.com/poppy/admin/sendmail", requestBody).then(function () {

        //   // console.log("enter")
        // })

        // }

        useEffect(()=>{
          const userData = localStorage.getItem('userInfo');
          if(userData !== null){
            navigate('/')
          }
          
        },[userInfo])
        
        //TODO SWITCH LOGIN TO SIGNUP
        const signUP = () => {
          const container = document.querySelector(".login-signup");
          container.classList.add("sign-up-mode");
        };
        const loGin = () => {
          const container = document.querySelector(".login-signup");
          container.classList.remove("sign-up-mode");
        };
        
        return (
          <React.Fragment>
          <div id="login-signup" class="login-signup">
          <div class="forms-container">
          <div class="signin-signup">
          <form action="#" class="sign-in-form">
          <h2 class="title">Sign in</h2>
          <div class="input-field">
          <i class="fas fa-user"></i>
          <input onChange={(event)=> setUsername(event.target.value)} type="text" placeholder="Email or Mobile" value={userName}/>
          </div>
          <div class="input-field">
          <i class="fas fa-lock"></i>
          <input onChange={(event)=> setPassword(event.target.value)} type="password" placeholder="Password" value={password} />
          </div>
          <input onClick={loginCheck}  type="button" value="Login" class="btn solid" />
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
          {/* <a href="#" class="social-icon">
          <i class="fab fa-facebook-f"></i>
        </a> */}
        {/* <a href="#" class="social-icon">
        <i class="fab fa-twitter"></i>
      </a> */}
      {/* <a href="#" class="social-icon">
      <i class="fab fa-google"></i>
    </a> */}
    {/* <a href="#" class="social-icon">
    <i class="fab fa-linkedin-in"></i>
  </a> */}
  {/* 
  <GoogleLogin
  clientId="395798341450-c8ob29ugjgct2q4mruqq7f7t26ft0eo0.apps.googleusercontent.com"
  buttonText="Login"
  onSuccess={responseGoogle}
  onFailure={responseGoogle}
  cookiePolicy={'single_host_origin'}
/> */}


<GoogleLogin
clientId={clientId}
buttonText="Sign in with Google"
onSuccess={onSuccess}
onFailure={onFailure}
cookiePolicy={'single_host_origin'}

/>


</div>
</form>
<form  class="sign-up-form">
<h2 class="title">Sign up</h2>
<div class="input-field">
<i class="fas fa-user"></i>
<input onChange={(event)=> setName(event.target.value)} type="text" placeholder="Name" value={name} />
</div>
<div class="input-field">
<i class="fas fa-envelope"></i>
<input onChange={(event)=> setEmail(event.target.value)} type="email" placeholder="Email" value={email} />
</div>
<div class="input-field">
<i class="fas fa-phone"></i>
<input onChange={(event)=> setMobile(event.target.value)} onKeyPress={(event)=> commonJs.mobileValidation(event.target.value)}  type="text" maxlength="10" placeholder="Mobile" value={mobile} />
</div>
<div class="input-field">
<i class="fas fa-lock"></i>
<input onChange={(event)=> setRegPassword(event.target.value)} type="password" placeholder="Password" value={regPassword}/>
</div>
<input onClick={registerCheck}  type="button" class="btn" value="Sign up" />
<p class="social-text">Or Sign up with social platforms</p>
<div class="social-media">
{/* <a href="#" class="social-icon">
<i class="fab fa-facebook-f"></i>
</a> */}
{/* <a href="#" class="social-icon">
<i class="fab fa-twitter"></i>
</a> */}
{/* <a href="#" class="social-icon">
<i class="fab fa-google"></i>
</a> */}
{/* <a href="#" class="social-icon">
<i class="fab fa-linkedin-in"></i>
</a> */}

<GoogleLogin
clientId={clientId}
buttonText="Sign in with Google"
onSuccess={onSuccess}
onFailure={onFailure}
cookiePolicy={'single_host_origin'}

/>
</div>
</form>
</div>
</div>

<div class="panels-container">
<div class="panel left-panel">
<div class="content" style={{ marginTop:"0px"}}>
<h2>NEW HERE ?</h2>
<p>
To Create your new account click below
</p>
<button onClick={signUP} class="btn transparent" id="sign-up-btn" >
Sign up
</button><br/><br/>
<Link to="/">
<button class="btn transparent" id="sign-up-btn" >
Back to Home
</button>
</Link>
</div>
<img src="img/log.svg" class="image" alt="" />
</div>
<div class="panel right-panel">
<div class="content">
<h3>MANAGE YOUR ACCOUNT ?</h3>
<p>
Already have an account click below
</p>
<button onClick={loGin} class="btn transparent" id="sign-in-btn">
Sign in
</button><br/><br/>
<Link to="/">
<button class="btn transparent" id="sign-up-btn" >
Back to Home
</button>
</Link>
</div>
<img src="img/register.svg" class="image" alt="" />
</div>
</div>
</div>
<Loader />
</React.Fragment>
);
}

export default LoginSignUp;
