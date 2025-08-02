import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import useStore from '../store/useStore';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
function ProfileModal() {
    const navigate= useNavigate();
    const {modal } = useStore();
    const {logout}= useAuthStore();
    const handleLogout=()=>{
        logout();
        navigate('/');
        window.location.reload();
    }
  return (
    <div className={`flex flex-col items-start ${modal ? 'block' : 'hidden'} w-[100px] lg:w-[250px] h-[100px] lg:h-[200px] fixed top-16 right-[40px] bg-white p-4 rounded-b-2xl shadow-xl border border-gray-200 z-20 transition-all duration-300`}>
              <div className='flex items-center'>
                <CgProfile className='text-[15px] m-1 lg:text-[25px] lg:m-3' />
                <p className='text-[15px] lg:text-sm text-gray-800'>View profile</p>
              </div>
              
              <div className='flex items-center'>
                <FaUserEdit className='text-[15px] m-1 lg:text-[25px] lg:m-3' />
                <p className='text-[15px] lg:text-sm text-gray-800'>Edit Profile</p>
              </div>
              <div className='flex items-center' onClick={handleLogout}>
                <IoLogOutOutline className='text-[15px] m-1 lg:text-[25px] lg:m-3' />
                <p className='text-[15px] lg:text-sm text-red-500' >Logout</p>
              </div>
              
            </div>
  )
}

export default ProfileModal
