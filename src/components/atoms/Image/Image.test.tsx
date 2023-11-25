// Image/Image.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Image from './Image'

test('renders Image component', () => {
  const { container } = render(
    <Image
      src="https://placekitten.com/300/200"
      alt="Sample Image"
      width={300}
      height={200}
    />,
  )
  const imageElement = container.querySelector('.custom-image')
  // expect(imageElement).toBeInTheDocument()
})
