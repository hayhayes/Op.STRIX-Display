export default function TV({position=[0,0,0], rotation=[0,0,0]}){

    return(
        <group position={position} rotation={rotation}>
        {/* TV Stand */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 1, 0.5]} />
                <meshStandardMaterial color="#444" />
            </mesh>

        {/* TV */}
            <mesh position={[0, 1.27, 0]}>
                <boxGeometry args={[2.5, 1.5, 0.1]} />
                <meshStandardMaterial color="black" metalness={0.5}/>
            </mesh>

        </group>
    )
}