import React from 'react'
import ImageCarousel from './ImageCarousel'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

function Blogcard({blog}) {
  return (
    <div className=' m-2 p-3 mb-6 bg-gray-200 border-b border-gray-300 bg-white'>
        <div className='w-full rounded-t-2xl pl-2 pr-2'>

        </div>
        <div className='w-full  p-2 '>
            <h4 className='text-2xl '>{blog.title}</h4>
        </div>
        <div className='w-full p-1'>
            <ImageCarousel images={blog.images} />
        </div>
        <div className='w-full h-[45px] rounded-b-2xl'>
                <div className='w-[40%] h-full  flex items-center justify-around p-1'>
                    <button className='w-[23%]  rounded-2xl h-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 '><BiUpvote className='text-[20px] text-black'/></button>
                    <button className='w-[23%]  rounded-2xl h-full flex items-center justify-center bg-gray-200 hover:bg-gray-300'><BiDownvote className='text-[20px] text-black' /></button>
                    <button className='w-[23%]  rounded-2xl h-full flex items-center justify-center bg-gray-200 hover:bg-gray-300'><FaRegComment className='text-[20px] text-black'/></button>
                    <button className='w-[23%]  rounded-2xl h-full flex items-center justify-center bg-gray-200 hover:bg-gray-300'><FaShare className='text-[20px] text-black'/></button>
                </div>
        </div>
    </div>
  )
}

export default Blogcard