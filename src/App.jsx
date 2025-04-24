import { useState } from 'react';
import BinaryWindow from '../componets/Binary';
import MissionStatus from '../componets/Table';
import Graph from '../componets/Graph';
import Map from '../componets/Map';
import TextLog from '../componets/TextLog';
import { BackgroundOne, BackgroundTwo, BackgroundThree } from '../componets/Background';
import DonutChart from '../componets/Donut';
import Protocols from '../componets/Protocols';
import AnimatedSecretDecoder from '../componets/Encoder';
import Game from '../componets/Rescue';
import './App.css'

function Dashboard(){
  const color = 'cyber-ui'

  return (
    <div className="dashboard">
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

function Display(){

  return(
    <div className="display">
      <DonutChart/>
      <Protocols/>
      <style>{`body{background-color: #252525;}`}</style>
    </div>
  )
}

function Choices({handleClick}){

  return(
    <div>
      <button onClick={() => handleClick('dashboard')}>Dashboard</button>
      <button onClick={() => handleClick('display')}>Mini Display</button>
    </div>
  )
}

function App() {
  const [state, setState] = useState('')
  
  function handleClick(val){
    setState(val)
  }

  return (
    <div className="dashboard">
      {(state === '') && (<Choices handleClick={handleClick}/>)}
      {(state === 'dashboard') && (<Dashboard/>)}
      {(state === 'display') && <Display/>}
    </div>
  )
}

export default App
