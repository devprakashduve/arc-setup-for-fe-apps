// Button/Button.tsx

import React from 'react'
import './Button.scss'
import { ButtonProps } from './interface'

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

export default Button
