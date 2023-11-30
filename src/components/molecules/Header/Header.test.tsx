// ResponsiveNavBar/ResponsiveNavBar.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import ResponsiveNavBar from './Header'

test('renders ResponsiveNavBar component', () => {
  const { getByText } = render(
    <ResponsiveNavBar
      logoSrc="path/to/logo.png"
      navItems={['Home', 'About']}
    />,
  )
  const homeLink = getByText('Home')
  // expect(homeLink).toBeInTheDocument()
})
