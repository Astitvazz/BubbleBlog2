import React from 'react'
import { FaPlus } from "react-icons/fa";

function RegistrationForm2() {
  return (
    <div>
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='w-[700px] h-[700px]  flex flex-col justify-center items-center'>
            <div className='w-[40%] h-[40%] rounded-[100%] bg-red-400 overflow-hidden mb-8 border-gray-300 hover:w-[44%] hover:h-[44%] transition-all duration-300 ease-in-out overflow-hidden'  >
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='profile pic' className='w-full h-full object-cover'/>
            </div>
            
            <textarea placeholder='Add bio' className='w-[80%] h-[15%] bg-gray-200 rounded border-gray-300 p-3 m-4 text-sm hover:bg-gray-300'/>
            <div className='h-20 w-[80%] flex justify-between items-center'>
                <button className='w-[25%] h-14 bg-black text-white text-semibold rounded'>
                    skip
                </button>

                <button className='w-[25%] h-14 bg-black text-white text-semibold rounded'>
                    Continue
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm2
