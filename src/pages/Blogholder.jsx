import React, { useEffect, useState } from 'react'
import Blogcard from '../components/Blogcard'
import axios from 'axios';
import useStore  from '../store/useStore';

function Blogholder() {
  const {isOpen}=useStore();
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
    
    <>
    <div className={`h-full ml-2 w-full ${isOpen?'xl:w-[77%]':'xl:w-[72%]'} flex justify-end iems-center transition-all duration-300 ease-in-out`}>
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