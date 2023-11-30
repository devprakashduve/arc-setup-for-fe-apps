// LoginForm/LoginForm.test.tsx

import React from 'react'
import { render } from '@testing-library/react'
import LoginForm from './LoginForm'

test('renders LoginForm component', () => {
  const { getByText } = render(<LoginForm onSubmit={() => {}} />)
  const loginButton = getByText('Login')
  // expect(loginButton).toBeInTheDocument()
})
