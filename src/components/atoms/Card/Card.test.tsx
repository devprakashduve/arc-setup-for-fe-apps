// Card/Card.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

test('renders Card component', () => {
  const { getByText } = render(
    <Card
      imageUrl="https://placekitten.com/300/200"
      title="Card Title"
      description="This is a sample card description."
      tags={['Tag1', 'Tag2', 'Tag3']}
    />,
  )
  const titleElement = getByText('Card Title')
  // expect(titleElement).toBeInTheDocument()
})
