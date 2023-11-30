// RadioButton/interface.tsx

import React from 'react'

export interface RadioButtonProps {
  checked: boolean
  onChange: () => void
  label: string
}
