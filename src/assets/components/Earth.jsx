import React, { useEffect, useMemo } from 'react'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva' // <--- Import this
const Earth = () => {
  const { scene } = useGLTF('/models/Eart/earth.glb')
 
  const [albedo, bump, clouds, oceanMask, lights] = useTexture([
    '/models/Eart/textures/earthalbedo.png',
    '/models/Eart/textures/earthbump.jpg',
    '/models/Eart/textures/cloudsearth.png',
    '/models/Eart/textures/earthlandoceanmask.png',
    '/models/Eart/textures/earthnight_lights_modified.png'
  ])

  useEffect(() => {
    [albedo, bump, clouds, oceanMask, lights].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace
      texture.flipY = false
    })
  }, [albedo, bump, clouds, oceanMask, lights])

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
      opacity: 0.1,
      depthWrite: false,
      side: THREE.BackSide,
      map: null
    })
  }, [])

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (child.name === 'earth') {
          child.material = earthMaterial
        } 
        else if (child.name === 'clouds') {
          child.material = cloudMaterial
          child.scale.setScalar(1.02)
        } 
        else if (child.name === 'atmo') {
          child.material = atmoMaterial
          child.scale.setScalar(1.03)
        }
      }
    })
  }, [scene, earthMaterial, cloudMaterial, atmoMaterial])

  return (
    <>
<primitive 
        object={scene} 
        scale={[-2.5, 2.5, 2.5]} 
        // 3. USE THE VALUES FROM THE PANEL x  y  z 
        rotation={[-5.15, 1.1, 2.2]} 
      />
      
      <directionalLight position={[100, 3, 5]} intensity={2} />
      {/* <ambientLight intensity={0.1} /> */}
      {/* <OrbitControls enableZoom={true} /> */}
    </>
  )
}

useGLTF.preload('/models/Eart/earth.glb')

export default Earth