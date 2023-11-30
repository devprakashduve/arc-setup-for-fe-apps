// NavBar/NavBar.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import NavBar from './NavBar'

test('renders NavBar component', () => {
  const { getByText } = render(
    <NavBar logoSrc="path/to/logo.png" navItems={['Home', 'About']} />,
  )
  const homeLink = getByText('Home')
  // expect(homeLink).toBeInTheDocument();
})
