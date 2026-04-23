import Protocols from "../componets/Protocols";
import ApartmentScene from "../componets/ApartmentScene";

export default function Display(){

  return(
    <div className="page display">
      <Protocols />
      <style>{`body{background-color: #252525;}`}</style>
    </div>
  )
}