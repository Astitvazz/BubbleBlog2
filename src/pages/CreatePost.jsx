import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

function Createpost({isOpen}) {
  const [content,setContent]=useState(true);
  const [images, setImages]=useState(false);
  const [link,setLink]=useState(false);
  const [text,setText]=useState({
    title:'',
    content:'',
    link:'',
  })
  const handleChange=(e)=>{
    console.log(text)
    setText((prev)=>{
      return{...prev,[e.target.name]:e.target.value}
    })
  }
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
  const handleFileUpload=(e)=>{
    const files=e.target.files;
    console.log(files)
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
              <input name='title' type='text' placeholder='Add Title...' className='focus:outline-none focus:ring-0 w-[80%] h-20 border-2 border-gray-400  rounded p-2 text-sm mb-6' onChange={handleChange}/>
              {
                content?
              <textarea name='content' className='focus:outline-none focus:ring-0 w-[80%] h-60 border-2 border-gray-400 rounded p-2 ' placeholder='Add Content...' onChange={handleChange}/>
              :''
              }
              {
                images?
                <>
                <div className='w-[80%] h-60  border-2 border-gray-400 rounded p-2 hover:w-[82%] flex items-center justify-center '>
                    <input type='file' id='upload' multiple hidden/>
                    <p className='text-sm m-1 text-gray-600'>upload media</p>
                    <label for='upload'>
                    <IoCloudUploadOutline className='text-gray-800 w-[30px] h-[30px] p-1 bg-gray-200 rounded-[100%] hover:bg-gray-300' onClick={handleFileUpload}/>
                    </label>
                </div>
                </>:''
              }
              {
                link?
                <>
                <input name='link' type='text' placeholder='Add Links...' className='focus:outline-none focus:ring-0 w-[80%] h-20  border-2 border-gray-400  rounded p-2 text-sm mb-6' onChange={handleChange}/>

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
