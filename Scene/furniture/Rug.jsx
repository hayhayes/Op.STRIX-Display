import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import rug from './rug.jpg';

export default function AreaRug({
  position = [0, 0.01, 0],
  rotation=[-Math.PI / 2, 0, 0],
  size = [3, 2],
}) {
  // Optional texture
  const texture = useTexture(rug);

  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
  }

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshStandardMaterial
        color={texture ? "#f3f6f5" : "#6b4f3f"}
        map={texture || null}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}