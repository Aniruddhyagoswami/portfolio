import React, { useEffect, useMemo } from 'react'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const Earth = () => {
  const { scene } = useGLTF('/models/Eart/earth.glb')

  // 1. Load Textures
  const [albedo, bump, clouds, oceanMask, lights] = useTexture([
    '/models/Eart/textures/earthalbedo.png',
    '/models/Eart/textures/earthbump.jpg', // Ensure this file is really a .jpg on your disk!
    '/models/Eart/textures/cloudsearth.png',
    '/models/Eart/textures/earthlandoceanmask.png',
    '/models/Eart/textures/earthnight_lights_modified.png'
  ])

  // Fix color space and flipping
  useEffect(() => {
    [albedo, bump, clouds, oceanMask, lights].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace
      texture.flipY = false
    })
  }, [albedo, bump, clouds, oceanMask, lights])

  // 2. Define Materials (Optimized)
  const earthMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: albedo,
      bumpMap: bump,
      bumpScale: 0.05,
      roughnessMap: oceanMask,
      emissiveMap: lights,
      emissive: new THREE.Color(0xffff88),
      emissiveIntensity: 0.8,
    })
  }, [albedo, bump, oceanMask, lights])

  const cloudMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: clouds,
      transparent: true,
      opacity: 1,
      depthWrite: false, 
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending, 
    })
  }, [clouds])

  const atmoMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#4da2ff'),
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      side: THREE.BackSide,
      map: null
    })
  }, [])

  // 3. Apply Materials & FIX Z-FIGHTING (Scaling)
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        
        // EARTH: Base Layer
        if (child.name === 'earth') {
          child.material = earthMaterial
        } 
        
        // CLOUDS: Middle Layer -> Scale up slightly (1.02)
        else if (child.name === 'clouds') {
          child.material = cloudMaterial
          child.scale.setScalar(1.02) // <--- CRITICAL FIX FOR GLITCHING
        } 
        
        // ATMOSPHERE: Outer Layer -> Scale up more (1.04)
        else if (child.name === 'atmo') {
          child.material = atmoMaterial
          child.scale.setScalar(1.04) // <--- CRITICAL FIX FOR GLITCHING
        }
      }
    })
  }, [scene, earthMaterial, cloudMaterial, atmoMaterial])

  return (
    <>
      <primitive object={scene} scale={2.5} />
      <directionalLight position={[5, 3, 5]} intensity={2} />
      <ambientLight intensity={0.1} />
      <OrbitControls enableZoom={true} />
    </>
  )
}

useGLTF.preload('/models/Eart/earth.glb')

export default Earth