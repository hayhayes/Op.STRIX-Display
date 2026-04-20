import { useMemo, useState } from "react";
import * as THREE from "three";

export default function FirstAidKit({ position = [0, 0.5, 0], rotation = [0, 0, 0], scale=0.5, find }) {
  const [found, setFound] = useState(false)

  const body = useMemo(() => ({
    color: "#f2f2f2",
    roughness: 0.6,
    metalness: 0.1
  }), []);

  const lid = useMemo(() => ({
    color: "#e6e6e6",
    roughness: 0.5,
    metalness: 0.15
  }), []);

  const red = useMemo(() => ({
    color: "#cc2b2b",
    roughness: 0.4,
    metalness: 0.2
  }), []);

  const label = useMemo(() => ({
    color: "#ffffff",
    roughness: 0.8
  }), []);

  function handleClick() {
    find('firstaidkit');
    setFound(true)
  }

  if(found) {
    return null
  }

  return (
    <group position={position} rotation={rotation} scale={scale} onClick={() => handleClick()}>
      {/* Main body */}
      <mesh scale={[0.98, 0.98, 0.98]}>
        <boxGeometry args={[1.6, 0.9, 0.6]} />
        <meshStandardMaterial {...body} />
      </mesh>

      {/* Lid (slightly offset) */}
      <mesh position={[0, 0.5, 0]} scale={[0.98, 0.98, 0.98]}>
        <boxGeometry args={[1.65, 0.15, 0.65]} />
        <meshStandardMaterial {...lid} />
      </mesh>

      {/* Red cross (front) */}
      <group position={[0, 0, 0.31]}>
        {/* vertical bar */}
        <mesh>
          <boxGeometry args={[0.15, 0.5, 0.02]} />
          <meshStandardMaterial {...red} />
        </mesh>

        {/* horizontal bar */}
        <mesh>
          <boxGeometry args={[0.5, 0.15, 0.02]} />
          <meshStandardMaterial {...red} />
        </mesh>
      </group>

      {/* Label panel */}
      <mesh position={[0, -0.1, 0.31]}>
        <planeGeometry args={[0.9, 0.3]} />
        <meshStandardMaterial {...label} />
      </mesh>

      {/* Latch */}
      <mesh position={[0.65, 0, 0.31]}>
        <boxGeometry args={[0.1, 0.2, 0.1]} />
        <meshStandardMaterial color="#7b70a5" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}