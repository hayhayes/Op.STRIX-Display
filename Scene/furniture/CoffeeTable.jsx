import * as THREE from "three";

export default function CoffeeTable({position=[0,0,0], rotation=[0,0,0]}){
    const wood = new THREE.MeshStandardMaterial({
        color: "#7d5956",
        roughness: 0.85,
        metalness: 0.05,
    });
    return(
        <group position={position} rotation={rotation}>
        {/* Table Top */}
            <mesh position={[0, 0.6, 0]} material={wood}>
                <boxGeometry args={[3, 0.1, 1.25]} />
            </mesh>
        {/* Legs */}
            <mesh position={[-1.25, 0.3, 0.4]} material={wood}>
                <boxGeometry args={[0.15, 0.6, 0.15]} />
            </mesh>
            <mesh position={[-1.25, 0.3, -0.4]} material={wood}>
                <boxGeometry args={[0.15, 0.6, 0.15]} />
            </mesh>
            <mesh position={[1.25, 0.3, 0.4]} material={wood}>
                <boxGeometry args={[0.15, 0.6, 0.15]} />
            </mesh>
            <mesh position={[1.25, 0.3, -0.4]} material={wood}>
                <boxGeometry args={[0.15, 0.6, 0.15]} />
            </mesh>
        </group>
    )
}