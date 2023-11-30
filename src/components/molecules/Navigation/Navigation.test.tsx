// Navigation/Navigation.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Navigation from './Navigation'

test('renders Navigation component', () => {
  const { getByText } = render(<Navigation items={['Home', 'About']} />)
  const homeLink = getByText('Home')
  // expect(homeLink).toBeInTheDocument();
})
