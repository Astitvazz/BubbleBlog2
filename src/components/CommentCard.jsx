import React from 'react'
import Avtar from './Avtar'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

function CommentCard({comment}) {
  return (
  
        <div className='h-auto w-full bg-white flex flex-col p-2'>
          <div className='flex items-center space-x-2'>
            <Avtar smallSize={'40px'} largeSize={'40px'} />
            <p className="text-sm text-gray-600">{comment.author.username}</p>
          </div>
        
          <div
            
            className='min-h-[20px] text-sm flex w-full p-3 break-words whitespace-pre-wrap'
          >
            {comment.content}
          </div>
          <div className='min-h-[20px] flex w-full p-1 break-words whitespace-pre-wrap'>
            <div className='min-h-[20px] flex w-[15%] items-center justify-around  break-words whitespace-pre-wrap'>
                <div className='flex'>
                    <BiUpvote className=' text-[15px] text-gray-600 hover:text-blue-500 transition-colors m-1 '/>
                    <p className='text-[15px]'>0</p>
                </div>
                <BiDownvote className="text-[15px] text-gray-600 hover:text-red-500 transition-colors" />
            </div>
          </div>

        </div>
  )
}

export default CommentCard
