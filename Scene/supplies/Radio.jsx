import { useMemo, useState } from "react";
import * as THREE from "three";

export default function Radio({ position = [0, 0.5, 0], rotation = [0, 0, 0], scale=0.4, find }) {
  const [found, setFound] = useState(false)

  const body = useMemo(() => ({
    color: "#2c2c2c",
    roughness: 0.7,
    metalness: 0.2
  }), []);

  const speaker = useMemo(() => ({
    color: "#111",
    roughness: 1
  }), []);

  const metal = useMemo(() => ({
    color: "#999",
    roughness: 0.4,
    metalness: 0.8
  }), []);

  const screen = useMemo(() => ({
    color: "#1a1a1a",
    emissive: "#334455",
    emissiveIntensity: 0.4
  }), []);

  function handleClick() {
    find('radio');
    setFound(true)
  }

  if(found) {
    return null
  }

  return (
    <group position={position} rotation={rotation} scale={scale} onClick={() => handleClick()}>
      {/* Main Body */}
      <mesh>
        <boxGeometry args={[2.2, 1.2, 0.9]} />
        <meshStandardMaterial {...body} />
      </mesh>

      {/* Speaker grille */}
      <mesh position={[-0.6, 0, 0.46]}>
        <boxGeometry args={[0.9, 0.8, 0.05]} />
        <meshStandardMaterial {...speaker} />
      </mesh>

      {/* Display */}
      <mesh position={[0.5, 0.2, 0.46]}>
        <boxGeometry args={[0.9, 0.35, 0.05]} />
        <meshStandardMaterial {...screen} />
      </mesh>

      {/* Frequency bar */}
      <mesh position={[0.5, -0.2, 0.46]}>
        <boxGeometry args={[0.9, 0.15, 0.03]} />
        <meshStandardMaterial color="#88aaff" emissive="#88aaff" emissiveIntensity={0.6} />
      </mesh>

      {/* Knob (volume) */}
      <mesh position={[0.9, -0.4, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 20]} />
        <meshStandardMaterial {...metal} />
      </mesh>

      {/* Knob (tuning) */}
      <mesh position={[0.5, -0.4, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 20]} />
        <meshStandardMaterial {...metal} />
      </mesh>

      {/* Antenna */}
      <mesh position={[0.6, 1, 0]} rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.03, 0.03, 1.5, 12]} />
        <meshStandardMaterial {...metal} />
      </mesh>
    </group>
  );
}