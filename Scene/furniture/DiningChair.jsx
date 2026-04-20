export default function DiningChair({position=[0,0,0], rotation=[0,0,0]}) {
  return (
    <group position={position} rotation={rotation}>
      {/* Seat */}
      <mesh position={[0, 0.95, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.8]} />
        <meshStandardMaterial color="#644745" />
      </mesh>

      {/* Backrest */}
      <mesh position={[0, 1.4, -0.35]}>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#644745" />
      </mesh>

      {/* Front Left Leg */}
      <mesh position={[-0.35, 0.5, 0.35]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#4b3533" />
      </mesh>

      {/* Front Right Leg */}
      <mesh position={[0.35, 0.5, 0.35]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#4b3533" />
      </mesh>

      {/* Back Left Leg */}
      <mesh position={[-0.35, 0.5, -0.35]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#4b3533" />
      </mesh>

      {/* Back Right Leg */}
      <mesh position={[0.35, 0.5, -0.35]}>
        <boxGeometry args={[0.1, 0.9, 0.1]} />
        <meshStandardMaterial color="#4b3533" />
      </mesh>
    </group>
  );
}