import BinaryWindow from "../componets/Binary";
import MissionStatus from "../componets/Table";
import Graph from "../componets/Graph";
import Map from "../componets/Map";
import TextLog from "../componets/TextLog";
import { BackgroundOne, BackgroundTwo, BackgroundThree } from "../componets/Background";
import './pages.css';

export default function Dashboard(){
  const color = 'cyber-ui'

  return (
    <div className="page dashboard">
      <BinaryWindow color={color}/>
      <MissionStatus color={color}/>
      <Graph color={color}/>
     <Map color={color}/>
     <TextLog color={color}/>
     <BackgroundOne color={color}/>
     <BackgroundTwo color={color}/>
     <BackgroundThree color={color}/>
     <style>{`body{background-color: #0c1e3e;}`}</style>
    </div>
  )
}