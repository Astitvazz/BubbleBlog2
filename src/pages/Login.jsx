import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore';

function Login() {
  const navigate=useNavigate();
  const {login}= useAuthStore();
  const [formObject,setFormObject]=useState({
    username:'',
    password:''
  })
  const [error,setError]=useState({
    usernameError: '',
    passwordError:''
  })
  const handleChange=(e)=>{
    setFormObject({...formObject,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const testObject = {
      usernameError: '',
      passwordError: ''
    };
    if(!formObject.username) {
      testObject.usernameError = 'Username is required';
     } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(formObject.username)) {
        testObject.usernameError =
          'Username must be 3-16 characters long and can only contain letters, numbers, and underscores';
    }
    
    if(!formObject.password) {
      testObject.passwordError = 'Password is required';
    } else if (!/^\S{9,}$/.test(formObject.password)) {
      testObject.passwordError =
        'Password must be at least 9 characters long and cannot contain spaces';
    }
    setError(testObject);
    if(!testObject.usernameError && !testObject.passwordError) {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/login',formObject) 
    
        const token =response.data.token;
        console.log(token);
        
        login(token);
        alert(response.data.message);
        navigate('/')
      }
      catch(error){
        console.error('Login failed:', error);
        alert(error.response ? error.response.data.message : 'Login failed');
      }
  }
}
  return (
    
      <div className='w-full h-screen flex items-center justify-center'>
    <div className='w-[70%] md:w-[40%] lg:w-[25%] h-[70%] rounded-lg p-8 flex-col items-center justify-center'>
        
        
    
      <div className='mb-3 text-[14px] font-semibold'>Username</div>
      <div className='w-full h-12'>
        <input type='text' onChange={handleChange} placeholder='Enter Username' name='username' className={`pl-3 w-full h-full border-2 ${error.usernameError.length===0?'border-gray-300':'border-red-400'} text-[13px] rounded hover:bg-gray-300`} />
      </div>
      <div className='w-full h-6 mb-4 text-[12px] text-red-500 p-1 mb-6'>{error.usernameError}</div>
    
      
      
    
      
      <div className='mb-3 text-[14px] font-semibold'>Password</div>
      <div className='w-full h-12'>
        <input type='password' onChange={handleChange} placeholder='Enter Password' name='password'className={`pl-3 w-full h-full border-2 ${error.usernameError.length===0?'border-gray-300':'border-red-400'} text-[13px] rounded hover:bg-gray-300`}/>
      </div>
      <div className='w-full h-6 mb-4 text-[12px] text-red-500 p-1 mb-6'>{error.passwordError}</div>
      
     <div className='w-full h-12 flex items-center justify-center mb-4'>
        <button type='button' onClick={handleSubmit} className='h-13 mt-3 bg-black text-white rounded border-2 border-black w-full font-semibold '>Login</button>
    </div>
    <div className='w-full h-12 flex items-center justify-center mb-4'>
        <p className='text-sm text-gray-600'>Don't have an Account?<Link to='/register' className='text-blue-600 font-semibold'>Sign Up</Link></p>
    </div>
   
    </div>
    </div>
  )
}

export default Login
