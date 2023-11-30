// TextArea/TextArea.tsx

import React from 'react'
import './TextArea.scss'
import { TextAreaProps } from './interface'

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  rows = 4,
}) => {
  return (
    <textarea
      className="custom-textarea"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
  )
}

export default TextArea
