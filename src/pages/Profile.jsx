import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Avtar from '../components/Avtar';
import { useParams } from 'react-router-dom';
import  useStore  from '../store/useStore';
import Blogcard from '../components/Blogcard';

function Profile() {
    const {isOpen}=useStore();
    const [post,setPost]=useState(true);
    const [user,setUser]=useState({id:'',username:'',bio:''});
    const [blogs,setBlogs]=useState([]);
    const togglePost=()=>{
        setPost(!post);
    }
    const {username}= useParams();
    useEffect(()=>{
    const fetchUser=async()=>{
        try{
        const userFound=await axios.get(`http://localhost:3000/api/user/${username}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        setUser({
            id:userFound.data._id,
            username:userFound.data.username,
            bio:userFound.data.bio
        });
        
        
        console.log("got the user");
    }
    catch(error){
        console.log("Can't fetch user data",error);
    }
    }
    fetchUser();},[username])
    useEffect(()=>{
        const fetchBlogs=async ()=>{
            try {
                const blogsfound=await axios.get(`http://localhost:3000/api/blog/user/${user.id}`,{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                })
                setBlogs(blogsfound.data);
                console.log("blogs found")
            } catch (error) {
                console.error(error.message)

            }
        }
        fetchBlogs()
    },[user.id])
  return (
   <div className={`h-full ml-2 w-full ${isOpen?'xl:w-[77%]':'xl:w-[72%]'} flex justify-end items-center transition-all duration-300 ease-in-out`}>
        
            <div className='h-full w-[600px] lg:w-[800px] flex-col flex items-center justify-between pt-30 pl-5 pr-5'>
                <div className='h-[300px] w-full flex items-center justify-between  bg-blue-600'>

                        <Avtar smallSize="h-[200px] w-[200px]" largeSize="h-[240px] w-[240px]" />
                    
                    <div className='h-full w-[60%] bg-yellow-600 '>
                        <div className='h-[60%] w-full flex bg-red-900'>
                            <div className='h-full w-[50%] flex items-end justify-start pl-10 bg-brown-600'>
                                <p className='text-bold text-[20px]'>{user.username}</p>
                            </div>
                            <div className='h-full w-[50%] bg-gray-400'>
                                
                            </div>
                        </div>
                        <div className='h-[40%] w-full pr-20 pl-10 bg-black'>
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
                    <>
                {blogs.length==0?
                    <div className='h-full w-full p-15 flex items-center justify-center'>
                    <p>Nothing is posted</p>
                    </div>
                    :
                    <>
                    <div className='h-full w-full flex flex-col items-center justify-center'>
                    {
                    blogs.map((blog, index) => (
                        <Blogcard key={index} blog={blog} />
                        ))
                    }
                    </div>
                    </>
                }
                </>:
                <div className='h-full w-full p-15 flex items-center justify-center'>
                    <p>No Activity till now</p>
                </div>}
            </div>
        
      
    </div>
  )
}

export default Profile
