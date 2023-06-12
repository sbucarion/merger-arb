import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import React, { useState } from "react";

const App = () => {
  return (
    //This template to create as many webpages as you want
    //Each Route is a specific webpage and they call 
    //The respective file that has all webpage info
    <BrowserRouter>
      <Routes>
        {/* Home is for landing page of unauth users */}
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;