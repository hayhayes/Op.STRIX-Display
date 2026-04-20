import { useState, useEffect } from "react";
import ApartmentScene from "../componets/ApartmentScene";
import Found from "../componets/Found";
import ArrowButton from "../componets/Arrows";
import Confetti from "../componets/Confetti";
import './pages.css';
//<style>{`body{background-color: #252525;}`}</style>

function Game({gameKey, resetGame}) {
  const [x, setX] = useState(0)
  const [found, setFound] = useState([])
  const [celebration, setCelebration] = useState(false)
  
  function handleClick(direction) {
    const change = direction == 'left' ? 2 : -2;
    const newState = x + change
     if(Math.abs(newState) <= 7){
      setX(newState)
     } 
  }

  function handleFind(item) {
    setFound((prev) => {
      if (prev.includes(item)) return prev;
      return [...prev, item];
    });
  }

  useEffect(() => {if(found.length == 5){ setCelebration(true) }}, [found])

  return(
    <div className="page display">
      <ArrowButton direction="left" onClick={handleClick}/>
      <ArrowButton direction="right" onClick={handleClick}/>
      <ApartmentScene x={x} find={handleFind}/>
      <Found found={found}/>
      
      {celebration && (
        <>
          <Confetti />
          <button className="reset-button" onClick={resetGame}>Play Again</button>
        </>)}
    </div>
  )
}
export default function BuildAKit(){
  const [gameKey, setGameKey] = useState(0);

function resetGame() {
  setGameKey((k) => k + 1);
}

return (
  <>
    <Game key={gameKey} resetGame={resetGame}/>
  </>
  )
}