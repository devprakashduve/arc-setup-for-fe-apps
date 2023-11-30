// Select/Select.tsx

import React from 'react'
import './Select.scss'
import { SelectProps } from './interface'

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <select className="custom-select" value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
