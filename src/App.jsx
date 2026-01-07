import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GSDevTools } from "gsap/GSDevTools";


const App = () => {
  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
  gsap.registerPlugin(GSDevTools); // register the hook to avoid React version discrepancies 

const text = useRef(null);
const earth = useRef(null);
const myEnding = () => {
  let tl = gsap.timeline();
  tl
  .to(text.current, {color: 'red', duration: 1})
  .to(text.current, {color: 'blue', duration: 1,fontSize:"2rem"})
  ;
}
useGSAP(() => {
//all tweens run in direct succession
let tl = gsap.timeline({
  onComplete: myEnding,
  repeatDelay: 1,
  yoyo: true,
});
tl.to(text.current,{duration: 1, x: "80vw",})
 .to(text.current, {duration: 2, x: "20vw",})
  .to(text.current,{duration: 1, x: "80vw",})

  // let eatTimeline =timeline();

GSDevTools.create();
}); // <-- scope is for selector text (optional)
  return (
    <div className='h-screen'>

     <div className=" fixed z-10">
       <h1 ref={text} className=' text-7xl text-white'>hi</h1>
     </div>
    <Routes>

    <Route path='/' element={<Home />}></Route>
    
    </Routes>
    
    </div>
  )
}

export default App