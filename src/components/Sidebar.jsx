import React,{useState} from 'react'
import { HiColorSwatch, HiMenu } from 'react-icons/hi';
import { IoMdHome } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaRegUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Sidebar({isOpen,toggleSidebar}) {
   const navigate = useNavigate();
   const [isResourcesOpen, setIsResourcesOpen] = useState(true);
    const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
    }
  
  return (
  
    <div className={`${isOpen?'w-1/5':'w-[70px]'} left-0 top-16 overflow-y-auto p-5 h-screen bg-white border-r fixed border-r-gray-300 pt-4 transition-all duration-300 ease-in-out overflow-hidden `}>
        <div className='w-full h-12  rounded-2xl flex items-center justify-end p-2 mb-1'>
          <button className='rounded-full hover:bg-gray-300 fixed' onClick={toggleSidebar}>

            <HiMenu className='text-3xl font-bold'/>
          </button>
        </div>
        <div style={{ display: isOpen ? 'block' : 'none' }} className='flex flex-col items-start justify-start transition-all duration-300 ease-in-out'>
        <div className='mb-2 border-b border-gray-300'>
         
        
        <button className='w-full h-12 rounded-2xl flex items-center justify-start pl-10  mb-1 hover:bg-gray-300' onClick={()=>navigate('/')}>
            <IoMdHome className='text-2xl text-black mr-3'/>
            <p className=''>Home</p>
        </button>
        
        <button className='w-full h-12 rounded-2xl flex items-center justify-start pl-10 mb-1 hover:bg-gray-300' onClick={()=>navigate('/')}>
            <FaArrowTrendUp className='text-2xl text-black mr-3'/>
            <p>Trending</p>
        </button>
        <Link to="/create">
        <button className='w-full h-12 rounded-2xl flex items-center justify-start pl-10 mb-1 hover:bg-gray-300'>
            <IoMdAdd className='text-2xl text-black mr-3'/>
            <p>Create</p>
        </button>
        </Link>
        <button className='w-full h-12  rounded-2xl flex items-center justify-start pl-10 mb-1 hover:bg-gray-300'>
            <IoSearch className='text-2xl text-black mr-3'/>
            <p>Search</p>
        </button>
        </div>
        <div>
          <Link to='/register2'>
          <button className='w-full h-12 rounded-2xl flex items-center justify-between pl-4 pr-10 mb-1 hover:bg-gray-300' onClick={toggleResources} >
            Resources
            <FaAngleDown />
          </button>
          </Link>
          <div  style={{ display: isResourcesOpen ? 'block' : 'none' }}>
          <button className='w-full h-12  rounded-2xl flex items-center justify-start pl-10 mb-1 hover:bg-gray-300'>
            <IoIosHelpCircleOutline className='text-2xl text-black mr-3'/>
            <p>Help</p>
          </button>
          
          <button className='w-full h-12  rounded-2xl flex items-center justify-start pl-10 mb-1 hover:bg-gray-300'>
            <FaLinkedin className='text-2xl text-black mr-3'/>
            Linkedin
          </button>
          <button className='w-full h-12 rounded-2xl flex items-center justify-start pl-10 mb-1 hover:bg-gray-300'>
            <SiGmail className='text-2xl text-black mr-3'/>
            Email Us
          </button>
          <button className='w-full h-12 rounded-2xl flex items-center justify-start pl-10 mb-1 hover:bg-gray-300'>
            <FaRegUser className='text-2xl text-black mr-3'/>
            About Us
          </button>
          </div>
          </div>
          
          
        </div>
       
    </div>
  
  )
}

export default Sidebar
