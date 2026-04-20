import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import Sofa from "./furniture/Sofa";
import TV from "./furniture/TV";
import DiningChair from "./furniture/DiningChair";
import DiningTable from "./furniture/DiningTable";
import CoffeeTable from "./furniture/CoffeeTable";
import Bookshelf from "./furniture/Bookshelf";
import ArmChair from "./furniture/Armchair";
import Plant from "./furniture/Plant";
import AreaRug from "./furniture/Rug";
import Window from "./furniture/Window";
import Baseboards from "./furniture/Baseboards";
import TeaSet from "./furniture/Teaset";
import PeanutBowl from "./furniture/PeanutBowl";
import ColoringBook from "./furniture/ColoringBook";
import { WallArt1, WallArt2 } from "./furniture/WallArt";
import SideTable from "./furniture/SideTable";
import OrangeJuiceGlass from "./furniture/OrangeJuice";
import Toy from "./furniture/Toy";
import FolderWithPapers from "./furniture/Folder";

import Flashlight from "./supplies/Flashlight";
import Radio from "./supplies/Radio";
import WaterJug from "./supplies/Water";
import FirstAidKit from "./supplies/FirstAidKit";
import Whistle from "./supplies/Whistle";
import MrChimera from "./supplies/Stuffie";


import floor from './woodFloor.jpg';
import wallpaper from './wallpaper.jpg';

export default function Apartment({x, find}) {
  const floorTexture = useTexture(floor);
  const wallpaperTexture = useTexture(wallpaper)
  if (floorTexture) {
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(7, 1);
    floorTexture.needsUpdate = true;
  }
  if(wallpaperTexture) {
    wallpaperTexture.wrapS = wallpaperTexture.wrapT = THREE.RepeatWrapping;
    wallpaperTexture.repeat.set(3, 3);
    wallpaperTexture.needsUpdate = true;
  }
  return (
    <group position={[x, -0.5, 2]} rotation={[0, 0, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[21, 7]} />
        <meshStandardMaterial color="#fed3cf" map={floorTexture}/>
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 2.5, -3.5]}>
        <boxGeometry args={[21, 5, 0.2]} />
        <meshStandardMaterial color="#dcbda5" map={wallpaperTexture}/>
      </mesh>

      {/* Left Wall */}
      <mesh position={[-10.5, 2.5, 0]}>
        <boxGeometry args={[0.2, 5, 7]} />
        <meshStandardMaterial color="#ccaf98" map={wallpaperTexture}/>
      </mesh>

      {/* Right Wall */}
      <mesh position={[10.5, 2.5, 0]}>
        <boxGeometry args={[0.2, 5, 7]} />
        <meshStandardMaterial color="#ccaf98" map={wallpaperTexture} />
      </mesh>

      <Baseboards roomWidth={21} roomDepth={7}/>

      <group position={[3, 0, 0]}>
        <Sofa position={[0, -0.25, -2]}/>
        <ArmChair position={[-3.75, 0 , 0]} rotation={[0, 1.45, 0]}/>
        <ArmChair position={[3.75, 0 , 0]} rotation={[0, -1.45, 0]}/>
        <AreaRug size={[7.5, 3]} position={[0, 0.01, -0.1]}/>
        <CoffeeTable />
      </group>
      <group position={[-6, 0, 0]}>
        <DiningTable />
        <DiningChair position={[-1,0,1.1]} rotation={[0,3.15,0]}/>
        <DiningChair position={[-1,0,-1.1]} rotation={[0,0,0]}/>
        <DiningChair position={[1,0,1.1]} rotation={[0,3.15,0]}/>
        <DiningChair position={[1,0,-1.1]} rotation={[0,0,0]}/>
      </group>
      <Bookshelf position={[8, 0, -3]}/>
      <Plant position={[9.8, 0, -3]}/>
      <Window position={[-2, 3, -3.4]}/>
      <TeaSet position={[3, 0.6, 0]}/>
      <PeanutBowl position={[-6, 1.45, 0]}/>
      <ColoringBook position={[-5, 1.45, -0.3]}/>
      <WallArt1 position={[10.4, 2.6, 0]} rotation={[0, -1.6, 0]}/>
      <WallArt2 position={[-8, 3, -3.4]} rotation={[0, 0, 0]}/>
      <SideTable position={[6.2, -0.12, -1.6]}/>
      <OrangeJuiceGlass position={[-5.5, 1.6, 0.3]} />
      <Toy position={[-3, 0, -2]}/>
      <FolderWithPapers position={[2, 0.65, 0]}/>

      <Flashlight position={[8.6, 2.52, -2.6]} rotation={[0, 0, Math.PI ]} find={find}/>
      <Radio position={[-7, 1.65, -0.5]} rotation={[0, 0.7, 0]} find={find}/>
      <Whistle position={[3, 0.035, 0]} rotation={[-1.3, 0.5, 2.7]} find={find}/>
      <FirstAidKit position={[-10.3, 2.5, 1.3]} rotation={[0, Math.PI / 2, 0]} find={find}/>
      <WaterJug position={[10, 0.4, -2]} find={find}/>
      
    </group>
  );
}
