import * as THREE from "three";
import { useState } from "react";

export default function Bookshelf({position=[0,0,0], rotation=[0,0,0]}) {
  const [books] = useState(() => {
    const shelves = [0.1, 1, 2, 3];
    const bookXPositions = [-0.8, -0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8]

    const bookMaterials = [
      new THREE.MeshStandardMaterial({ color: "#808080" }),
      new THREE.MeshStandardMaterial({ color: "#c0a0a0" }),
      new THREE.MeshStandardMaterial({ color: "#c0c0a0" }),
      new THREE.MeshStandardMaterial({ color: "#806060" }),
      new THREE.MeshStandardMaterial({ color: "#a08080" }),
      new THREE.MeshStandardMaterial({ color: "#e0c0c0" }),
      new THREE.MeshStandardMaterial({ color: "#767b92" }),
      new THREE.MeshStandardMaterial({ color: "#606040" }),
    ];

    return shelves.flatMap((y, shelfIndex) =>
      bookXPositions.map((x, i) => {
        const shelfThickness = 0.15;
        const shelfDepth = 1;

        const shelfTop = y + shelfThickness / 2;

        const bookHeight = Math.random() * (0.8 - 0.4) + 0.4;
        const bookDepth = Math.random() * (0.8 - 0.5) + 0.5;

        const yPos = shelfTop + bookHeight / 2;
        const z = -(shelfDepth / 2) + bookDepth / 2;

        const material = bookMaterials[Math.floor(Math.random() * bookMaterials.length)];

        return {
          key: `${shelfIndex}-${i}`,
          position: [x, yPos, z],
          args: [0.2, bookHeight, bookDepth],
          material
        };
      })
    );
  });
  const wood = new THREE.MeshStandardMaterial({
    color: "#966b67",
    roughness: 0.85,
    metalness: 0.05,
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Left side panel */}
      <mesh position={[-1, 2, 0]} material={wood}>
        <boxGeometry args={[0.2, 4.2, 1]} />
      </mesh>

      {/* Right side panel */}
      <mesh position={[1, 2, 0]} material={wood}>
        <boxGeometry args={[0.2, 4.2, 1]} />
      </mesh>

      {/* Top */}
      <mesh position={[0, 4, 0]} material={wood}>
        <boxGeometry args={[2, 0.2, 1]} />
      </mesh>

      {/* Bottom */}
      <mesh position={[0, 0.1, 0]} material={wood}>
        <boxGeometry args={[2, 0.2, 1]} />
      </mesh>

      {/* Shelves */}
      <mesh position={[0, 1, 0]} material={wood}>
        <boxGeometry args={[2, 0.15, 1]} />
      </mesh>

      <mesh position={[0, 2, 0]} material={wood}>
        <boxGeometry args={[2, 0.15, 1]} />
      </mesh>

      <mesh position={[0, 3, 0]} material={wood}>
        <boxGeometry args={[2, 0.15, 1]} />
      </mesh>

      {/* Books (simple blocks) */}
        {books.map((book) => (
        <mesh
          key={book.key}
          position={book.position}
          material={book.material}
        >
          <boxGeometry args={book.args} />
        </mesh>
      ))}

    </group>
  );
}