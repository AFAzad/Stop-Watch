import React ,{useState} from 'react'
import './App.css';

let adjustInterval = undefined;


function App() {
  const [watch,setWatch]=useState(0);
  const [started,setStarted]=useState(false)


  const startTime=()=>{
    adjustInterval=setInterval(()=>{
      setWatch((sec)=>sec+1)

    },1000)
    setStarted(true)
  }

  const stopTime =()=>{
    clearInterval(adjustInterval)
    setStarted(false)

  }

  const resetTime = ()=>{
    setWatch(0)
    clearInterval(adjustInterval)
    setStarted(false)

  }

  return (
    <div className="App">
      <div className="main" typeof='card'>
        <h1 className='heading'>Stop Watch</h1>
        <h2> {watch } </h2>
        <div className="btn">
          <button disabled={started} className="start" onClick={startTime}>Start</button>
          <button className="stop" onClick={stopTime}>Stop</button>
          <button className="reset"onClick={resetTime}>Reset</button>
        </div>
      </div>
      <h6 className='name'>Projected Abul Azad</h6>
    </div>
  );
}

export default App;
