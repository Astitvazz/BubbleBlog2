import React from 'react'
import Blogcard from '../components/Blogcard'
import { useOutletContext } from 'react-router-dom';

function Blogholder({Blogarray}) {
  const { isOpen } = useOutletContext();
  return (
    
    <>
    <div className='h-full w-full flex justify-center items-center'>
    <div className='h-full w-[700px] xl:w-[900px] flex-col flex items-center justify-start pt-30 bg-blue-600 pl-5 pr-5'>
    
      {
        Blogarray.map((blog, index) => (
            <Blogcard key={index} blog={blog} />
        ))
      }
    </div>
    </div>

    </>
  )
}

export default Blogholder