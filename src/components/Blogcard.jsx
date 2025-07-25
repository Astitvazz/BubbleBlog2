import React from "react";
import ImageCarousel from "./ImageCarousel";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

function Blogcard({ blog }) {
  return (
    <div className=" w-[400px] sm:w-[500px] md:w-[650px] lg-w[700px] xl:w-[750px] 2xl flex-col flex items-center justify-start p-4 overflow-hidden mb-4 border-b-2 border-gray-200 transition-all duration-300 ease-in-out">
      <div className="w-full rounded-t-2xl pl-2 pr-2">
        <p></p>
      </div>
      <div className="w-full  p-2 ">
        <h4 className=" font-semibold lg:font-semibold lg:text-2xl">{blog.title}</h4>
      </div>
      <div className="w-full rounded-t-2xl pl-2 pr-2 text-gray-700 text-[15px] pb-2">
        <p>
          {blog.author}
        </p>
      </div>
      <div className="w-full p-1">
        <ImageCarousel images={blog.images} />
      </div>
      <div className="w-full rounded-b-2xl">
        <div className="w-[35%] flex items-center justify-between gap-1">
          <button className="p-2.5 rounded-full bg-gray-50 shadow-xs hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-100">
            <BiUpvote className="text-lg text-gray-600 hover:text-blue-500 transition-colors" />
          </button>

          <button className="p-2.5 rounded-full bg-gray-50 shadow-xs hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-100">
            <BiDownvote className="text-lg text-gray-600 hover:text-red-500 transition-colors" />
          </button>

          <button className="p-2.5 rounded-full bg-gray-50 shadow-xs hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-100">
            <FaRegComment className="text-lg text-gray-600 hover:text-amber-500 transition-colors" />
          </button>

          <button className="p-2.5 rounded-full bg-gray-50 shadow-xs hover:bg-gray-100 hover:shadow-sm transition-all duration-200 ease-in-out border border-gray-100">
            <FaShare className="text-lg text-gray-600 hover:text-green-500 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
