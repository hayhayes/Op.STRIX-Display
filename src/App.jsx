import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Display from '../pages/SideDisplay';
import AnimatedSecretDecoder from '../pages/Encoder';

import './App.css'



function Choices(){
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(page);
  };

  return(
    <div className='home'>
      <h1><b>Operation STRIX</b></h1>
      <h1 id='acronym'><b>S</b>uper <b>T</b>errific <b>R</b>eally <b>I</b>ncredible e<b>X</b>perience</h1>
      <h2>Select Display</h2>
      <button onClick={() => handleClick('dashboard')}>Dashboard</button>
      <button onClick={() => handleClick('display')}>Mini Display</button>
      <button onClick={() => handleClick('cipher')}>Cipher</button>
      <style>{`
        .home{padding: 5rem; text-align: center;}
        h1{font-weight: 600;} 
        h2{margin: 3rem 0 2rem;}
        #acronym{ margin-top: 0.5rem}
        #acronym b{color: #2cc8af;}
      `}</style>
    </div>
  )
}

function App() {
  const [state, setState] = useState('')
  
  function handleClick(val){
    setState(val)
  }

  return (
    <BrowserRouter basename="/Op.STRIX-Display">
      <Routes>
        <Route path="/" element={<Choices />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/display" element={<Display />} />
        <Route path="/cipher" element={<AnimatedSecretDecoder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
