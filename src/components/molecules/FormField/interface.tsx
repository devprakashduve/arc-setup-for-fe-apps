// FormField/interface.tsx

import React from 'react'

export interface FormFieldProps {
  label: string
  placeholder: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
