import React, { useEffect, useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import Blogcard from '../components/Blogcard'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import CommentCard from '../components/CommentCard';

function FullBlog() {
  const {id}=useParams();
  const token= localStorage.getItem('token');
  const [content,setContent]=useState("");
  
  const handleChange=(e)=>{
    
    setContent(e.target.value);
    
  }
  const onSubmit=async()=>{
    try {
      const response=await axios.post(`http://localhost:3000/api/blog/comment/${id}`,{content},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      alert("comment posted")
      setContent("")
    } catch (error) {
      console.log("error:",error)
    }
  }
  const [blog,setBlog]=useState({title:'',content:'',link:'',images:[],likes:[],comments:[],author:''})
  useEffect(()=>{
    const fetchMyBlog=async()=>{
      
      try {
        const response=await axios.get(`http://localhost:3000/api/blog/${id}`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        }
        );
        setBlog(response.data);
        console.log(response.data);
      } catch (error) {
        alert(error);
        console.log(error)
      }
    }
    fetchMyBlog();
  },[blog,id])
  console.log(blog.comments)
  return (
    <div className='h-full w-full flex justify-center iems-center '>
      <div className='h-full w-[700px] xl:w-[900px] flex-col flex items-center justify-start pt-12 lg:pt-24 pl-10 pr-5'>
        <div className=" w-[400px] sm:w-[500px] md:w-[650px] lg-w[700px] xl:w-[750px] flex-col flex items-center justify-start p-4 overflow-hidden mb-4 border-b-2 border-gray-200 transition-all duration-300 ease-in-out">
          <Blogcard blog={blog}/>
          <div className="w-full  p-2 ">
                  <h4 className="font-semibold lg:font-semibold lg:text-2xl">Comments</h4>
              </div>
          <div className=" h-full w-[400px] sm:w-[500px] md:w-[650px] lg-w[700px] xl:w-[750px] flex-col flex items-center justify-start p-4 overflow-hidden mb-4 border-b-2 border-gray-200 transition-all duration-300 ease-in-out">
            <div className=' flex w-full h-9 mb-4'>
              <textarea className='w-[88%] h-full focus:outline-none focus:ring-0 rounded-2xl border-1 border-gray-300 p-2 text-sm' placeholder='Write comment....' onChange={handleChange}/>
              <button type='text' className=' rounded-2xl font-semibold text-sm text-white bg-sky-500 flex-1 h-full ml-2'onClick={onSubmit}>Post</button>
            </div>
            {blog.comments.map((comment,index)=>{
               return <CommentCard  key={index} comment={comment}/>
            })}
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default FullBlog
