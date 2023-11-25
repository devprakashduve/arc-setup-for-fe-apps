import React from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

interface FormFieldProps {
  label: string
  placeholder: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="form-field">
      <Label text={label} />
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormField
