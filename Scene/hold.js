{/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[21, 7]} />
        <meshStandardMaterial color="#ffffff" map={floorTexture}/>
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