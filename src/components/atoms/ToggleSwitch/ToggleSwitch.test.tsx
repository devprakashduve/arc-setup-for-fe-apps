// ToggleSwitch/ToggleSwitch.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ToggleSwitch from './ToggleSwitch'

test('renders ToggleSwitch component', () => {
  const onChangeMock = jest.fn()
  const { container } = render(
    <ToggleSwitch checked={false} onChange={onChangeMock} />,
  )

  const toggleSwitchElement = container.querySelector('.toggle-switch')
  // fireEvent.click(toggleSwitchElement)

  expect(onChangeMock).toHaveBeenCalledWith(true)
})
