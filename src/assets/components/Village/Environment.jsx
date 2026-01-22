import React from 'react';
import { Sphere, Cylinder } from '@react-three/drei';

export const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#557a46" roughness={1} />
    </mesh>
  );
};

export const Pond = ({ position }) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={position} receiveShadow>
      <circleGeometry args={[4, 32]} />
      <meshStandardMaterial color="#4da2ff" roughness={0.2} metalness={0.1} transparent opacity={0.8} />
    </mesh>
  );
};

export const Tree = ({ position, scale = 1 }) => {
  return (
    <group position={position} scale={scale}>
      {/* Trunk */}
      <mesh position={[0, 1, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 2]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>
      {/* Leaves */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>
      <mesh position={[0.8, 3, 0.5]} scale={0.6} castShadow>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#3d6a37" />
      </mesh>
       <mesh position={[-0.8, 2.8, -0.5]} scale={0.7} castShadow>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>
    </group>
  );
};

export const TulsiMancha = ({ position, rotation=[0,0,0] }) => {
    return (
        <group position={position} rotation={rotation}>
            {/* Base */}
            <mesh position={[0, 0.25, 0]} castShadow>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="#e0e0e0" />
            </mesh>
             <mesh position={[0, 0.6, 0]} castShadow>
                <boxGeometry args={[0.4, 0.3, 0.4]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            {/* Plant */}
             <mesh position={[0, 0.9, 0]} castShadow>
                <cylinderGeometry args={[0.02, 0.02, 0.4]} />
                <meshStandardMaterial color="#3d2817" />
            </mesh>
            <mesh position={[0, 1.1, 0]} castShadow>
                <sphereGeometry args={[0.15]} />
                <meshStandardMaterial color="green" />
            </mesh>
        </group>
    )
}
