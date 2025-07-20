import React,{useState} from 'react'

import ImageCarousel from '../components/ImageCarousel';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Blogcard from '../components/Blogcard';
import Blogholder from './Blogholder';
import Rightbar from '../components/Rightbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authlayout from '../Authlayout';
import Mainlayout from '../Mainlayout';
import Login from './Login';

import RegistrationForm from './RegistrationForm';
import CreatePost from './Createpost';
import RegistrationForm2 from './RegistrationForm2';
import Profile from './Profile';


function Landing({Blogarray,isOpen}) {
  
  return(
    <>
    <Router>
      <Routes>
        <Route element={<Authlayout/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
          <Route path='/register2' element={<RegistrationForm2/>}/>
        </Route>

        <Route element={<Mainlayout/>}>
          <Route path="/" element={<Blogholder isOpen={isOpen} Blogarray={Blogarray}/>}/>
          <Route path='/create' element={<CreatePost isOpen={isOpen}/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )

  
}

export default Landing