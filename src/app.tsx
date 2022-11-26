import { useState } from 'react'
import './app.css'

export function replaceCamelWithSpaces (colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

export function App () {
  const [color, setColor] = useState('MediumVioletRed')
  const [isDisabled, setIsDisabled] = useState(false)

  const toggleColor = () => {
    const newColor = color === 'MidnightBlue' ? 'MediumVioletRed' : 'MidnightBlue'
    setColor(newColor)
  }

  const buttonText = color === 'MidnightBlue' ? 'Change to Medium Violet Red' : 'Change to Midnight Blue'

  return (
    <div className='App'>
      <button onClick={toggleColor} style={{ backgroundColor: isDisabled ? 'gray' : color }} disabled={isDisabled}>{buttonText}</button>
      <input
        type='checkbox'
        defaultChecked={isDisabled}
        aria-checked={isDisabled}
        onChange={event => setIsDisabled(event.target.checked)}
        id='disable-button-checkbox'
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  )
}
