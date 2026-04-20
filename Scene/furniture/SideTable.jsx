// SideTable.jsx
import * as THREE from "three";

export default function SideTable({
  position = [2, 0, 0],
  color = "#644745"
}) {
  const wood = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.85,
    metalness: 0.05
  });

  const legMaterial = new THREE.MeshStandardMaterial({
    color: "#4b3533",
    roughness: 0.9
  });

  return (
    <group position={position}>
      {/* Top */}
      <mesh position={[0, 1.2, 0]} material={wood}>
        <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
      </mesh>

      {/* Leg */}
      <mesh position={[0, 0.7, 0]} material={legMaterial}>
        <cylinderGeometry args={[0.08, 0.1, 1, 16]} />
      </mesh>

      {/* Optional small foot */}
      <mesh position={[0, 0.2, 0]} material={legMaterial}>
        <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
      </mesh>

      <Magazines position={[0, 1.3, 0]}/>
    </group>
  );
}

function Magazines({
  position = [0, 0, 0],
  count = 5
}) {
  const paper = new THREE.MeshStandardMaterial({
    color: "#e6e2d6",
    roughness: 0.95,
    metalness: 0
  });

  const covers = [
    "#b23a48", // red cover
    "#2e5a88", // blue cover
    "#3a6b4f", // green cover
    "#8a6b3a"  // brown cover
  ];

  return (
    <group position={position} scale={0.8}>
      {Array.from({ length: count }).map((_, i) => {
        const thickness = 0.02;
        const width = 0.6;
        const height = 0.9;

        return (
          <group
            key={i}
            position={[
              (Math.random() - 0.5) * 0.05,
              i * thickness,
              (Math.random() - 0.5) * 0.05
            ]}
            rotation={[0, (Math.random() - 0.7) * 0.3, 0]}
          >
            {/* Pages */}
            <mesh material={paper}>
              <boxGeometry args={[width, thickness, height]} />
            </mesh>

            {/* Cover (slightly offset top face) */}
            <mesh position={[0, thickness / 2 + 0.001, 0]}>
              <boxGeometry args={[width, 0.001, height]} />
              <meshStandardMaterial
                color={covers[i % covers.length]}
                roughness={0.6}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}