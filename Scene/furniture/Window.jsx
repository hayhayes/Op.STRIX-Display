import { useMemo } from "react";
import * as THREE from 'three';

export default function Window({position=[0,3,-4.25], rotation=[0,0,0]}) {
  const frameMaterial = useMemo(() => ({
    color: "#1d0304",
    roughness: 0.8
  }), []);

  const glassMaterial = useMemo(() => ({
    color: "#a8d0e6",
    transparent: true,
    opacity: 0.35,
    roughness: 0,
    metalness: 0.1
  }), []);

  return (
    <group position={position} rotation={rotation}>
      {/* Outer Frame */}
      <mesh>
        <boxGeometry args={[4.5, 2.5, 0.05]} />
        <meshStandardMaterial {...frameMaterial} />
      </mesh>

      {/* Inner cutout (fake by layering) */}
      <mesh position={[0, 0, 0.01]}>
        <boxGeometry args={[4.1, 2.1, 0.05]} />
        <meshStandardMaterial color="#d1fff7" />
      </mesh>

      {/* Glass */}
      <mesh position={[0, 0, 0.07]}>
        <planeGeometry args={[4, 2]} />
        <meshStandardMaterial {...glassMaterial} side={THREE.DoubleSide} />
      </mesh>

      {/* Vertical divider */}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[0.08, 2.1, 0.05]} />
        <meshStandardMaterial {...frameMaterial} />
      </mesh>

      {/* Horizontal divider */}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[4.1, 0.08, 0.05]} />
        <meshStandardMaterial {...frameMaterial} />
      </mesh>
    </group>
  );
}