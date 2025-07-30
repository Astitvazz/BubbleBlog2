import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import img from "../assets/test-design-china-name.png";
import { Link } from "react-router-dom"; // Adjust the path as necessary
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avtar from "./Avtar";
import useStore from '../store/useStore';

function Navbar() {
  const {toggleModal  } = useStore();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user,setUser]=useState({});
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token); // set true if token exists
  }, []);
  useEffect(()=>{
      const fetchUser=async()=>{
        try {
          const response=await axios.get('http://localhost:3000/api/user/me',{
            headers:{
              Authorization:`Bearer ${localStorage.getItem("token")}`
            }
          })
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchUser();
  },[])
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };
  
  return (
    <div className=" fixed w-full pt-2 pb-2 h-16 bg-white flex justify-between align-center border-b border-b-gray-300 top-0  z-3">
      <img src={img} alt="logo" className="w-[10%] h-full" />

      <input
        className="w-[28%] pl-5 h-[80%] flex justify-center items-center rounded-2xl border-2 border-gray-300 hover:border-gray-400"
        placeholder="Search..."
        type="text"
      ></input>
      <div className="flex justify-end items-center pr-14 right-0 top-0 w-[30%] h-full">
        {loggedIn ? (
          <>

            <div className="w-[200px] h-full flex items-center justify-center border-gray-300 right-[70px]" onClick={toggleModal}>
            <Avtar smallSize={'40px'} largeSize={'40px'}/>
            <p className="m-2 hidden xl:block" >{user.username}</p>
             
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="w-[30%] h-full flex items-center justify-center hover:border-2 border-gray-300 rounded-full  mr-2"
            >
              login
              <FaAngleDown className="pl-1" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
