export function WallArt1({
  position = [0, 2, -5.9],
  rotation = [0, 0, 0],
}) {
  const frame = {
    color: "#610a10",
    roughness: 0.7,
    metalness: 0.2,
  };

  const canvas = {
    color: "#f5f2e8",
    roughness: 0.9,
    metalness: 0,
  };

  return (
    <group position={position} rotation={rotation} scale={0.8}>
      {/* Frame */}
      <mesh>
        <boxGeometry args={[2.6, 1.8, 0.1]} />
        <meshStandardMaterial {...frame} />
      </mesh>

      {/* Canvas */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[2.2, 1.4]} />
        <meshStandardMaterial {...canvas} />
      </mesh>

      {/* Abstract shapes (paint) */}
      <mesh position={[-0.5, 0.2, 0.07]}>
        <circleGeometry args={[0.4, 24]} />
        <meshStandardMaterial color="#fab3ad" />
      </mesh>

      <mesh position={[0.6, -0.2, 0.07]}>
        <circleGeometry args={[0.3, 24]} />
        <meshStandardMaterial color="#8da99b" />
      </mesh>

      <mesh position={[0.2, 0.4, 0.07]}>
        <circleGeometry args={[0.25, 24]} />
        <meshStandardMaterial color="#2c2827" />
      </mesh>
    </group>
  );
}

export function WallArt2({
  position = [2.5, 2, -5.95],
  rotation = [0, 0, 0],
}) {
  const frame = {
    color: "#610a10",
    roughness: 0.7,
    metalness: 0.25,
  };

  const mat = {
    color: "#eae4d8",
    roughness: 0.9,
    metalness: 0,
  };

  return (
    <group position={position} rotation={rotation}>
      {/* Outer frame */}
      <mesh>
        <boxGeometry args={[2.8, 1.6, 0.12]} />
        <meshStandardMaterial {...frame} />
      </mesh>

      {/* Matte (border inside frame) */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[2.4, 1.2]} />
        <meshStandardMaterial {...mat} />
      </mesh>

      {/* Painting base */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[2.1, 0.95]} />
        <meshStandardMaterial color="#cfc3a6" />
      </mesh>

      {/* Simple "landscape" layers */}
      {/* Sky */}
      <mesh position={[0, 0.15, 0.07]}>
        <planeGeometry args={[2.1, 0.5]} />
        <meshStandardMaterial color="#b7d0e8" />
      </mesh>

      {/* Distant hills */}
      <mesh position={[0, -0.05, 0.071]}>
        <planeGeometry args={[2.1, 0.4]} />
        <meshStandardMaterial color="#9fb38a" />
      </mesh>

      {/* Foreground */}
      <mesh position={[0, -0.35, 0.072]}>
        <planeGeometry args={[2.1, 0.3]} />
        <meshStandardMaterial color="#6f8a5c" />
      </mesh>
    </group>
  );
}