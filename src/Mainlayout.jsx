import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";


function Mainlayout() {
    const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
        <Navbar/>
        <div className='flex'>
           <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Outlet context={{isOpen}}/>
            
        </div>
    </>
  )
}

export default Mainlayout
