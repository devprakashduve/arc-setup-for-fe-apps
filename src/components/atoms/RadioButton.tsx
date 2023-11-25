import React from 'react'

interface RadioButtonProps {
  checked: boolean
  onChange: () => void
  label: string
}

const RadioButton: React.FC<RadioButtonProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <label>
      <input type="radio" checked={checked} onChange={onChange} />
      {label}
    </label>
  )
}

export default RadioButton
