import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import Rightbar from './components/Rightbar';


function Mainlayout() {
    const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
        <Navbar/>
        <div>
           <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Outlet context={{isOpen}}/>
            <Rightbar/>
        </div>
    </>
  )
}

export default Mainlayout
