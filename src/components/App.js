import './App.css';
import Timer from '../components/Timer/Timer'
import React, { useState } from "react";


function App() {

  function updateTime(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setTime(e.target.value)
   }
  }

  function updateTimebreak(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setTimebreak(e.target.value)
   }
  }
  const [time, setTime] = useState(25);
  const [timebreak, setTimebreak] = useState(5);
  const [breakTime, setBreak] = useState(false);
  const [works, setWorks] = useState(0)

  return (
    <div className="app flex">
      <div className='container flex displayColumn'>
      <div className='pomodoro'>Pomodoros Feitos: {works}</div>
        {breakTime?
        <div>
          <h1 className="title break">Break time!</h1>
          <p className='subtitle'>Take a nap, bro.</p>
          <Timer breakTime={breakTime}  setBreak={setBreak} time={timebreak}></Timer>
          <button className="standartButton flex" onClick={() => setBreak(false)}><p className="buttonP">go to work</p></button>
          
        </div>
        :
        <div> <h1 className="title work">work</h1> 
        <p className='subtitle'>I know it sucks</p>
          <Timer setWorks={setWorks} breakTime={breakTime} setBreak={setBreak} time={time}></Timer>
          <button className="standartButton flex" onClick={() => setBreak(true)} ><p className="buttonP">take a Break</p></button>
        </div>}
          <div className="inputsContainer flex spaceBetween">
            <div className='inputSection flex displayColumn'><p className='inputText'>Tempo de trabalho</p> <input className='input' type="text"  onChange={updateTime} value={time}/></div>
            <div className='inputSection flex displayColumn'><p className='inputText'>Tempo de descanço</p> <input className='input' type="text"  onChange={updateTimebreak} value={timebreak}/></div>
          </div>
      </div>
    </div>
  ); 
}

export default App;


