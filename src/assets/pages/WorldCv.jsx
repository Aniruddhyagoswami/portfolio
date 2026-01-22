import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import VillageScene from '../components/Village/VillageScene.jsx'
import * as THREE from "three";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function SceneLoader() {
  const { progress } = useProgress()
  return (
    <Html center>
       <div className="text-white font-bold text-xl">{progress.toFixed(0)} % loaded</div>
    </Html>
  )
}

const WorldCv = () => {
  return (
    <div className="w-full h-screen bg-sky-200">
        <div className="absolute top-4 left-4 z-50">
             <Link to="/">
                <Button variant="contained" color="secondary">Back to Earth</Button>
             </Link>
        </div>

      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
        camera={{ position: [10, 10, 10], fov: 45 }}
      >
        <Suspense fallback={<SceneLoader />}>
           <VillageScene />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default WorldCv
