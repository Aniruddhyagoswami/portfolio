import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import Earth from '../components/Earth.jsx'

function Loader() {
  const { progress } = useProgress()
  return <Html center className="text-white">{progress.toFixed(0)} % loaded</Html>
}

const Home = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black'>
      {/* Camera moved to [0, 0, 8] to see the Earth clearly */}
      <Canvas camera={{ position: [0, 50, 10] }}>
        
        {/* THIS WAS MISSING: Suspense handles the loading state */}
        <Suspense fallback={<Loader />}>
          <Earth />
        </Suspense>

      </Canvas>
    </div>
  )
}

export default Home