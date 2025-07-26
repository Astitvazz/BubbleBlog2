import React, { useEffect, useState } from 'react'
import Blogcard from '../components/Blogcard'
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';

function Blogholder() {
  const { isOpen } = useOutletContext();
  const [blogarray,setblogarray]=useState([]);
  useEffect(()=>{
    const fetchBlogs=async ()=>{
      try {
        const response=await axios.get('http://localhost:3000/api/blog');
        setblogarray(response.data);

      } catch (error) {
        console.log('error fetching the blogs',error);
        alert("something went wrong");
      }
    }
    fetchBlogs();
  },[])
  return (
    
    <>t
    <div className='h-full w-full flex justify-center iems-center'>
    <div className='h-full w-[700px] xl:w-[900px] flex-col flex items-center justify-start pt-24 pl-10 pr-5'>
    
      {
        blogarray.map((blog, index) => (
            <Blogcard key={index} blog={blog} />
        ))
      }
    </div>
    </div>

    </>
  )
}

export default Blogholder