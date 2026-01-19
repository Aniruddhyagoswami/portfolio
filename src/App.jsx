import React, { useRef, useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './assets/pages/Home.jsx'
import WorldCv from './assets/pages/WorldCv'
import TwoDsite from './assets/pages/TwoDsite.jsx'
import Button from '@mui/material/Button'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useStore } from './store/useStore.js'
import { canRun3D } from './utils/canRun3D'
import {
  Box,
  Typography,
 
} from "@mui/material";
import Ineligible3D from './utils/Ineligible3D.jsx'

gsap.registerPlugin(useGSAP)

/* ---------------- INELIGIBLE OVERLAY ---------------- */



/* ---------------- APP ---------------- */

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()

  /* ---------- ZUSTAND ---------- */
  const canSee3d = useStore((s) => s.canSee3d)
  const setCanSee3d = useStore((s) => s.setCanSee3d)
  const earthState = useStore((s) => s.earthState)
  const setEarthState = useStore((s) => s.setEarthState)

  const containerRef = useRef(null)
  const H1Text = useRef(null)
  const PText = useRef(null)

  /* ---------- DEVICE CHECK ---------- */
  useEffect(() => {
    let mounted = true
    canRun3D().then((ok) => mounted && setCanSee3d(ok))
    return () => (mounted = false)
  }, [setCanSee3d])

  /* ---------- INTRO TEXT ---------- */
  const onIntroEnd = () => {
    if (location.pathname === '/') {
      setEarthState('rotateOnce')
    }

    gsap.timeline()
      .to(H1Text.current, { color: 'red', duration: 0.3 })
      .to(H1Text.current, { color: 'white', duration: 0.3 })
  }

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.killTweensOf([H1Text.current, PText.current])

    if (location.pathname === '/') {
      gsap.set(containerRef.current, { visibility: 'visible' })

      gsap.timeline({ onComplete: onIntroEnd })
        .to(H1Text.current, { opacity: 1, duration: 1 })
        .to(PText.current, { opacity: 1, duration: 1 }, '-=0.5')
    } else {
      gsap.to([H1Text.current, PText.current], {
        opacity: 0,
        duration: 0.5,
        onComplete: () =>
          gsap.set(containerRef.current, { visibility: 'hidden' }),
      })
    }
  }, [location.pathname])

  /* ---------- ⭐ TEXT DISSOLVE ON EARTH ZOOM ---------- */
  useEffect(() => {
    if (earthState !== 'zoom') return

    gsap.killTweensOf([H1Text.current, PText.current])

    gsap.to([H1Text.current, PText.current], {
      opacity: 0,
      y: -30,
      scale: 0.95,
      filter: 'blur(8px)',
      duration: 0.9,
      ease: 'power3.inOut',
    })
  }, [earthState])

  /* ---------- ✅ FINAL REDIRECT AFTER ZOOM ---------- */
  useEffect(() => {
    if (earthState === 'zoomComplete') {
      navigate('/world')
    }
  }, [earthState, navigate])

  /* ---------------- RENDER ---------------- */

  return (
    <div className={`w-full bg-black relative ${location.pathname === '/2d' ? 'min-h-screen' : 'h-screen overflow-hidden'}`}>
      {canSee3d === false && <Ineligible3D />}

      {canSee3d && (
        <Box
          ref={containerRef}
          sx={{
            position: "fixed",
            insetInline: 0,
            top: 96,
            px: 3,
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Typography
            ref={H1Text}
            variant="h2"
            fontWeight={700}
            sx={{
              opacity: 0,
              color: "text.primary",
            }}
          >
            Hi,
          </Typography>

          <Typography
            ref={PText}
            variant="h6"
            sx={{
              mt: 3,
              maxWidth: 720,
              opacity: 0,
              color: "text.secondary",
              lineHeight: 1.6,
            }}
          >
            Welcome to my portfolio. I’m{" "}
            <Box
              component="span"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              Aniruddhya Goswami
            </Box>
            , a frontend and 3D-focused developer.
            <br />
            This experience adapts to your device—explore the immersive{" "}
            <Box component="span" sx={{ color: "text.primary" }}>
              3D environment
            </Box>{" "}
            when available, or continue with the optimized{" "}
            <Button
              variant="text"
              color="primary"
              sx={{
                px: 0.5,
                ml: 0.5,
                pointerEvents: "auto",
                fontWeight: 500,
                textTransform: "none",
              }}
              onClick={() => navigate("/2d")}
            >
              2D experience
            </Button>
            .
          </Typography>
        </Box>
      )}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world" element={<WorldCv />} />
        <Route path="/2d" element={<TwoDsite />} />
      </Routes>
    </div>
  )
}

export default App
