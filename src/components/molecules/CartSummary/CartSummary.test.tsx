// CartSummary/CartSummary.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import CartSummary from './CartSummary'

test('renders CartSummary component', () => {
  const { getByText } = render(<CartSummary itemCount={5} totalPrice={150} />)

  const cartSummaryTitleElement = getByText('Cart Summary')
  // expect(cartSummaryTitleElement).toBeInTheDocument()
})
