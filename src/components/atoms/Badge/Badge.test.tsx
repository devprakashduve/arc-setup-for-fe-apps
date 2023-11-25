// Badge/Badge.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Badge from './Badge'

test('renders Badge component', () => {
  const { getByText } = render(<Badge text="Badge Text" color="blue" />)
  const badgeElement = getByText('Badge Text')
  // expect(badgeElement).toBeInTheDocument()
})
