import * as THREE from "three";

export default function Plant({position=[0,0,0], rotation=[0,0,0]}) {
  const potMat = new THREE.MeshStandardMaterial({
    color: "#8b5a2b",
    roughness: 0.8,
  });

  const soilMat = new THREE.MeshStandardMaterial({
    color: "#3e2f1c",
    roughness: 1,
  });

  const leafMat = new THREE.MeshStandardMaterial({
    color: "#2e7d32",
    roughness: 0.9,
  });

  const stemMat = new THREE.MeshStandardMaterial({
    color: "#3a5f2a",
    roughness: 0.9,
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Pot */}
      <mesh position={[0, 0.25, 0]} material={potMat}>
        <cylinderGeometry args={[0.4, 0.5, 0.5, 16]} />
      </mesh>

      {/* Soil */}
      <mesh position={[0, 0.45, 0]} material={soilMat}>
        <cylinderGeometry args={[0.38, 0.38, 0.1, 16]} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, 0.9, 0]} material={stemMat}>
        <cylinderGeometry args={[0.05, 0.05, 0.9, 8]} />
      </mesh>

      {/* Leaves (layered cones rotated outward) */}
      <mesh position={[0, 1.2, 0]} rotation={[0.3, 0, 0]} material={leafMat}>
        <coneGeometry args={[0.5, 0.8, 8]} />
      </mesh>

      <mesh position={[0, 1.1, 0]} rotation={[0.3, Math.PI / 2, 0]} material={leafMat}>
        <coneGeometry args={[0.5, 0.8, 8]} />
      </mesh>

      <mesh position={[0, 1.1, 0]} rotation={[0.3, Math.PI, 0]} material={leafMat}>
        <coneGeometry args={[0.5, 0.8, 8]} />
      </mesh>

      <mesh position={[0, 1.1, 0]} rotation={[0.3, -Math.PI / 2, 0]} material={leafMat}>
        <coneGeometry args={[0.5, 0.8, 8]} />
      </mesh>

      {/* Top leaf */}
      <mesh position={[0, 1.5, 0]} material={leafMat}>
        <coneGeometry args={[0.4, 0.6, 8]} />
      </mesh>
    </group>
  );
}
