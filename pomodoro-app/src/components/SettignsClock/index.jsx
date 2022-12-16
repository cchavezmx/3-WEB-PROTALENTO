import './styles.css'
import { useState } from 'react'

export default function SettingsClock (props) {
  const { setSettings } = props
  const [timeSetPomodoro, setTimeSetPomodoro] = useState(25)

  const onSubmitHandled = (e) => {
    e.preventDefault()
    const timeStamp = new Date().getTime()
    setSettings({ timeSetPomodoro, timeStamp })
  }

  return (
    <>
      <form className='settings' onSubmit={onSubmitHandled}>
        <label>Time</label>
        <input
          type='number'
          name='time'
          min='0'
          max='60'
          defaultValue={timeSetPomodoro}
          onChange={(e) => {
            setTimeSetPomodoro(e.target.value)
          }}
        />
        <button className='btn'>Inciar reloj</button>
      </form>
    </>
  )
}
