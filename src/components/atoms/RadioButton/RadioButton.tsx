// RadioButton/RadioButton.tsx

import React from 'react'
import './RadioButton.scss'
import { RadioButtonProps } from './interface'

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label className="radio-button-label">
      <input type="radio" checked={checked} onChange={onChange} />
      {label}
    </label>
  )
}

export default RadioButton
