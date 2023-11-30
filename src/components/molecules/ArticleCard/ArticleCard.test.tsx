// ArticleCard/ArticleCard.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import ArticleCard from './ArticleCard'

test('renders ArticleCard component', () => {
  const { getByText } = render(
    <ArticleCard
      imageUrl="https://placekitten.com/300/200" // replace with your actual image URL
      title="Sample Article"
      category="Technology"
    />,
  )

  const articleTitleElement = getByText('Sample Article')
  // expect(articleTitleElement).toBeInTheDocument()
})
