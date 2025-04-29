import DonutChart from "../componets/Donut";
import Protocols from "../componets/Protocols";

export default function Display(){

    return(
      <div className="page display">
        <DonutChart/>
        <Protocols/>
        <style>{`body{background-color: #252525;}`}</style>
      </div>
    )
  }