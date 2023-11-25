// Label/Label.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Label from './Label'

test('renders Label component', () => {
  const { getByText } = render(<Label text="Label Text" htmlFor="inputId" />)
  const labelElement = getByText('Label Text')
  // expect(labelElement).toBeInTheDocument()
})
