// Checkbox/Checkbox.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Checkbox from './Checkbox'

test('renders Checkbox component', () => {
  const onChangeMock = jest.fn()
  const { getByText } = render(
    <Checkbox label="Checkbox Label" checked={false} onChange={onChangeMock} />,
  )
  const checkboxLabelElement = getByText('Checkbox Label')
  fireEvent.click(checkboxLabelElement)
  expect(onChangeMock).toHaveBeenCalledWith(true)
})
