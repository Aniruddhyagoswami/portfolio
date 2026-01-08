import React, { use, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { GSDevTools } from "gsap/GSDevTools";
import { useStore } from './store/useStore.js';
import Button from '@mui/material/Button';

// gsap.registerPlugin(GSDevTools); // register the hook to avoid React version discrepancies 
gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 

const App = () => {

const H1Text = useRef(null);
const PText=useRef(null);
const earthAnimation=useStore((state)=>state.earthState);
const setEarthState=useStore((state)=>state.setEarthState);

const myEnding = () => {
    gsap
  .timeline({
    onComplete: () => {
      setEarthState("rotateOnce");
    },
  })
  .to(H1Text.current, { color: "red", duration: 0.5 })
  .to(H1Text.current, { color: "white", duration: 0.5 });

  };
useGSAP(() => {
//all tweens run in direct succession
let tl = gsap.timeline({
  onComplete: myEnding,
  repeatDelay: 1,
  yoyo: true,
});
tl.to(H1Text.current,{duration: 1,opacity:1}).to(PText.current,{duration: 1,opacity:1}, "-=0.5");

  // let eatTimeline =timeline();

// GSDevTools.create();
}); // <-- scope is for selector H1Text (optional)
  return (
    <div className="h-screen w-full bg-black overflow-hidden">
<div className="fixed z-10 inset-x-0 top-16 px-6 pointer-events-none sm:px-10 lg:px-16">
  <div className="max-w-3xl  rounded-xl p-4 sm:p-6">
    <h1
      ref={H1Text}
      className="
        opacity-0
        text-white
        font-bold
        leading-tight
        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
      "
    >
      Hi,
    </h1>

    <p
      ref={PText}
      className="
        opacity-0
        mt-6
        text-white
        leading-relaxed
        text-lg
        sm:text-xl
        md:text-2xl
        lg:text-2xl
      "
    >
      Welcome to my portfolio. I am{" "}
      <span className="text-blue-400 font-semibold">
        Aniruddhya Goswami
      </span>
      , and this is my 3D portfolio built with React Three Fiber.
      It includes both 2D and 3D experiences.

      <span className="block mt-5">
        If you are in a hurry, you can visit the
        <Button
          variant="text"
          className="text-blue-300!  capitalize! ml-1 pointer-events-auto text-lg sm:text-xl"
        >
          2D site
        </Button>
        or just click the earth and continue to explore the 3D site.
      </span>
    </p>
  </div>
</div>



    <Routes>

    <Route path='/' element={<Home />}></Route>
    
    </Routes>
    
    </div>
  )
}

export default App