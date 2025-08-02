import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import ProfileModal from './components/ProfileModal';


function Mainlayout() {
  
    
  return (
    <>
        <Navbar/>
        <div className='flex '>
          
           <Sidebar/>
            <Outlet/>
            <div className='hidden lg:block w-[340px] ml-10 h-screen fixed top-0 right-10 bg-gray-100 p-4 z-2'>
            
            </div>
            <ProfileModal/>
        </div>
    </>
  )
}

export default Mainlayout
