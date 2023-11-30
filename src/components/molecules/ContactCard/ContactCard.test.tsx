// ContactCard/ContactCard.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import ContactCard from './ContactCard'

test('renders ContactCard component', () => {
  const { getByText } = render(
    <ContactCard
      avatarSrc="https://placekitten.com/80/80" // replace with your actual avatar URL
      name="John Doe"
      email="john.doe@example.com"
    />,
  )

  const contactNameElement = getByText('John Doe')
  // expect(contactNameElement).toBeInTheDocument()
})
