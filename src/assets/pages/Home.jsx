import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import Earth from '../components/Earth.jsx'
import { useStore } from '../../store/useStore.js'

function SceneLoader() {
  const { progress } = useProgress()
  return <Html center className="text-white">{progress.toFixed(0)} % loaded</Html>
}

const Home = () => {
  const canSee3d=useStore((state)=>state.canSee3d);
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black'>
      
      {/* FIXED CAMERA:
         [0, 0, 8] 
         0 = x (centered horizontally)
         0 = y (centered vertically)
         8 = z (distance away from the object)
      */}
      {canSee3d &&(<Canvas camera={{ position: [0, 0, 100], fov: 70 }}>
        
        <Suspense fallback={<SceneLoader />}>
          <Earth  />
        </Suspense>

      </Canvas>)}
    </div>
  )
}

export default Home