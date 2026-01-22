import React from 'react';
import { OrbitControls, Environment, ContactShadows, Sky } from '@react-three/drei';
import MudHouse from './MudHouse';
import { Ground, Pond, Tree, TulsiMancha } from './Environment';

const VillageScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      <Sky sunPosition={[10, 20, 10]} turbidity={10} rayleigh={0.5} mieCoefficient={0.005} mieDirectionalG={0.8} />

      {/* Environment Preset for better reflections/fill light */}
      <Environment preset="sunset" />

      {/* Ground */}
      <Ground />

      {/* Village Elements */}
      <group position={[0, 0, 0]}>
        {/* Main House */}
        <MudHouse position={[0, 0, 0]} rotation={[0, Math.PI / 6, 0]} />

        {/* Another House */}
        <MudHouse position={[-4, 0, -3]} rotation={[0, -Math.PI / 8, 0]} scale={0.9} />

        {/* Third House */}
        <MudHouse position={[3, 0, -4]} rotation={[0, Math.PI / 2, 0]} scale={0.85} />

        {/* Pond */}
        <Pond position={[5, 0.1, 4]} />

        {/* Tulsi Mancha in the courtyard */}
        <TulsiMancha position={[0, 0, 3]} />

        {/* Trees */}
        <Tree position={[-5, 0, 4]} scale={1.2} />
        <Tree position={[7, 0, -2]} scale={1.5} />
        <Tree position={[-6, 0, -6]} scale={1.3} />
        <Tree position={[2, 0, 7]} scale={0.8} />
      </group>

      {/* Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.5} // Limit to not go below ground/too low
        minDistance={5}
        maxDistance={50}
      />
    </>
  );
};

export default VillageScene;
