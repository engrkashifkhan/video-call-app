import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Videocomp from './components/Videocomp';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/room/:roomID" element={<Videocomp/>}/>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App