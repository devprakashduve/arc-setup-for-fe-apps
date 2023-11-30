// TextArea/TextArea.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextArea from './TextArea'

test('renders TextArea component', () => {
  const onChangeMock = jest.fn()
  const { getByPlaceholderText } = render(
    <TextArea
      value=""
      onChange={onChangeMock}
      placeholder="Enter text here..."
      rows={4}
    />,
  )

  const textAreaElement = getByPlaceholderText('Enter text here...')
  fireEvent.change(textAreaElement, { target: { value: 'Test input' } })

  expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object))
})
