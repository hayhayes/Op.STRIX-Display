import { useState } from "react";

export default function Whistle({
  position = [0, 1, 0],
  rotation = [0, 0, 0],
  scale=0.33,
  find
}) {
  const [found, setFound] = useState(false)

  const body = {
    color: "#c0c0c0",
    roughness: 0.35,
    metalness: 0.8,
  };

  const accent = {
    color: "#d9d9d9",
    roughness: 0.4,
    metalness: 0.6,
  };
  
  function handleClick() {
    find('whistle');
    setFound(true)
  }

  if(found) {
    return null
  }
  
  return (
    <group position={position} rotation={rotation} scale={scale} onClick={() => handleClick()}>
      {/* Mouthpiece */}
      <mesh position={[0.03, 0, 0.1]}>
        <boxGeometry args={[0.4, 0.3, 0.2]} />
        <meshStandardMaterial {...body} />
      </mesh>

      {/* Body */}
      <mesh position={[0.25, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.3, 30]} rotation={[0, 0, Math.PI / 2]} />
        <meshStandardMaterial {...body} />
      </mesh>

      {/* Air hole */}
      <mesh position={[0.23, 0, 0.18]}>
        <cylinderGeometry args={[0.05, 0.05, 0.2, 12]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Key ring loop */}
      <mesh position={[0.51, 0, 0.05]}>
        <torusGeometry args={[0.07, 0.02, 12, 24]} />
        <meshStandardMaterial {...accent} />
      </mesh>
    </group>
  );
}