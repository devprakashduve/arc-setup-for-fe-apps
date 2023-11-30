// Checkbox/Checkbox.tsx

import React, { useState } from 'react'
import './Checkbox.scss'
import { CheckboxProps } from './interface'

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false)
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked)
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
