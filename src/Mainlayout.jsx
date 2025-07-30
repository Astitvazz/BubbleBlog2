import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";
import useStore from './store/useStore';

function Mainlayout() {
  const {modal } = useStore();
    const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
        <Navbar/>
        <div className='flex '>
          
           <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
            <Outlet context={{isOpen}}/>
            <div className='hidden lg:block w-[340px] ml-10 h-screen fixed top-0 right-10 bg-gray-100 p-4 z-2'>
            
            </div>
            <div className={`${modal ? 'block' : 'hidden'} w-[100px] lg:w-[250px] h-[100px] lg:h-[200px] fixed top-17 right-[40px] bg-white p-4 rounded-b-2xl shadow-xl border border-gray-200 z-20 transition-all duration-300`}>
                  
            </div>
        </div>
    </>
  )
}

export default Mainlayout
