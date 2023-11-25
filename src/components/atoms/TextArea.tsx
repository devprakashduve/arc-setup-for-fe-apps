import React from 'react'

interface TextAreaProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
  rows?: number
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  rows = 4,
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
    />
  )
}

export default TextArea
