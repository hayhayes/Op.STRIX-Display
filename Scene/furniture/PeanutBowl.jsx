import { useMemo } from "react";
import * as THREE from 'three';

export default function PeanutBowl({ position = [0, 0.3, 0] }) {
  const bowlMat = {
    color: "#e8dcc7",
    roughness: 0.9,
    metalness: 0,
  };

  const peanutMat = {
    color: "#c89b5a",
    roughness: 0.8,
    metalness: 0,
  };

  // Generate random peanuts once
  const peanuts = useMemo(() => {
    const items = [];
    for (let i = 0; i < 35; i++) {
      items.push({
        pos: [
          (Math.random() - 0.5) * 0.8,
          Math.random() * 0.15,
          (Math.random() - 0.5) * 0.8,
        ],
        rot: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: 0.08 + Math.random() * 0.04,
      });
    }
    return items;
  }, []);

  return (
    <group position={position} scale={0.3}>
      {/* Bowl */}
      <mesh>
        <cylinderGeometry args={[0.6, 0.65, 0.25, 32, 1, true]} />
        <meshStandardMaterial {...bowlMat} side={2} />
      </mesh>

      {/* Bowl bottom */}
      <mesh position={[0, -0.12, 0]} rotation={[Math.PI / 2,0,0]}>
        <circleGeometry args={[0.6, 32]} />
        <meshStandardMaterial {...bowlMat} side={THREE.DoubleSide}/>
      </mesh>

      {/* Peanuts */}
      {peanuts.map((p, i) => (
        <mesh
          key={i}
          position={[p.pos[0], p.pos[1], p.pos[2]]}
          rotation={p.rot}
          scale={p.scale}
        >
          {/* peanut = squished sphere */}
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial {...peanutMat} />
        </mesh>
      ))}
    </group>
  );
}