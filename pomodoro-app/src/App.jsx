import './App.css'
import { useState } from 'react'
import NormalClock from './components/NormalClock'
import PomodoroClock from './components/PomodoroClock'
import SettingsClock from './components/SettignsClock'

function App () {
  const [pomodoro, setPomodor] = useState(false)
  const [normalClock, setNormalClock] = useState(true)
  const [settings, setSettings] = useState({
    timeStamp: 0,
    timeSetPomodoro: '0'
  })
  const mostarReloj = () => {
    if (pomodoro) {
      return <PomodoroClock pomodoro={settings} />
    } else {
      return <NormalClock />
    }
  }

  const toogleClock = () => {
    setPomodor(!pomodoro)
    setNormalClock(!normalClock)
    // if (pomodoro) {
    //   setPomodor(false)
    //   setNormalClock(true)
    // } else {
    //   setPomodor(true)
    //   setNormalClock(false)
    // }
  }

  return (
    <div className='App'>
      <div className='panel'>
        {/* // addEventList('clic') => onClick */}
        <button onClick={toogleClock} className='btn'>Pomodoro</button>
      </div>
      {mostarReloj()}
      {/* componentes Formulario */}
      <SettingsClock setSettings={setSettings} />
    </div>
  )
}

export default App
