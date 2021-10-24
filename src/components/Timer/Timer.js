import React, {useState, useEffect} from 'react';
import './style.css';
import { FiPause,FiPlay,FiRotateCcw } from "react-icons/fi";


function Timer(props) {

  const [timer,setTimer] = useState(props.time)
  const [pause,setPause] = useState(false)
  document.title = "Pomodoro"

  function restart(){
    setPause(true)
    setTimer(props.time)
  }

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if(pause === false){
        if(timer === 0){
          props.setBreak(!props.breakTime)
          if( props.setWorks){
            props.setWorks(prev => prev +1)
          }
        } else{
          setTimer(prev => prev -1);
        }
      }
    }, 1000);
  },[timer, pause]);

  return (
    <div className='containerTimer flex displayColumn'>
      <FiRotateCcw className='restart' onClick={() => restart() } />
     <h1 className='counter'>
      {timer}
     </h1>
     {pause?<FiPlay className='pausePlayButton' onClick={() => setPause(!pause)} />:<FiPause className='pausePlayButton' onClick={() => setPause(!pause)} /> }
    </div>
  );
}

export default Timer;