export default function TeaSet({position=[0,0,0], rotation=[0,0,0]}) {
  return (
    <group position={position} rotation={rotation} scale={0.5}>
      <Teapot position={[0, 0.5, 0]} />
      <Teacup position={[0.8, 0.25, 0.3]} />
      <Teacup position={[-0.8, 0.25, 0.2]} />
    </group>
  );
}

export function Teapot({ position = [0, 0.5, 0] }) {
  const ceramic = {
    color: "#f1e7d8",
    roughness: 0.9,
    metalness: 0,
  };

  const handleMat = {
    color: "#3b2f2f",
    roughness: 0.6,
    metalness: 0.2,
  };

  return (
    <group position={position}>
      {/* Body */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial {...ceramic} />
      </mesh>

      {/* Lid */}
      <mesh position={[0, 0.45, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial {...ceramic} />
      </mesh>

      {/* Lid knob */}
      <mesh position={[0, 0.65, 0]}>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial {...handleMat} />
      </mesh>

      {/* Spout */}
      <mesh position={[0.45, 0.1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.12, 0.5, 16]} />
        <meshStandardMaterial {...ceramic} />
      </mesh>

      {/* Handle */}
      <mesh position={[-0.45, 0.1, 0]}>
        <torusGeometry args={[0.25, 0.05, 16, 32]} />
        <meshStandardMaterial {...handleMat} />
      </mesh>
    </group>
  );
}

export function Teacup({ position = [0, 0.25, 0] }) {
  const ceramic = {
    color: "#f1e7d8",
    roughness: 0.9,
    metalness: 0,
  };

  return (
    <group position={position}>
      {/* Cup */}
      <mesh>
        <cylinderGeometry args={[0.25, 0.2, 0.3, 24]} />
        <meshStandardMaterial {...ceramic} />
      </mesh>

      {/* Inner tea */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.22, 0.18, 0.05, 24]} />
        <meshStandardMaterial color="#5c3a21" />
      </mesh>

      {/* Handle */}
      <mesh position={[0.3, 0.05, 0]}>
        <torusGeometry args={[0.12, 0.03, 12, 24]} />
        <meshStandardMaterial {...ceramic} />
      </mesh>
    </group>
  );
}