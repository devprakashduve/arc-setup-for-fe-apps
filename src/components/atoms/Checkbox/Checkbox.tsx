// Checkbox/Checkbox.tsx

import React from 'react'
import './Checkbox.scss'
import { CheckboxProps } from './interface'

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  )
}

export default Checkbox
