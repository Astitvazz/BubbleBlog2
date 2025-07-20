import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './pages/Login'
import Landing from './pages/Landing';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ImageCarousel from './components/ImageCarousel';
import Blogcard from './components/Blogcard';

function App() {
  const blog = {
    title: "My Trip to the Mountains",
    description: "It was an amazing experience with breathtaking views and peaceful trails.",
    images: [
    'https://assets.entrepreneur.com/content/3x2/2000/20150416224111-tyler-durden-fight-club.jpeg','https://wallpapercave.com/wp/wp3666382.jpg','https://i.pinimg.com/736x/18/55/37/185537f269a9c34cd5847c4a8c92dd5a.jpg'
    ]
  };

  const Blogarray = [blog, blog, blog, blog, blog];
  
  return (
    <>
    <Landing Blogarray={Blogarray} />
    </>
  )
}

export default App
