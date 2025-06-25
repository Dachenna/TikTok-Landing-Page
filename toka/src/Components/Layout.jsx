import React from 'react'
import { Router, Routes, Route  } from 'react-router-dom';
import { NavBar } from './NavBar';
import Hero from './Hero';
import { LoadingScreen } from '../LoadingScreen';

export const Layout=() =>{
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
    </Router>
  )
};