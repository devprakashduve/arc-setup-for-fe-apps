// Input/interface.tsx

import React from 'react'

export interface InputProps {
  type: string
  designShape: 'flat' | 'box'
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
