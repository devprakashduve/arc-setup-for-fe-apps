// BlogPost/BlogPost.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import BlogPost from './BlogPost'

test('renders BlogPost component', () => {
  const { getByText } = render(
    <BlogPost
      title="Sample Blog Post"
      author={{
        name: 'John Doe',
        avatarUrl: 'https://placekitten.com/40/40', // replace with your actual avatar URL
        status: 'online',
      }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />,
  )

  const blogPostTitleElement = getByText('Sample Blog Post')
  // expect(blogPostTitleElement).toBeInTheDocument()
})
