// Input/Input.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Input from './Input'

test('renders Input component', () => {
  const { getByPlaceholderText } = render(
    <Input
      type="text"
      designShape="box"
      placeholder="Enter text..."
      value=""
      onChange={() => {}}
    />,
  )
  const inputElement = getByPlaceholderText('Enter text...')
  // expect(inputElement).toBeInTheDocument();
})
