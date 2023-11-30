// ProgressBar/ProgressBar.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import ProgressBar from './ProgressBar'

test('renders ProgressBar component', () => {
  const { container } = render(<ProgressBar progress={50} />)
  const progressBarElement = container.querySelector('.progress-bar')
  // expect(progressBarElement).toBeInTheDocument()
})
