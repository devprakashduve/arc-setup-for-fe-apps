// Divider/Divider.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Divider from './Divider'

test('renders Divider component', () => {
  const { container } = render(<Divider color="black" />)
  const dividerElement = container.querySelector('.divider')
  // expect(dividerElement).toBeInTheDocument()
})
