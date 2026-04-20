import * as THREE from "three";

export default function ArmChair({position=[0,0,0], rotation=[0,0,0], color="#343d37"}) {
  const fabric = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.85,
    metalness: 0.1,
  });

  const legs = new THREE.MeshStandardMaterial({
    color: "#3b2a1f",
    roughness: 0.9,
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Seat */}
      <mesh position={[0, 0.4, 0]} material={fabric}>
        <boxGeometry args={[1.4, 0.4, 1.2]} />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 1.1, -0.45]} material={fabric}>
        <boxGeometry args={[1.4, 1.0, 0.3]} />
      </mesh>

      {/* Left Arm */}
      <mesh position={[-0.75, 0.8, 0]} material={fabric}>
        <boxGeometry args={[0.3, 0.8, 1.2]} />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.75, 0.8, 0]} material={fabric}>
        <boxGeometry args={[0.3, 0.8, 1.2]} />
      </mesh>

      {/* Seat Cushion (slightly raised) */}
      <mesh position={[0, 0.73, 0.05]} material={fabric}>
        <boxGeometry args={[1.2, 0.25, 1.0]} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.5, 0.1, -0.4]} material={legs}>
        <boxGeometry args={[0.15, 0.3, 0.15]} />
      </mesh>

      <mesh position={[0.5, 0.1, -0.4]} material={legs}>
        <boxGeometry args={[0.15, 0.3, 0.15]} />
      </mesh>

      <mesh position={[-0.5, 0.1, 0.4]} material={legs}>
        <boxGeometry args={[0.15, 0.3, 0.15]} />
      </mesh>

      <mesh position={[0.5, 0.1, 0.4]} material={legs}>
        <boxGeometry args={[0.15, 0.3, 0.15]} />
      </mesh>
    </group>
  );
}