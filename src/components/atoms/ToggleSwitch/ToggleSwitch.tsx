// ToggleSwitch/ToggleSwitch.tsx

import React, { useState } from 'react'
import './ToggleSwitch.scss'
import { ToggleSwitchProps } from './interface'

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked: propChecked,
  onChange,
}) => {
  const [checked, setChecked] = useState(propChecked)

  const handleChange = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onChange(newChecked)
  }

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  )
}

export default ToggleSwitch
