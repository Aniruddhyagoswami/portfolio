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

gsap.registerPlugin(useGSAP)

/* ---------------- INELIGIBLE OVERLAY ---------------- */

const Ineligible3D = ({ delay = 1200 }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate('/2d'), delay)
    return () => clearTimeout(t)
  }, [navigate, delay])

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center text-white">
      <div className="text-center p-6 rounded-xl bg-black">
        <h2 className="text-3xl font-bold mb-3">3D Experience Unavailable</h2>
        <p className="opacity-80">
          Your device does not meet performance requirements.
        </p>
        <p className="mt-2 opacity-60">Redirecting to 2D experience…</p>
      </div>
    </div>
  )
}

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
    <div className="h-screen w-full bg-black overflow-hidden relative">
      {canSee3d === false && <Ineligible3D />}

      {canSee3d && (
        <div
          ref={containerRef}
          className="fixed left-2.5 z-10 inset-x-0 top-16 px-6 pointer-events-none"
        >
          <h1 ref={H1Text} className="opacity-0 text-white font-bold text-6xl">
            Hi,
          </h1>

          <p ref={PText} className="opacity-0 mt-6 text-white text-xl">
            Welcome to my portfolio. I am{' '}
            <span className="text-blue-400 font-semibold">
              Aniruddhya Goswami
            </span>
            .
            <br />
            You can visit the
            <Button
              variant="text"
              className="ml-2 pointer-events-auto"
              onClick={() => navigate('/2d')}
            >
              2D site
            </Button>
            or click the Earth to explore 3D.
          </p>
        </div>
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
