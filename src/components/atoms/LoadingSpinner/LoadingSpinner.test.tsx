// LoadingSpinner/LoadingSpinner.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import LoadingSpinner from './LoadingSpinner'

test('renders LoadingSpinner component', () => {
  const { container } = render(<LoadingSpinner />)
  const loadingSpinnerElement = container.querySelector('.loading-spinner')
  // expect(loadingSpinnerElement).toBeInTheDocument();
})
