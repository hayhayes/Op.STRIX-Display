import { useRef, useState } from "react";
import * as THREE from "three";

export default function Flashlight({ position = [0, 1, 2], rotation = [0, 0, 0], scale=0.5, find }) {
  const lightRef = useRef();
  const [found, setFound] = useState(false)

  function handleClick() {
    find('flashlight');
    setFound(true)
  }

  if(found) {
    return null
  }
  
  return (
    <group position={position} rotation={rotation} scale={scale} onClick={() => handleClick()}>
      {/* Handle */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 16]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.6} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.25, 0.2, 0.4, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.4} />
      </mesh>

      {/* Lens */}
      <mesh position={[0, 0.92, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial
          color="#ffffcc"
          emissive="#ffffaa"
          emissiveIntensity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Target (controls direction) */}
      <primitive object={new THREE.Object3D()} position={[0, 2, 0]} />
    </group>
  );
}