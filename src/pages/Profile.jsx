import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Avtar from '../components/Avtar';

function Profile() {
    const [post,setPost]=useState(true);
    const [user,setUser]=useState({username:'',bio:''});
    const togglePost=()=>{
        setPost(!post);
    }
    useEffect(()=>{
    const fetchUser=async()=>{
        try{
        const token = localStorage.getItem('token');
        const userFound=await axios.get('http://localhost:3000/api/user/me',
            {headers : {'Authorization': `Bearer ${token}`}}
        )
        setUser({
            username:userFound.data.username,
            bio:userFound.data.bio
        });
        console.log("got the user");
    }
    catch(error){
        console.log("Can't fetch user data",error);
    }
    }
    fetchUser();},[])
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        
            <div className='h-full w-[700px] xl:w-[900px] flex-col flex items-center justify-start pt-30 pl-5 pr-5'>
                <div className='h-[300px] w-full flex'>

                        <Avtar smallSize={'50px'} largeSize={'50px'}/>
                    
                    <div className='h-full w-[60%] '>
                        <div className='h-[60%] w-full flex'>
                            <div className='h-full w-[50%] flex items-end justify-start pl-10'>
                                <p className='text-bold text-[20px]'>{user.username}</p>
                            </div>
                            <div className='h-full w-[50%]'>
                                
                            </div>
                        </div>
                        <div className='h-[40%] w-full pr-20 pl-10'>
                            <p className='text-sm text-gray-600'>{user.bio}</p>
                        </div>
                    </div>
                </div>
                <div className='h-20 w-full flex mt-10 border-b-2 border-gray-300'>
                    <div className='h-full w-[50%] flex items-center justify-center'>
                        <button className={`h-[100%] w-[40%] ${post?'border-b-6 border-blue-600':''}`} onClick={togglePost}>
                            Posts
                        </button>
                        
                    </div>
                    <div className='h-full w-[50%] flex items-center justify-center'>
                        <button className={`h-[100%] w-[40%] ${post?'':'border-b-6 border-blue-600'}`}  onClick={togglePost}>
                            Activity
                        </button>
                    </div>


                </div>
                {post?
                <div className='h-full w-full p-15 flex items-center justify-center'>
                    <p>Nothing is posted</p>
                </div>:
                <div className='h-full w-full p-15 flex items-center justify-center'>
                    <p>No Activity till now</p>
                </div>}
            </div>
        
      
    </div>
  )
}

export default Profile
