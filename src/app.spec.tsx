import { App } from '@/app'
import { render, screen, fireEvent } from '@testing-library/react'

test('button has correct initial color', () => {
  render(<App />)
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Blue' })
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test('button has correct initial text, and updates when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to Blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  // click event
  fireEvent.click(colorButton)

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to Red')
})

test('initial conditions', () => {
  render(<App />)

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to Blue' })
  expect(colorButton).toBeEnabled()

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('button was disabled when checkbox is enabled', () => {
  render(<App />)
  const button = screen.getByRole('button', { name: 'Change to Blue' })
  const checkbox = screen.getByRole('checkbox')

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})
