// Tooltip/Tooltip.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Tooltip from './Tooltip'

test('renders Tooltip component', () => {
  const { getByText } = render(
    <Tooltip text="Tooltip Text" position="top">
      <button>Hover me</button>
    </Tooltip>,
  )

  const tooltipTextElement = getByText('Tooltip Text')
  // expect(tooltipTextElement).toBeInTheDocument()
})
