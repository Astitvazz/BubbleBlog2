import React, { useState } from 'react'

function Createpost({isOpen}) {
  const [content,setContent]=useState(true);
  const [images, setImages]=useState(false);
  const [link,setLink]=useState(false);
  const toggleContent=()=>{
    setContent(true);
    setImages(false);
    setLink(false);
  }
  const toggleImages=()=>{
    setContent(false);
    setImages(true);
    setLink(false);
  }
  const toggleLinks=()=>{
    setContent(false);
    setImages(false);
    setLink(true);
  }
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
          <div className='h-[650px] w-[800px] flex flex-col justify-start items-center pt-10'>
              <div className='w-[80%] h-20  pt-2 '>
                <button className={`w-[20%]  h-[80%] ${content?'border-b-8 border-blue-800':'border-none'} mr-2 text-bold`} onClick={toggleContent}>Content</button>
                <button className={`w-[20%]  h-[80%] ${images?'border-b-8 border-blue-800':'border-none'} mr-2 text-bold`} onClick={toggleImages}>Images</button>
                <button className={`w-[20%]  h-[80%] ${link?'border-b-8 border-blue-800':'border-none'} mr-2 text-bold`} onClick={toggleLinks}>Links</button>
              </div>
              <input type='text' placeholder='Add Title...' className='focus:outline-none focus:ring-0 w-[80%] h-20 border-2 border-gray-400  rounded p-2 text-sm mb-6'/>
              {
                content?
              <textarea className='focus:outline-none focus:ring-0 w-[80%] h-60 border-2 border-gray-400 rounded p-2 ' placeholder='Add Content...'/>
              :''
              }
              {
                images?
                <>
                <div className='w-[80%] h-60  border-2 border-gray-400 rounded p-2 hover:w-[b2%] '>

                </div>
                </>:''
              }
              {
                link?
                <>
                <input type='text' placeholder='Add Links...' className='focus:outline-none focus:ring-0 w-[80%] h-20  border-2 border-gray-400  rounded p-2 text-sm mb-6'/>

                </>
                :''
              }
              {
            link?
          <button className='w-[13%] h-10 border-2 bg-gray-200 border-gray-400 rounded-2xl text-semibold text-[15px] text-gray-800 mt-4'>Post</button>
          :''
          }
              
          </div>
          
          
      </div>
    </>

  )
}

export default Createpost
