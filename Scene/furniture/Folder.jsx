import * as THREE from "three";

export default function FolderWithPapers({
  position = [0, 0, 0],
  rotation = [0, 2, 0]
}) {
  const folder = new THREE.MeshStandardMaterial({
    color: "#6b4f3a",
    roughness: 0.9,
    metalness: 0
  });

  const paper = new THREE.MeshStandardMaterial({
    color: "#f5f1e6",
    roughness: 0.95,
    metalness: 0
  });

  const tab = new THREE.MeshStandardMaterial({
    color: "#4a372a",
    roughness: 0.9,
    metalness: 0
  });

  return (
    <group position={position} rotation={rotation} scale={0.75}>
      {/* Folder base */}
      <mesh position={[0, 0, 0]} material={folder}>
        <boxGeometry args={[0.8, 0.02, 0.6]} />
      </mesh>

      {/* Papers stack (inside folder) */}
        <mesh position={[0, 0.015, 0.05]} rotation={[0, 0.1, 0]}>
          <boxGeometry args={[0.75, 0.002, 0.55]} />
          <meshStandardMaterial color="#c4c0b6" roughness={1} metalness={0}/>
        </mesh>
        <mesh position={[0, 0.017, 0.005]} rotation={[0, -0.05, 0]}>
          <boxGeometry args={[0.75, 0.002, 0.55]} />
          <meshStandardMaterial color="#ccc6b1" roughness={1} metalness={0}/>
        </mesh>
        <mesh position={[0, 0.019, 0.02]} rotation={[0, -0.05, 0]}>
          <boxGeometry args={[0.75, 0.002, 0.55]} />
          <meshStandardMaterial color="#f0db8e" roughness={1} metalness={0}/>
        </mesh>
        <mesh position={[0, 0.021, 0.01]} rotation={[0, -0.05, 0]}>
          <boxGeometry args={[0.75, 0.002, 0.55]} />
          <meshStandardMaterial color="#f0ecdf" roughness={1} metalness={0}/>
        </mesh>
        <mesh position={[0, 0.023, -0.2]} rotation={[0, 0.3, 0]}>
          <boxGeometry args={[0.75, 0.002, 0.55]} />
          <meshStandardMaterial color="#fceb6c" roughness={1} metalness={0}/>
        </mesh>
      
    </group>
  );
}