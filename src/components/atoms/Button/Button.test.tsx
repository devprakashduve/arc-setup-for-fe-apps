// Button/Button.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

test('renders Button component', () => {
  const onClickMock = jest.fn()
  const { getByText } = render(
    <Button onClick={onClickMock} text="Test Button" />,
  )
  const buttonElement = getByText('Test Button')
  fireEvent.click(buttonElement)
  expect(onClickMock).toHaveBeenCalled()
})
