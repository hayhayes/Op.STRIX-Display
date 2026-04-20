import { RotatingBlock, MovingBlocks } from "../componets/Blocks";

export default function LegoDisplay(){

    return(
    <div className="page display">
    
      <MovingBlocks />
      <RotatingBlock />
      <style>{`body{background-color: #252525;}`}</style>
    </div>
  )
}