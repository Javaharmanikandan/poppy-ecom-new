import React, { useEffect, useState } from "react";
import moment from 'moment'
import axios from "axios";
import { useHistory, useNavigate, useParams } from "react-router-dom";
const baseurl = process.env.REACT_APP_BASE_URL;

const imgurl = process.env.REACT_APP_IMG_URL;
function BlogCard() {
    let navigate = useNavigate();
    const [blog, setblog] = useState([]);

    useEffect(() => {
        blog_list()
        // testimonials_get();
      }, []);

      const blog_list = async () => {

        // const baseurl = 'http://localhost:8002/';
    
       let response = await axios.get(`${baseurl}user/blog_view`);
       setblog(response.data.data);
     };
  const godetails=(id)=>{navigate('/blogdetails/'+id);}

  return (
    <div class="container container1">
    <div class="content">
        <div class="row">
            <div class="col main-blogs">
            <h2 className="headingSecond" style={{textAlign:'center'}}>Our Blogs</h2>
                <div class="row row_padding">


                   {blog.map((item_blog )=>(
                    <div class="col-md-4 col-xs-12 pad">
                        <div class="hover-after">
                            <a href="#"  onClick={()=>{godetails(item_blog.id)}}>
                                <img class="same-height" src={imgurl+item_blog.blog_image} alt="img" />
                                
                            </a>
                        </div>
                        <div class="late-item">
                            {/* <p class="content-title" >
                                <a href="#" onClick={()=>{godetails(item_blog.id)}}>{item_blog.blog_title}</a>
                            </p> */}
                            <p class="post-info" style={{paddingBottom:20}}>
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
  )
}

export default BlogCard