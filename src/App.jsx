import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {

  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(()=>{
      setCurrentTime(new Date())
    },1000)
    return () => clearInterval(timer)
  }, [])

  const formatTimeWithLeadingZero = (num) => { return num<10 ? `0${num}`:`${num}` }

  const formatDate = (date) => {
    const options = {weekday:"long", year : "numeric", month:"long", day:"numeric"}
    return date.toLocaleDateString(undefined , options)
  }
  

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formatTimeWithLeadingZero(currentTime.getHours())} :  
          {formatTimeWithLeadingZero(currentTime.getMinutes())} : 
          {formatTimeWithLeadingZero(currentTime.getSeconds())}
          <span id='item'> 
          {currentTime.getHours() >=12?"PM":"AM"}</span>
        </div>
        <div className="date">
          {formatDate(currentTime)}
        </div>
      </div>
      
    </>
  )
}

export default App
