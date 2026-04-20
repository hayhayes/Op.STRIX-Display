import { useMemo, useState } from "react";
import * as THREE from "three";

export default function WaterJug({ position = [0, 0.9, 0], rotation = [0, 0, 0], scale=0.3, find }) {
  const [found, setFound] = useState(false)

  const plastic = useMemo(() => ({
    color: "#cfe8ff",
    transparent: true,
    opacity: 0.35,
    roughness: 0.1,
    metalness: 0,
  }), []);

  const water = useMemo(() => ({
    color: "#4da6ff",
    transparent: true,
    opacity: 0.6,
    roughness: 0,
    metalness: 0,
  }), []);

  const cap = useMemo(() => ({
    color: "#2a6cff",
    roughness: 0.5,
    metalness: 0.2,
  }), []);

  function handleClick() {
    find('water');
    setFound(true)
  }

  if(found) {
    return null
  }

  return (
    <group position={position} rotation={rotation} scale={scale} onClick={() => handleClick()}>
      {/* Outer plastic jug */}
      <mesh>
        <cylinderGeometry args={[0.6, 0.7, 1.6, 32]} />
        <meshStandardMaterial {...plastic} side={THREE.DoubleSide} />
      </mesh>
        {/* Label */}
        <mesh position={[0, 0.2, 0.65]}>
            <planeGeometry args={[0.8, 0.5]} />
            <meshStandardMaterial color="#ffffff" />
        </mesh>
      {/* Water inside */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.55, 0.65, 1.3, 32]} />
        <meshStandardMaterial {...water} side={THREE.DoubleSide} />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.2, 24]} />
        <meshStandardMaterial {...cap} />
      </mesh>

      {/* Handle */}
      <mesh position={[0.6, 0.3, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.35, 0.08, 16, 32, Math.PI]} />
        <meshStandardMaterial {...plastic} />
      </mesh>
    </group>
  );
}