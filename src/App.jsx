import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
const App = () => {
  return (
    <div className='h-screen'>
    <Routes>

    <Route path='/' element={<Home />}></Route>
    
    </Routes>
    
    </div>
  )
}

export default App