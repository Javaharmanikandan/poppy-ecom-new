import './styles/blog.css';

import React, { useContext, useEffect, useState } from "react";
import { useHistory, useNavigate, useParams } from 'react-router-dom';

import Footer from "../Components/footer";
import Header from "../Components/header";
import Loader from "../Components/loader";
import axios from 'axios';
import moment from 'moment'
import { ScrolltoTop } from '../utility';

// English.



const baseurl = process.env.REACT_APP_BASE_URL;
const imgurl = process.env.REACT_APP_IMG_URL;
export default function Blog() {

  let navigate = useNavigate();

  const [blog, setblog] = useState([]);

  const [blog_limit, setblog_limit] = useState([]);

  const godetails=(id)=>{

 
     

     
navigate('/blogdetails/'+id);



   
    
      }

      useEffect(() => {
        ScrolltoTop()
    }, [])
  useEffect(() => {
    
    blog_list()
    
    blog_list_latest()

  }, []);


  const blog_list = async () => {

    // const baseurl = 'http://localhost:8002/';

   let response = await axios.get(`${baseurl}user/blog_view`);
   setblog(response.data.data);





 };


 
 const blog_list_latest = async () => {

  // const baseurl = 'http://localhost:8002/';

 let response = await axios.get(`${baseurl}user/blog_view_limit`);
 setblog_limit(response.data.data);


};


  return (
    <>

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
                                                <span>Blogs</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>List</span>
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </nav>
                        <div class="container container1">
                            <div class="content1">
                                <div class="row">
                                    <div class="col main-blogs">
                                        <h2 class="text-center col">Recent Blogs</h2>
                                        <div class="row row_padding">


                                           {blog.map((item_blog )=>(
                                            <div class="col-md-4 col-xs-12 pad">
                                                <div class="hover-after">
                                                    <a href="#"  onClick={()=>{godetails(item_blog.id)}}>
                                                        <img class="same-height" src={imgurl+item_blog.blog_image} alt="img" />
                                                        
                                                    </a>
                                                </div>
                                                <div class="late-item">
                                                    <p class="content-title" >
                                                        <a href="#" onClick={()=>{godetails(item_blog.id)}}>{item_blog.blog_title}</a>
                                                    </p>
                                                    <p class="post-info">
                                                        <span class="span_des">{ moment(item_blog.date_time).format("MMM Do YY")}</span>
                                                        <span class="span_des">POST BY </span>
                                                        <span class="span_des">POPPY INDIA</span>
                                                    </p>
                                                    <p class="description textlimit" dangerouslySetInnerHTML={{ __html: item_blog.blog_content.substring(0, 200)}} >
                                                     
                                                    </p>
                                                        <span class="view-more">
                                                            <a href="#" onClick={()=>{godetails(item_blog.id)}} class="text_view_more">Read more</a>
                                                        </span> 
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
    </>
  );
}
