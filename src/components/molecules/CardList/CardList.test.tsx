// CardList/CardList.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import CardList from './CardList'

test('renders CardList component', () => {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'https://placekitten.com/300/200', // replace with your actual image URL
    },
    // add more cards as needed
  ]

  const { getByText } = render(<CardList cards={cards} />)

  const cardTitleElement = getByText('Card 1')
  // expect(cardTitleElement).toBeInTheDocument()
})
