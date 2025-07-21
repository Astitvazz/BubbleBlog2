import React from 'react'
import Blogcard from '../components/Blogcard'
import { useOutletContext } from 'react-router-dom';

function Blogholder({Blogarray}) {
  const { isOpen } = useOutletContext();
  return (
    
    <>
    <div className='w-full h-full flex items-center justify-center'>
    <div className='w-[50%] h-[50%]'>
    <div className={` ${isOpen?'left-[25%] right-[25%]':'left-[20%] right-[30%]'} transition-all duration-300 ease-in-out top-16 bottom-0 overflow-y-auto p-4 pr-6 pl-6 scrollbar-hide`}>
      {
        Blogarray.map((blog, index) => (
            <Blogcard key={index} blog={blog} />
        ))
      }
    </div>
    </div>
    </div>
    </>
  )
}

export default Blogholder