import React, { useEffect, useMemo } from 'react'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useControls } from 'leva' // <--- Import this
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useStore } from '../../store/useStore.js';
import { useThree } from '@react-three/fiber';
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 
// gsap.registerPlugin(GSDevTools); // register the hook to avoid React version discrepancies
const Earth = () => {
  const { scene } = useGLTF('/models/Eart/earth.glb')
  const earthRef = useRef();
  const initialRotation = useRef([ -5.15, 1.1, 2.2 ]);
const setEarthState = useStore((state) => state.setEarthState);
  const earthAnimation=useStore((state)=>state.earthState);
  const { camera } = useThree();
  
const zoomToEarth = () => {
  if (earthAnimation !== 'idleReady') return

  useStore.getState().setEarthState('zoom')

  gsap.to(camera.position, {
    z: 30,
    duration: 2,
    ease: 'power3.inOut',
    onComplete: () => {
      useStore.getState().setEarthState('zoomComplete')
    },
  })
}


useGSAP(() => {
  if (!earthRef.current) return;

  if (earthAnimation === "rotateOnce") {
    gsap.to(earthRef.current.rotation, {
      y: earthRef.current.rotation.y + Math.PI * 2,
      duration: 6,
      ease: "power1.inOut",
      onComplete: () => {
        gsap.to(earthRef.current.rotation, {
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            requestAnimationFrame(() => {
              setEarthState("idleReady");
            });
          },
        });
      },
    });
  }
}, [earthAnimation]);

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
    <group 
    
    ref={earthRef}
    onClick={zoomToEarth}
  onPointerDown={zoomToEarth}
    
    >

<primitive

object={scene}
scale={[-2.5, 2.5, 2.5]} 
// 3. USE THE VALUES FROM THE PANEL x  y  z 
rotation={[-5.15, 1.1, 2.2]} 
/>
      
</group>
      <directionalLight position={[100, 3, 5]} intensity={2} />
      {/* <ambientLight intensity={0.1} /> */}
      {/* <OrbitControls enableZoom={true} /> */}
    </>
  )
}

useGLTF.preload('/models/Eart/earth.glb')

export default Earth