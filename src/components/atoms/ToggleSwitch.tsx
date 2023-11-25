import React from 'react'

interface ToggleSwitchProps {
  checked: boolean
  onChange: (isChecked: boolean) => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  const handleChange = () => {
    onChange(!checked)
  }

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  )
}

export default ToggleSwitch
