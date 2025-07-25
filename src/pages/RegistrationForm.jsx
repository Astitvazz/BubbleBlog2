 import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { MdErrorOutline } from "react-icons/md";


function RegistrationForm() {
  const [formObject, setFormObject] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState({
    usernameError: '',
    emailError: '',
    passwordError: ''
  });

  const handleChange = (e) => {
    setFormObject((prev)=>{
      return { ...prev, [e.target.name]: e.target.value };
    });

     setError((prev) => {
    const newError = { ...prev };
    if (name === 'username') {
      delete newError.usernameError;
    } else if (name === 'email') {
      delete newError.emailError;
    }
    return newError;
  });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const testObject = {
      usernameError: '',
      emailError: '',
      passwordError: ''
    };

    // Validation
    if (!formObject.username) {
      testObject.usernameError = 'Username is required';
    } else if (!/^[a-zA-Z0-9_]{3,16}$/.test(formObject.username)) {
      testObject.usernameError =
        'Username must be 3-16 characters long and can only contain letters, numbers, and underscores';
    }

    if (!formObject.email) {
      testObject.emailError = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formObject.email)) {
      testObject.emailError = 'Invalid email format';
    }

    if (!formObject.password) {
      testObject.passwordError = 'Password is required';
    } else if (!/^\S{9,}$/.test(formObject.password)) {
      testObject.passwordError =
        'Password must be at least 9 characters long and cannot contain spaces';
    }

    setError(testObject);

    // If no errors, submit the form
    if (
      !testObject.usernameError &&
      !testObject.emailError &&
      !testObject.passwordError
    ) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/auth/register',
          formObject
        );
        console.log(response.data);
        alert(response.data.message);
      } catch (err) {
        if(err.response && err.response.data) {
          if(err.response && err.response.data) {
            if(err.response.data.field==='username'){
              setError((prev)=>{
                return {...prev, usernameError: err.response.data.message};
              });
            }
            if(err.response.data.field==='email'){
              setError((prev)=>{
                return {...prev, emailError: err.response.data.message};
              });
            }
          }

        }
        else{
        console.error(err);
        alert(err.response ? err.response.data.message : 'Registration failed');
        }
      
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className='w-[70%] md:w-[40%] lg:w-[25%] h-[70%] rounded-lg p-8 flex-col items-center justify-center'>
        {/* Username */}
        <div className='mb-3 text-[14px] font-semibold'>Username</div>
        <div className="w-full h-12">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Username"
            name="username"
            className={`pl-3 w-full h-full border-2 rounded ${error.usernameError.length===0?'border-gray-300':'border-red-400'} text-[13px]  hover:bg-gray-200`}
          />
        </div>
        <div className="w-full h-6 mb-4 text-[12px] text-red-500 p-1 mb-6">
          {error.usernameError}
        </div>

        {/* Email */}
        <div className='mb-3 text-[14px] font-semibold'>Email Address</div>
        <div className="w-full h-12">
          <input
            type="email"
            onChange={handleChange}
            placeholder="Enter Email"
            name="email"
            className={`pl-3 w-full h-full border-2 rounded ${error.emailError.length===0?'border-gray-300':'border-red-400'} text-[13px] hover:bg-gray-200`}
          />
        </div>
        <div className="w-full h-6 mb-4 text-[12px] text-red-500 p-1 mb-6">
          {error.emailError}
        </div>

        {/* Password */}
        <div className='mb-3 text-[14px] font-semibold'>Password</div>
        <div className="w-full h-12">
          <input
            type="password"
            onChange={handleChange}
            placeholder="Enter Password"
            name="password"
            className={`pl-3 w-full h-full border-2 rounded ${error.passwordError.length===0?'border-gray-300':'border-red-400'} text-[13px] hover:bg-gray-200`}
          />
        </div>
        <div className="w-full h-6 mb-4 text-[12px] text-red-500 p-1 mb-6">
          {error.passwordError}
        </div>

        <div className="w-full h-12 flex items-center justify-center mb-4">
          <button
            type="button"
            onClick={submitForm}
            className="h-13 mt-3 bg-black text-white rounded border-2 border-black w-full font-semibold"
          >
            Proceed
          </button>
        </div>
        <div className="w-full h-12 flex items-center justify-center mb-4">
          <p className="text-sm text-gray-600">
            Already have an Account?
            <Link to="/login" className="text-blue-600 font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;