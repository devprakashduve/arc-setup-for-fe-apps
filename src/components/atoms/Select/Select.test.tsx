// Select/Select.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Select from './Select'

test('renders Select component', () => {
  const onChangeMock = jest.fn()
  const { getByText } = render(
    <Select
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      value="option1"
      onChange={onChangeMock}
    />,
  )

  const selectElement = getByText('Option 1')
  fireEvent.change(selectElement, { target: { value: 'option2' } })

  expect(onChangeMock).toHaveBeenCalledWith('option2')
})
