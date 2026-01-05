import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
const App = () => {
  return (
    < >
    <Routes>

    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<div>About Page</div>}></Route>
    <Route path='/login' element={<div>Login Page</div>}></Route>
    </Routes>
    
    </>
  )
}

export default App