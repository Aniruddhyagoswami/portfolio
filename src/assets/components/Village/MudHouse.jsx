import React, { useMemo } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const MudHouse = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  // Load Textures
  const clayTextures = useTexture({
    map: '/models/hut/textures/clay_plaster_2k/textures/clay_plaster_diff_2k.jpg',
    normalMap: '/models/hut/textures/clay_plaster_2k/textures/clay_plaster_nor_gl_2k.jpg',
    roughnessMap: '/models/hut/textures/clay_plaster_2k/textures/clay_plaster_rough_2k.jpg',
  });

  const thatchTextures = useTexture({
    map: '/models/hut/textures/thatch_roof_angled_2k/textures/thatch_roof_angled_diff_2k.jpg',
    normalMap: '/models/hut/textures/thatch_roof_angled_2k/textures/thatch_roof_angled_nor_gl_2k.jpg',
    roughnessMap: '/models/hut/textures/thatch_roof_angled_2k/textures/thatch_roof_angled_rough_2k.jpg',
    aoMap: '/models/hut/textures/thatch_roof_angled_2k/textures/thatch_roof_angled_ao_2k.jpg',
  });

  // Adjust texture settings
  useMemo(() => {
    // Clay
    clayTextures.map.wrapS = clayTextures.map.wrapT = THREE.RepeatWrapping;
    clayTextures.normalMap.wrapS = clayTextures.normalMap.wrapT = THREE.RepeatWrapping;
    clayTextures.roughnessMap.wrapS = clayTextures.roughnessMap.wrapT = THREE.RepeatWrapping;
    clayTextures.map.repeat.set(2, 1);
    clayTextures.map.colorSpace = THREE.SRGBColorSpace;

    // Thatch
    thatchTextures.map.wrapS = thatchTextures.map.wrapT = THREE.RepeatWrapping;
    thatchTextures.normalMap.wrapS = thatchTextures.normalMap.wrapT = THREE.RepeatWrapping;
    thatchTextures.roughnessMap.wrapS = thatchTextures.roughnessMap.wrapT = THREE.RepeatWrapping;
    thatchTextures.aoMap.wrapS = thatchTextures.aoMap.wrapT = THREE.RepeatWrapping;
    thatchTextures.map.repeat.set(2, 2);
    thatchTextures.map.colorSpace = THREE.SRGBColorSpace;

  }, [clayTextures, thatchTextures]);


  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* House Body (Mud Walls) */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial {...clayTextures} color="#dbb898" />
      </mesh>

      {/* Roof (Thatch) - 4 sided pyramid */}
      <mesh position={[0, 2.5, 0]} rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
        <coneGeometry args={[2, 1.5, 4]} />
        <meshStandardMaterial {...thatchTextures} color="#cfb997" />
      </mesh>

      {/* Plinth / Base */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
         <boxGeometry args={[2.2, 0.2, 2.2]} />
         <meshStandardMaterial color="#5c4033" />
      </mesh>

      {/* Door */}
      <mesh position={[0, 0.9, 1.01]}>
        <planeGeometry args={[0.8, 1.6]} />
        <meshStandardMaterial color="#3d2817" />
      </mesh>

      {/* Veranda Pillars (Optional stylized) */}
      <mesh position={[0.9, 1, 1.05]}>
         <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
         <meshStandardMaterial color="#3d2817" />
      </mesh>
       <mesh position={[-0.9, 1, 1.05]}>
         <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
         <meshStandardMaterial color="#3d2817" />
      </mesh>

    </group>
  );
};

export default MudHouse;
