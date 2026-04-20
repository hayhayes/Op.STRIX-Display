export default function MrChimera({
  position = [0, 1, 0],
  rotation = [0, 0, 0],
}) {
  const fur = {
    color: "#f39fa7",
    roughness: 0.95,
    metalness: 0.0,
  };

  const muzzle = {
    color: "#fdcdc2",
    roughness: 0.9,
    metalness: 0.0,
  };

  const nose = {
    color: "#804e4e",
    roughness: 0.4,
    metalness: 0.1,
  };

  return (
    <group position={position} rotation={rotation}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 24, 24]} />
        <meshStandardMaterial {...fur} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshStandardMaterial {...fur} />
      </mesh>

      {/* Muzzle */}
      <mesh position={[0, 0.6, 0.75]}>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial {...muzzle} />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.25, 1.05, 0.35]}>
        <coneGeometry args={[0.12, 0.3, 12]} />
        <meshStandardMaterial {...fur} />
      </mesh>

      <mesh position={[0.25, 1.05, 0.35]}>
        <coneGeometry args={[0.12, 0.3, 12]} />
        <meshStandardMaterial {...fur} />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.62, 0.98]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial {...nose} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.15, 0.75, 0.85]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      <mesh position={[0.15, 0.75, 0.85]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Tail */}
      <mesh position={[0, 0.2, -0.7]} rotation={[0.4, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.03, 0.8, 10]} />
        <meshStandardMaterial {...fur} />
      </mesh>
    </group>
  );
}