// Footer/Footer.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'

test('renders Footer component', () => {
  const { getByText } = render(
    <Footer companyName="Your Company" year={2023} />,
  )
  const footerText = getByText('© 2023 Your Company. All rights reserved.')
  // expect(footerText).toBeInTheDocument()
})
