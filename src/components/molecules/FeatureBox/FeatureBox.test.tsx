// FeatureBox/FeatureBox.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import FeatureBox from './FeatureBox'

test('renders FeatureBox component', () => {
  const { getByText } = render(
    <FeatureBox
      icon="your-icon-name" // replace with your actual icon name
      title="Feature Title"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      status="new"
    />,
  )

  const featureTitleElement = getByText('Feature Title')
  // expect(featureTitleElement).toBeInTheDocument()
})
