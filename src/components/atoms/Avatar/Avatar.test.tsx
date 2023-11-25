// Avatar/Avatar.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import Avatar from './Avatar'

test('renders Avatar component', () => {
  const { getByAltText } = render(
    <Avatar src="https://placekitten.com/200/200" alt="Avatar" />,
  )
  const avatarElement: any = getByAltText('Avatar')
  // expect(avatarElement).toBeInTheDocument()
})
