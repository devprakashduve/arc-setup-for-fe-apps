// CommentSection/CommentSection.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import CommentSection from './CommentSection'

test('renders CommentSection component', () => {
  const comments = [
    {
      id: 1,
      author: 'John Doe',
      content: 'This is a sample comment.',
      avatarUrl: 'https://placekitten.com/40/40', // replace with your actual avatar URL
    },
    // add more comments as needed
  ]

  const { getByText } = render(<CommentSection comments={comments} />)

  const commentAuthorElement = getByText('John Doe')
  // expect(commentAuthorElement).toBeInTheDocument()
})
