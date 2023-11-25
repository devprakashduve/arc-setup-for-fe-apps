import React from 'react'

interface Option {
  value: string | number
  label: string
}

interface SelectProps {
  options: Option[]
  value: string | number
  onChange: (value: string | number) => void
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
