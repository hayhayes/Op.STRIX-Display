import { useMemo } from "react";
import { MeshStandardMaterial } from "three";

export default function Sofa({position=[0,0,0], rotation=[0,0,0], color="#57675c"}) {
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: color,
        roughness: 0.8,
        metalness : 0.25,
      }),
    []
  );

  return (
    <group position={position} rotation={rotation}>
      {/* Base */}
      <mesh material={material} position={[0, 0.5, 0]}>
        <boxGeometry args={[4.5, 0.5, 1.5]} />
      </mesh>
      {/* Back */}
      <mesh material={material} position={[0, 1.25, -0.65]}>
        <boxGeometry args={[4.5, 1, 0.3]} />
      </mesh>
      {/* Left Arm */}
      <mesh material={material} position={[-2.25, 1, 0]}>
        <boxGeometry args={[0.3, 1, 1.5]} />
      </mesh>
      {/* Right Arm */}
      <mesh material={material} position={[2.25, 1, 0]}>
        <boxGeometry args={[0.3, 1, 1.5]} />
      </mesh>

      {/* Cushions */}
      <mesh position={[-1.6, 0.9, 0.1]} material={material}>
        <boxGeometry args={[1.02, 0.4, 1.2]} />
      </mesh>

      <mesh position={[-0.55, 0.9, 0.1]} material={material}>
        <boxGeometry args={[1.02, 0.4, 1.2]} />
      </mesh>

      <mesh position={[0.5, 0.9, 0.1]} material={material}>
        <boxGeometry args={[1.02, 0.4, 1.2]} />
      </mesh>
      <mesh position={[1.55, 0.9, 0.1]} material={material}>
        <boxGeometry args={[1.02, 0.4, 1.2]} />
      </mesh>
    </group>
  );
}