import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Stars = ({ count = 900, radius = 180 }) => {
  const starsRef = useRef();

  const { positions, glowIndices } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const glowIndices = [];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);

      // ~15% stars glow
      if (Math.random() < 0.15) glowIndices.push(i);
    }

    return { positions, glowIndices };
  }, [count, radius]);

  useGSAP(() => {
    if (!starsRef.current) return;

    glowIndices.forEach(() => {
      gsap.to(starsRef.current.material, {
        opacity: 0.9,
        duration: 1.8 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 3,
      });
    });
  }, []);

  return (
    <points ref={starsRef} frustumCulled>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
  color="#ffffff"
  size={3.5}                 // ⬅️ bigger (you asked to FEEL them)
  sizeAttenuation={false}    // ⬅️ VERY IMPORTANT
  transparent
  opacity={1}                // ⬅️ must be 1 under ACES
  depthWrite={false}
  depthTest={false}          // ⬅️ REQUIRED (otherwise Earth hides them)
  blending={THREE.AdditiveBlending}
  toneMapped={false}         // ⬅️ MOST IMPORTANT FIX
 />

    </points>
  );
};

export default Stars;
