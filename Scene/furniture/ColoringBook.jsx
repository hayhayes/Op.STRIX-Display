import { useMemo } from "react";

export default function ColoringBook({ position = [0, 0.3, 0] }) {
  const paper = {
    color: "#f5f2e8",
    roughness: 0.95,
    metalness: 0,
  };

  const cover = {
    color: "#c94f4f",
    roughness: 0.8,
    metalness: 0,
  };

  const lineMat = {
    color: "#333",
    roughness: 1,
  };

  const crayonColors = [
    "#e63946",
    "#457b9d",
    "#2a9d8f",
    "#f4a261",
    "#e9c46a",
    "#6a4c93",
  ];

  const crayons = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      color: crayonColors[i],
      pos: [
        (Math.random() - 0.5) * 1.2,
        0.05,
        (Math.random() - 0.5) * 1.2,
      ],
      rot: [Math.PI / 2, 0, Math.random() * Math.PI],
    }));
  }, []);

  return (
    <group position={position} scale={0.5}>
      {/* Bottom page */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 1.4]} />
        <meshStandardMaterial {...paper} />
      </mesh>

      {/* Top page (slight lift for realism) */}
      <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2, 1.4]} />
        <meshStandardMaterial {...paper} />
      </mesh>

      {/* Cover underneath */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.1, 1.5]} />
        <meshStandardMaterial {...cover} />
      </mesh>

      {/* Simple drawing (circle face) */}
      <mesh position={[0.4, 0.03, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.25, 0.27, 32]} />
        <meshStandardMaterial {...lineMat} />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.3, 0.03, 0.25]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.03, 16]} />
        <meshStandardMaterial {...lineMat} />
      </mesh>

      <mesh position={[0.5, 0.03, 0.25]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.03, 16]} />
        <meshStandardMaterial {...lineMat} />
      </mesh>

      {/* Mouth */}
      <mesh position={[0.4, 0.03, 0.15]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.12, 32, 1, 0, Math.PI]} />
        <meshStandardMaterial {...lineMat} />
      </mesh>

      {/* Crayons */}
      {crayons.map((c, i) => (
        <group key={i} position={c.pos} rotation={c.rot}>
          {/* Body */}
          <mesh>
            <cylinderGeometry args={[0.05, 0.05, 0.6, 12]} />
            <meshStandardMaterial color={c.color} />
          </mesh>

          {/* Tip */}
          <mesh position={[0, 0.35, 0]}>
            <coneGeometry args={[0.05, 0.15, 12]} />
            <meshStandardMaterial color={c.color} />
          </mesh>
        </group>
      ))}
    </group>
  );
}