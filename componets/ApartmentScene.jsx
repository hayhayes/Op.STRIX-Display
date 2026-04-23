// ApartmentScene.jsx
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Apartment from "../Scene/apartment";

//  <OrbitControls ref={controlsRef} onChange={logControls} />
export default function ApartmentScene({x, find}) {
  const controlsRef = useRef();

  const logControls = () => {
    const c = controlsRef.current;

    console.log("Camera Position:", c.object.position.toArray());
    console.log("Target:", c.target.toArray()); // [0, 0, 0]
    console.log("Zoom:", c.object.zoom); // 1
    console.log("Rotation (quaternion):", c.object.quaternion.toArray()); // [-0.1826755997417666, 0.36514812850068046, 0.07330858302917002, 0.9099023690296073]
    console.log("----------------------");
  };
  
  return (
    <div style={{height: '100%', width: '100%', position: 'absolute'}}>
    <Canvas camera={{ 
        position: [-0.0003778299342572731, 3.248145237712697, 8.52803339885283], 
        target: [0, 0, 0], 
        quaternion: [-0.1809548598929894, -0.000021786528867332782, -0.000004008553882572067, 0.9834914021944406],
        fov: 50 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[0, 0, 3]} intensity={1} />
        
        <spotLight
          position={[0, 4, 0]}
          angle={1}
          penumbra={0.5}
          intensity={20}
          castShadow
          target-position={[0, 0, 0]}
        />
        
        <directionalLight
          position={[0, 5, -3]}
          intensity={1.2}
        />
        <Apartment x={x} find={find}/>
       
    </Canvas>
    </div>
  );
}