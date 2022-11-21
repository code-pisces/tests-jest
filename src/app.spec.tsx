import { App } from '@/app'
import { render, screen } from '@testing-library/react'

test('button has correct initial color', () => {
  render(<App />)
  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Blue' })
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})

test('button has correct initial text', () => {

})

test('button turns blue when clicked', () => {

})
