// Input/Input.tsx

import React from 'react'
import './Input.scss'
import { InputProps } from './interface'
import { addClass } from '@/components/reusableFunctionality/customFunctionality'

const Input: React.FC<InputProps> = ({
  type,
  designShape,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={addClass(designShape)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
