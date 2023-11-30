// HeaderWithSearch/HeaderWithSearch.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import HeaderWithSearch from './HeaderWithSearch'

test('renders HeaderWithSearch component', () => {
  const { getByText } = render(
    <HeaderWithSearch
      logoSrc="your-logo-url" // replace with your actual logo URL
      placeholder="Search..."
      searchValue=""
      onSearchChange={() => {}}
      onSearch={() => {}}
    />,
  )

  const homeNavItem = getByText('Home')
  // expect(homeNavItem).toBeInTheDocument()
})
