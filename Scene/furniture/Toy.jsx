import * as THREE from "three";

export default function Toy({
  position = [0, 0, 0]
}) {
  const wood = new THREE.MeshStandardMaterial({
    color: "#8b5a2b",
    roughness: 0.9,
    metalness: 0
  });

  const woodDark = new THREE.MeshStandardMaterial({
    color: "#6e4420",
    roughness: 0.95,
    metalness: 0
  });

  return (
    <group position={position} rotation={[0, 0.5, 0]} scale={0.4}>
      {/* Base platform */}
      <mesh position={[0, 0.15, 0]} material={wood}>
        <boxGeometry args={[1.6, 0.3, 1.2]} />
      </mesh>

      {/* Main walls */}
      <mesh position={[0, 0.6, 0]} material={wood}>
        <boxGeometry args={[1.2, 0.6, 1]} />
      </mesh>

      {/* Left tower */}
      <mesh position={[-0.6, 0.85, 0]} material={woodDark}>
        <boxGeometry args={[0.4, 1.1, 0.4]} />
      </mesh>

      {/* Right tower */}
      <mesh position={[0.6, 0.85, 0]} material={woodDark}>
        <boxGeometry args={[0.4, 1.1, 0.4]} />
      </mesh>

      {/* Center tower */}
      <mesh position={[0, 1.05, 0]} material={woodDark}>
        <boxGeometry args={[0.45, 1.5, 0.45]} />
      </mesh>

      {/* Castle battlements (top teeth) */}
      {[-0.3, 0, 0.3].map((x, i) => (
        <mesh key={i} position={[x, 1.8, 0]} material={wood}>
          <boxGeometry args={[0.15, 0.2, 0.4]} />
        </mesh>
      ))}

      {/* Door */}
      <mesh position={[0, 0.35, 0.51]} material={woodDark}>
        <boxGeometry args={[0.25, 0.35, 0.05]} />
      </mesh>

      {/* Small side blocks (decorative chaos) */}
      <mesh position={[-0.9, 0.4, 0.4]} material={wood}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </mesh>

      <mesh position={[0.9, 0.4, -0.4]} material={wood}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
      </mesh>

      <mesh position={[1.5, 0.2, 1]} rotation={[0, 0.5, 0]} material={wood}>
        <boxGeometry args={[0.3, 0.3, 0.6]} />
      </mesh>

      <mesh position={[-1.5, 0.2, 1]} rotation={[0, 1, 0]} material={wood}>
        <boxGeometry args={[0.3, 0.3, 0.6]} />
      </mesh>

      <mesh position={[1.7, 0.2, -1.2]} rotation={[0, 0.7, 0]} material={wood}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
      </mesh>

      <mesh position={[-2, 0.2, -1]} rotation={[0, 0.5, 0]} material={woodDark}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
      </mesh>

      <mesh position={[0, 0.15, 2.5]} rotation={[0, 0.3, 0]} material={woodDark}>
        <boxGeometry args={[0.3, 0.3, 0.7]} />
      </mesh>

      <mesh position={[-1, 0.15, 2]} rotation={[0, 2.5, 0]} material={wood}>
        <boxGeometry args={[0.3, 0.3, 0.7]} />
      </mesh>
    </group>
  );
}