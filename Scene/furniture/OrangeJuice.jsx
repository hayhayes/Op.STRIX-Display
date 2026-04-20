// OrangeJuiceGlass.jsx
import * as THREE from "three";

export default function OrangeJuiceGlass({
  position = [0, 0, 0]
}) {
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: "#5198d7",
    transparent: true,
    opacity: 0.28,
    roughness: 0.05,
    metalness: 0.1
  });

  const juiceMaterial = new THREE.MeshStandardMaterial({
    color: "#f7a21b",
    roughness: 0.2,
    metalness: 0,
    transparent: true,
    opacity: 0.92
  });

  const juiceSurfaceMaterial = new THREE.MeshStandardMaterial({
    color: "#ffb347",
    roughness: 0.15,
    metalness: 0,
    transparent: true,
    opacity: 0.85
  });

  return (
    <group position={position} scale={0.4}>
      {/* Glass body */}
      <mesh material={glassMaterial}>
        <cylinderGeometry args={[0.25, 0.3, 0.8, 32, 1, true]} />
      </mesh>

      {/* Glass base */}
      <mesh position={[0, -0.45, 0]} material={glassMaterial}>
        <cylinderGeometry args={[0.28, 0.28, 0.08, 32]} />
      </mesh>

      {/* Orange juice body */}
      <mesh position={[0, -0.15, 0]} material={juiceMaterial}>
        <cylinderGeometry args={[0.23, 0.28, 0.5, 32]} />
      </mesh>

      {/* Juice surface highlight */}
      <mesh position={[0, 0.1, 0]} material={juiceSurfaceMaterial}>
        <cylinderGeometry args={[0.23, 0.23, 0.02, 32]} />
      </mesh>
    </group>
  );
}