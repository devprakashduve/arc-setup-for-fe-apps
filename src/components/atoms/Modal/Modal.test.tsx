// Modal/Modal.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Modal from './Modal'

test('renders Modal component', () => {
  const onCloseMock = jest.fn()
  const { getByText } = render(
    <Modal isOpen={true} onClose={onCloseMock} title="Example Modal">
      <p>This is the modal content.</p>
    </Modal>,
  )

  const modalElement = getByText('Example Modal')
  // expect(modalElement).toBeInTheDocument()

  const closeButton = getByText('Close')
  fireEvent.click(closeButton)

  expect(onCloseMock).toHaveBeenCalledTimes(1)
})
