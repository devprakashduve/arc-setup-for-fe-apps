// RadioButton/RadioButton.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import RadioButton from './RadioButton'

test('renders RadioButton component', () => {
  const { getByText } = render(
    <RadioButton
      checked={false}
      onChange={() => {}}
      label="Radio Button Label"
    />,
  )
  const radioButtonLabelElement = getByText('Radio Button Label')
  // expect(radioButtonLabelElement).toBeInTheDocument()
})
