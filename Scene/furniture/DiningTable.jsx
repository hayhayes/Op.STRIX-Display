export default function DiningTable({position=[0,0,0], rotation=[0,0,0]}){

    return(
        <group position={position} rotation={rotation}>
        {/* Dining Table */}
            <mesh position={[0, 1.3, 0]}>
                <boxGeometry args={[4, 0.2, 2]} />
                <meshStandardMaterial color="#966b67" />
            </mesh>

        {/* Table Legs */}
            <mesh position={[-1.8, 0.7, 0]}>
                <boxGeometry args={[0.45, 1.5, 0.5]} />
                <meshStandardMaterial color="#7d5956" />
            </mesh>

            <mesh position={[1.8, 0.7, 0]}>
                <boxGeometry args={[0.45, 1.5, 0.5]} />
                <meshStandardMaterial color="#7d5956" />
            </mesh>
        </group>
    )
}