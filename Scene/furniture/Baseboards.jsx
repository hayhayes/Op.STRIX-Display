export default function Baseboards({
  roomWidth = 12,
  roomDepth = 12,
  height = 0.2,
  thickness = 0.05,
}) {
  const material = {
    color: "#e8e3d9", // off-white trim
    roughness: 0.8,
    metalness: 0,
  };

  const y = height / 2; // sit on floor

  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, y, -roomDepth / 2 + thickness / 2 + 0.1]}>
        <boxGeometry args={[roomWidth, height, thickness]} />
        <meshStandardMaterial {...material} />
      </mesh>

      {/* Left wall */}
      <mesh position={[-roomWidth / 2 + thickness / 2 + 0.1, y, 0]}>
        <boxGeometry args={[thickness, height, roomDepth]} />
        <meshStandardMaterial {...material} />
      </mesh>

      {/* Right wall */}
      <mesh position={[roomWidth / 2 - thickness / 2 - 0.1, y, 0]}>
        <boxGeometry args={[thickness, height, roomDepth]} />
        <meshStandardMaterial {...material} />
      </mesh>
    </group>
  );
}