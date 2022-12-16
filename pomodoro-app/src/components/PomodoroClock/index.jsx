import './styles.css'
import { useEffect, useState } from 'react'

// deben ser componentes que tengan su propia logica
// setTimeOut // delay
// setInterval // constantemente ejecutando

export default function PomodoroClock ({ pomodoro }) {
  // horas
  const [mintues, setMinutes] = useState('00')
  const [segudos, setSegunds] = useState('00')
  // minutos
  useEffect(() => {
    const interval = setInterval(() => {
      // funcion getTime => timestamp 1970 a la fecha Actual en milisegundos
      const actualTime = new Date().getTime()

      const timePomodoro = pomodoro.timeSetPomodoro * 60 * 1000
      const timePomodoroEnd = pomodoro.timeStamp + timePomodoro
      const timePomodoroEnd2 = timePomodoroEnd - actualTime

      const m = new Date(timePomodoroEnd2)
      const s = new Date(timePomodoroEnd2)

      const pMinutes = m.getMinutes() < 10 ? `0${m.getMinutes()}` : m.getMinutes()
      const pSegudos = s.getSeconds() < 10 ? `0${s.getSeconds()}` : s.getSeconds()

      setMinutes(pMinutes)
      setSegunds(pSegudos)
    }, 1000)

    // funcion Cleaner (es un callback) de useEffect
    return () => clearInterval(interval)
  }, [segudos, mintues])

  return (
    <div className='clock'>
      <div className='progress-go' />
      <p className='status'>Pomodoro</p>
      <span>
        {/* <span className='hour'>{hora}:</span> */}
        <span className='minute'>{mintues}:</span>
        <span className='minute'>{segudos}</span>
      </span>
    </div>
  )
}
