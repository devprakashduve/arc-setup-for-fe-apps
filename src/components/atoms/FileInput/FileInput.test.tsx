// FileInput/FileInput.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import FileInput from './FileInput'

test('renders FileInput component', () => {
  const handleChange = jest.fn()
  const { getByLabelText } = render(<FileInput onChange={handleChange} />)

  const input = getByLabelText('Choose file')

  fireEvent.change(input, {
    target: {
      files: [new File(['test content'], 'test-file.txt')],
    },
  })

  expect(handleChange).toHaveBeenCalledTimes(1)
})
