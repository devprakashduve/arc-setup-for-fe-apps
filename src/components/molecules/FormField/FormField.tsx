// FormField/FormField.tsx

import React from 'react'
import Input from '@/components/atoms/Input'
import Label from '@/components/atoms/Label'
import './FormField.scss'
import { FormFieldProps } from './interface'

const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="form-field">
      <Label text={label} htmlFor={''} />
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        designShape={'box'} // Replace with your actual prop
      />
    </div>
  )
}

export default FormField
