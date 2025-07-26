import React, { useEffect, useState } from 'react'
import ImageCarousel from '../components/ImageCarousel'
import Blogcard from '../components/Blogcard'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function FullBlog() {
  const {id}=useParams();
  const [blog,setBlog]=useState({title:"",content:"",images:[],link:""})
  useEffect(()=>{
    const fetchMyBlog=async()=>{
      const token= localStorage.getItem('token');
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
  },[id])
  const comments=['amazing anime worth watching']
  return (
    <div className='h-full w-full flex justify-center iems-center'>
      <div className='h-full w-[700px] xl:w-[900px] flex-col flex items-center justify-start pt-12 lg:pt-24 pl-10 pr-5'>
        <div className=" w-[400px] sm:w-[500px] md:w-[650px] lg-w[700px] xl:w-[750px] flex-col flex items-center justify-start p-4 overflow-hidden mb-4 border-b-2 border-gray-200 transition-all duration-300 ease-in-out">
          <Blogcard blog={blog}/>
          <div className="w-full  p-2 ">
                  <h4 className="font-semibold lg:font-semibold lg:text-2xl">Comments</h4>
              </div>
          <div className="h-full bg-blue-300 w-[400px] sm:w-[500px] md:w-[650px] lg-w[700px] xl:w-[750px] flex-col flex items-center justify-start p-4 overflow-hidden mb-4 border-b-2 border-gray-200 transition-all duration-300 ease-in-out">
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullBlog
