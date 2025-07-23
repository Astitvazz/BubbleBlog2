import React from 'react'
import ImageCarousel from './ImageCarousel'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

function Blogcard({blog}) {
  return (
    <div className=' w-[400px] sm:w-[500px] md:w-[650px] lg-w[700px] xl:w-[800px] 2xl flex-col flex items-center justify-start p-4 overflow-hidden bg-black mb-2'>
        <div className='w-full rounded-t-2xl pl-2 pr-2'>

        </div>
        <div className='w-full  p-2 '>
            <h4 className='text-xl text-bold font-Serif text-white '>{blog.title}</h4>
        </div>
        <div className='w-full p-1'>
            <ImageCarousel images={blog.images} />
        </div>
        <div className='w-full h-[7%] rounded-b-2xl bg-red-700'>
                <div className='w-[40%] h-full  flex items-center justify-around p-1 bg-yellow-500'>
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