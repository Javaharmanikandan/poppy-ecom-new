import React, { useContext, useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from 'react-router-dom';

import Footer from "../Components/footer";
import Header from "../Components/header";
import Loader from "../Components/loader";
import axios from 'axios';

const baseurl = process.env.REACT_APP_BASE_URL;
const imgurl = process.env.REACT_APP_IMG_URL;
 
export default function BlogDetails() {
 let navigate = useNavigate();
const { id } = useParams();

const [blogdetails_data, setblogdetailsdata] = useState([]);
const [bloglist, setbloglist] = useState([]);
useEffect(() => {
 blogdetailsde();
 blog_list();
}, [id])


  const godetails=(id)=>{

 
     

     
navigate('/blogdetails/'+id);



   
    
      }
const blogdetailsde = async () =>
{

  
  let reqbody_send={
    id:id
  };

    const result_data = await axios
    
    .post(baseurl + "user/blog_details_view/", reqbody_send)
    
    .then(function (response) {

      

      setblogdetailsdata(response.data.data[0]);
      console.log(blogdetails_data);
    })


};


 const blog_list = async () => {

    // const baseurl = 'http://localhost:8002/';

   let response = await axios.get(`${baseurl}user/blog_view`);
   setbloglist(response.data.data);





 };
  return (
    <>

    <div id="blog-detail" class="blog">
      <div class="main-content">
        <div id="wrapper-site">
          <div id="content-wrapper">
            <div id="main">
              <div class="page-home">
                <nav class="breadcrumb-bg">
                  <div class="container no-index">
                    <div class="breadcrumb">
                      <ol>
                        <li>
                          <a href="#">
                            <span>Home</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Blog </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Blog Details </span>
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </nav>
                <div class="container " >
                  <div class="content">
                    <div class="row">
                      
                      <div class="col-sm-8 col-lg-12 col-md-12 flex-xs-first main-blogs hom">
                        <h3>{blogdetails_data.blog_title}</h3>
                        <div class="hover-after">
                          <img
                          

                            src={imgurl+blogdetails_data.blog_image}
                            alt="img"
                            class="img-fluid"
                          />
                        </div>
                        <div class="late-item">
                          <p  dangerouslySetInnerHTML={{ __html: blogdetails_data.blog_content}}>      
                          </p>
                        
                       
                          
                      
                         
                        
                        </div>

                             <div class="spacing-10 group-image-special">
                                                <div class="container1">
                                                    <div class="row">
                                                        <div class="col-lg-6 col-md-6 p-left">
                                                            <div class="effect">
                                                                <img class="img-fluid" src={require("../assets/img/blog/BLOGA.jpg")} alt="banner-1" title="banner-1" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6 p-right">
                                                            <div class="effect">
                                                                <img class="img-fluid" src={require("../assets/img/blog/BLOGB.jpg")} alt="banner-2" title="banner-2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                      
                        <div class="related">
                          <h2 class="title-block">Related Blogs</h2>
                          <div class="main-blogs">
                            <div class="row">

                              {bloglist.slice(0,3).map((item_blog )=>(
                              <div class="col-md-4">
                                <div class="hover-after">
                                  <a href="#" onClick={()=>{godetails(item_blog.id)}}>
                                    <img
                                      src={imgurl+item_blog.blog_image}
                                      alt="img"
                                      class="img-fluid"
                                    />
                                  </a>
                                </div>
                                <div class="late-item">
                                  <p class="content-title">
                                    <a href="#" onClick={()=>{godetails(item_blog.id)}}>
                                      {item_blog.blog_title}
                                    </a>
                                  </p>
                                  <p  onClick={()=>{godetails(item_blog.id)}} class="description" dangerouslySetInnerHTML={{ __html: item_blog.blog_content.substring(0, 200)}}>
                                  
                                  </p>
                                </div>
                              </div>

                              ))}
                          
                            </div>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader />
    </div>

    </>
  );
}
