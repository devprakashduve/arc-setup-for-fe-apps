// Button/Button.tsx

import React from 'react'
import './Button.scss'
import { ButtonProps } from './interface'
import Icon from '../Icon'

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  withIcon,
  iconElement,
}) => {
  return withIcon ? (
    <button onClick={onClick}>
      {text}
      <Icon iconElement={iconElement} />
    </button>
  ) : (
    <button onClick={onClick}>{text}</button>
  )
}

export default Button
