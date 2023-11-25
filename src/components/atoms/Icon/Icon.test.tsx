// Icon/Icon.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Icon from './Icon'

test('renders Icon component', () => {
  const { container } = render(<Icon name="heart" size={24} color="red" />)
  const iconElement = container.querySelector('.icon-heart')
  // expect(iconElement).toBeInTheDocument()
})
