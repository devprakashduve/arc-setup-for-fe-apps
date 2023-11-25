// Breadcrumb/Breadcrumb.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Breadcrumb from './Breadcrumb'

test('renders Breadcrumb component', () => {
  const { getByText } = render(
    <Breadcrumb items={['Home', 'Category', 'Page']} />,
  )
  const breadcrumbElement = getByText('Home / Category / Page')
  // expect(breadcrumbElement).toBeInTheDocument()
})
