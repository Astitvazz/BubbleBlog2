import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import img from '../assets/test-design-china-name.png'; 
import { Link } from 'react-router-dom';// Adjust the path as necessary
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [user,setUser]=useState({});
  const navigate = useNavigate();
  
  const fetchuser=async()=>{
    try {
      const response=await axios.get('http://localhost:3000/api/user/me',{
        headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
        
      });
      setUser(response.data);
      
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }
useEffect(()=>{fetchuser()},[]);
const handleLogout=()=>{
  localStorage.removeItem('token');
  setUser({});
  navigate('/');
}
  return (
    <div className=' fixed w-full p-2 h-16 bg-white flex justify-between align-center fixed  border-b border-b-gray-300 top-0  z-50 left-0'>
      
      <img src={img} alt='logo' className='w-[10%] h-full'/>
      
      <input className='w-[28%] pl-5 h-[80%] flex justify-center items-center rounded-2xl border-2 border-gray-300 hover:border-gray-400' placeholder='Search...' type='text'>
      </input>
      <div className='flex items-center pr-14 justify-end w-[30%] h-full'>
       { user.username ? (<>
       {user.username}
        <div className='w-[30%] h-full flex items-center justify-center hover:border-2 border-gray-300 rounded-full mr-2'>
          
        <button onClick={handleLogout} className='ml-2 text-red-500'>Logout</button>
        </div>
        
       
       </>):

      (<>
      <Link to="/login" className='w-[30%] h-full flex items-center justify-center hover:border-2 border-gray-300 rounded-full  mr-2'>
      
        login
        <FaAngleDown className='pl-1'/>
      </Link>
      </>)
}
      </div>
    </div>
  )
}

export default Navbar
