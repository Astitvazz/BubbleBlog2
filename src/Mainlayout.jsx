import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import ProfileModal from './components/ProfileModal';


function Mainlayout() {
  
    
  return (
    <>
        <Navbar/>
        <div className='flex  '>
          
           <Sidebar/>
            <Outlet/>
            <div className="fixed top-0 hidden lg:block right-8 w-[340px] pt-20 h-screen pl-7 bg-gray-100 p-3 flex items-center justify-center z-10">
                <div className="bg-white w-[95%] h-[99%] rounded-xl shadow-xl "></div>
            </div>
            <ProfileModal/>
        </div>
    </>
  )
}

export default Mainlayout
