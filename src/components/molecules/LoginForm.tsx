import React from 'react'
import FormField from './FormField'
import Button from '../atoms/Button'

interface LoginFormProps {
  onSubmit: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormField
        label="Username"
        placeholder="Enter username"
        type="text"
        value=""
        onChange={() => {}}
      />
      <FormField
        label="Password"
        placeholder="Enter password"
        type="password"
        value=""
        onChange={() => {}}
      />
      <Button onClick={onSubmit} text="Login" />
    </form>
  )
}

export default LoginForm
