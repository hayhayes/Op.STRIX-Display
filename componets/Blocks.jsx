import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Edges } from '@react-three/drei'
import * as THREE from 'three'
import HolographicMaterial from '../utils/holographicMaterial'
import './componets.css';
import './colors.css';
// #63fef6
// #7af681

export function MovingBlocks() {
    
  return (
    <div className='moving-blocks'>
      <Canvas camera={{fov: 80}}>
        <LegoBlock4 color="#63fef6" scale={[1.2, 1.2, 1.2]}/>
        <LegoBlock6 color="#7af681" rotate={false} position={[0, -1, 0]} scale={[1.2, 1.2, 1.2]}/>
      </Canvas>
    </div>
  )
}

export function RotatingBlock(){
  return (
    <div className="rotating-block-container">
      <div className='lego-notes top'>
        I observed Anya constructing a tower. She claims it is a secret base. Despite her lack of precision, 
        the structure remained upright far longer than expected. The system compensates for human error. 
        It guides the user toward stability.
      </div>
      <div className="arrow-line" id="three"/>
      <div className="lego-notes" id="three">
        I note the potential for signal communication simulation. Distinct colors and configurations could represent 
        coded information if prearranged. While inefficient compared to standard methods, it is non-threatening and 
        unlikely to be detected as intentional signaling.
        <br/>
        <br/>
        The system could be used for low-profile environmental simulation. Simple structures 
        could be constructed to replicate spatial layouts for training recall.
        The consistency of the grid system allows for predictable mapping. Useful for mental rehearsal.
      </div>
      <Canvas>
        <LegoBlock6 color="#cfd4de" rotate={true} scale={[1.5, 1.5, 1.5]}/>    
      </Canvas>
      <div className="arrow-line" id="one"/>
      <div className="lego-notes" id="one">
        Maintaining cover as a family man continues to require engagement with civilian artifacts of questionable strategic value. 
        This object is a small plastic construction piece commonly referred to as a “LEGO.”
        <br/>
        The brick features six studs arranged in a 2×3 grid. Spacing is precise—uniform to a degree that suggests deliberate engineering 
        discipline. When aligned with a compatible piece, the connection is immediate and stable. There is a distinct tactile feedback 
        upon engagement—a subtle “snap.” Reliable. Repeatable.
      </div>
      <div className="arrow-line" id="two"/>
      <div className="lego-notes" id="two">
        Tested multiple placements. No degradation in connection strength.
        <br/>
        The tolerances are noteworthy. Even slight misalignment is corrected as the studs guide into position. 
        This reduces the need for visual confirmation. In a low-visibility scenario, such a feature would significantly 
        improve assembly speed.
        <br/>
        Material composition appears durable. Lightweight, yet resistant to deformation. It maintains structural integrity 
        under repeated stress cycles. No visible warping.
      </div>
      <div className='lego-notes bottom'>
        For the sake of maintaining cover, I will refrain from further “analysis” in front of Anya. She has already begun 
        constructing what she claims is a “secret base.” Given her current enthusiasm, interfering would raise unnecessary 
        suspicion.
      </div>
    </div>
  )
}

function LegoBlock4({color, scale}) {
  const myMesh = useRef()
    useFrame(({ clock }) => {
       // myMesh.current.rotation.x = clock.elapsedTime/2
      // myMesh.current.rotation.y = clock.elapsedTime/2
    })

    const studs = [
      [-0.6, 0.6, -0.6],
      [0.6, 0.6, -0.6],
      [-0.6, 0.6, 0.6],
      [0.6, 0.6, 0.6]
    ]

    useFrame(({ clock }) => {
      const t = clock.elapsedTime

      // loop 0 → 1 → 0
      const cycle = (Math.sin(t * 0.8) + 1) / 2

      // ease (smooth in/out)
      const eased = cycle * cycle * (3 - 2 * cycle)

      // height range
      const minY = 0   // touching
      const maxY = 2.0   // lifted

      // width range
      const minX = 0 //touching
      const maxX = 1.0 // lifted

      // rotation range
      const minZ = 0
      const maxZ = -0.5

      myMesh.current.position.y = minY + (maxY - minY) * eased
      myMesh.current.position.x = minX + (maxX - minX) * eased
      myMesh.current.rotation.z = minZ + (maxZ - minZ) * eased
    })

    // rotation={[0.3, 0.25, 0]} position={[0, 0, 0]}
    // rotation={[0.3, 0.25, 0]} position={[0, 0.25, 0]}
    // rotation={[0.4, 0.25, -0.05]} position={[0, 0.5, 0]}
    // rotation={[0.4, 0.25, -0.15]} position={[0.3, 0.75, 0]}
    
  return (
    <group ref={myMesh} rotation={[0.3, 0.25, 0]} position={[0, 0, 0]} scale={scale ?? [1, 1, 1]}>
      {/* Base block */}
      <mesh>
        <boxGeometry args={[2, 1, 2]} />
        <HolographicMaterial 
          hologramColor={color}
        />
       
        <Edges color={color} lineWidth={1.5} />
      </mesh>

      {/* Studs */}
      {studs.map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
          <HolographicMaterial 
            hologramColor={color}
          />
          <Edges color={color} lineWidth={1.5} />
        </mesh>
      ))}
    </group>
    )
}

function LegoBlock6({color, rotate, position, scale}) {
  const ref = useRef()
  const mat = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if(rotate) {
      ref.current.rotation.y = t * 0.5
      ref.current.rotation.x = (Math.sin(t * 0.8) + 1) / 2 
    }

    if (mat.current) {
      // flicker
      const flicker = 0.8 + Math.sin(t * 3) * 0.4

      mat.current.emissiveIntensity = flicker
      mat.current.opacity = 0.15 + Math.sin(t * 2) * 0.05
    }
  })

  // Grid positions (2 rows × 3 columns)
  const studs = [
    [-0.8, 0.6, -0.4],
    [0,    0.6, -0.4],
    [0.8,  0.6, -0.4],
    [-0.8, 0.6,  0.4],
    [0,    0.6,  0.4],
    [0.8,  0.6,  0.4],
  ]

  return (
    <group ref={ref} rotation={[0.3, 0.25, 0]} position={position ?? [0, 0, 0]} scale={scale ?? [1, 1, 1]}>
      {/* Base */}
      <mesh>
        <boxGeometry args={[3, 1, 2]} />
        
        <HolographicMaterial 
          hologramColor={color}
          ref={mat}
          
        />
        <Edges color={color} lineWidth={1.5} />
      </mesh>

      {/* Studs */}
      {studs.map((pos, i) => (
        <mesh key={i} position={pos}>
          <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
          <HolographicMaterial 
          hologramColor={color}
          
          />
          <Edges color={color} lineWidth={1.5} />
        </mesh>
      ))}
    </group>
  )
}