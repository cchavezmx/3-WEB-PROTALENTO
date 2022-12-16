import './styles.css'
import { useEffect, useState } from 'react'

// deben ser componentes que tengan su propia logica
// setTimeOut // delay
// setInterval // constantemente ejecutando

export default function NormalClock () {
  // horas
  const [hora, setHora] = useState('00')
  const [mintues, setMinutes] = useState('00')
  const [segudos, setSegunds] = useState('00')
  // minutos
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date()
      const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
      const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
      const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
      setHora(h)
      setMinutes(m)
      setSegunds(s)
    }, 1000)

    // funcion Cleaner (es un callback) de useEffect
    return () => clearInterval(interval)
  }, [hora, mintues])

  return (
    <div className='clock'>
      <div className='progress-go' />
      <p className='status'>Reloj</p>
      <span>
        <span className='hour'>{hora}:</span>
        <span className='minute'>{mintues}:</span>
        <span className='minute'>{segudos}</span>
      </span>
    </div>
  )
}
