import React, { useState ,useEffect} from "react";
import ImageCarousel from "./ImageCarousel";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import {jwtDecode} from 'jwt-decode';
import { BiSolidUpvote } from "react-icons/bi";
import Avtar from "./Avtar";

function Blogcard({ blog }) {
  const token = localStorage.getItem("token");
  const [likes,setLikes]=useState(blog.likes)
  const [liked, setLiked] = useState(false);
  let userId = null;
  if (token) {
  const decoded = jwtDecode(token);
  userId = decoded.id; 
  }
  useEffect(() => {
  if (blog && blog.likes && userId) {
    setLiked(blog.likes.includes(userId));
    setLikes(blog.likes)
  }
  }, [blog]);
  const navigate= useNavigate();
  const handleLike=async()=>{
    const newLikedState = !liked;  // flip the like
      setLiked(newLikedState);

      try {
        const response=await axios.patch(`http://localhost:3000/api/blog/like/${blog._id}`,{liked},
        {
          headers:
         {
          Authorization:`Bearer ${localStorage.getItem('token')}`
         }
        }
      )
      setLikes(response.data);
      } catch (error) {
        console.log(error);
      }
  }
  const openFull=()=>{
    navigate(`/blog/${blog._id}`)
  }
  return (
    <div className=" w-[400px] sm:w-[500px] md:w-[650px] bg-white lg-w[700px] flex-col flex items-center justify-start p-2 rounded-2xl  overflow-hidden lg:mb-2 border-b-2 border-gray-200 hover:bg-gray-100 transition-all duration-100 ease-in-out" >
      <div className="w-full flex justify-between items-center">
      <Link to={`/profile/${blog.author.username}`}>
        <div className="flex items-center">
          <Avtar smallSize="h-[40px] w-[40px]" largeSize="h-[40px] w-[40px]" />
          <p className="text-sm font-bold m-2 text-black ">{blog.author.username}</p>
        </div>
      </Link>
        
      </div>
      <div className="w-full  p-2">
        <h4 className=" font-semibold lg:font-semibold lg:text-[20px]" onClick={openFull}>{blog.title}</h4>
      </div>
      <div className="w-full rounded-t-2xl pl-2 pr-2 text-gray-700 text-[14px] pb-1">
        <p className="text-sm text-gray-700">
          {blog.content}
        </p>
      </div>
      <div className="w-full p-3 rounded-2xl ">
        <ImageCarousel images={blog.images} />
      </div>
      <div className="w-full rounded-b-2xl">
        <div className="h-[40px] w-[60%] lg:w-[50%] flex gap-1 p-2">
          <button className="mr-2 flex justify-center items-center w-[30%] lg:w-[20%] p-2 rounded-2xl bg-gray-50 shadow-xs hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-100" onClick={handleLike}>
          {!liked?
            <>
            <BiUpvote className=' text-[20px] text-gray-600 hover:text-blue-500 transition-colors m-1 '  />
            </>:
            <>
            <BiSolidUpvote className='text-[20px] text-blue-500 transition-colors m-1' />
            </>
          }
            <p className="text-sm text-gray-600">{likes.length}</p>
          </button>

          <button className="w-[30%] lg:w-[20%] flex justify-between items-center p-2.5 rounded-full bg-gray-50 shadow-xs hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-100">
            <BiDownvote className="text-lg text-gray-600 hover:text-red-500 transition-colors" />
          </button>

          <button className="w-[30%] lg:w-[20%] flex justify-between items-center p-2.5 rounded-full bg-gray-50 shadow-xs hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-100" onClick={openFull}>
            <FaRegComment className="text-lg text-gray-600 hover:text-amber-500 transition-colors" />
            <p className="text-sm text-gray-600">{blog.comments.length}</p>
          </button>

          <button className="w-[30%] lg:w-[20%] flex justify-between items-center p-2.5 rounded-full bg-gray-50 shadow-xs hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-100">
            <FaShare className="text-lg text-gray-600 hover:text-green-500 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
