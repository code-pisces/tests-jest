import { useState } from 'react'
import './app.css'

export function App () {
  const [color, setColor] = useState('red')
  const [isDisabled, setIsDisabled] = useState(false)

  const toggleColor = () => {
    const newColor = color === 'blue' ? 'red' : 'blue'
    setColor(newColor)
  }

  const buttonText = color === 'blue' ? 'Change to Red' : 'Change to Blue'

  return (
    <div className='App'>
      <button onClick={toggleColor} style={{ backgroundColor: color }} disabled={isDisabled}>{buttonText}</button>
      <input type='checkbox' onChange={event => setIsDisabled(event.target.checked)} />
    </div>
  )
}
