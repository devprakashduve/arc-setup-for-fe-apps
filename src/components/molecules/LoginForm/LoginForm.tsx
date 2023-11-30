// LoginForm/LoginForm.tsx

import React from 'react'
import FormField from '../FormField'
import Button from '@/components/atoms/Button'
import './LoginForm.scss'
import { LoginFormProps } from './interface'

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
      <Button onClick={onSubmit} text="Login" withIcon={false} />
    </form>
  )
}

export default LoginForm
