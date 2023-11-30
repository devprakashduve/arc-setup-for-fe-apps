// Comment/Comment.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Comment from './Comment'

test('renders Comment component', () => {
  const { getByText } = render(
    <Comment
      author="John Doe"
      content="This is a sample comment."
      avatarSrc="https://placekitten.com/40/40" // replace with your actual avatar URL
    />,
  )

  const commentAuthorElement = getByText('John Doe')
  // expect(commentAuthorElement).toBeInTheDocument()
})
