// TextArea/interface.tsx

import React from 'react'

export interface TextAreaProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder: string
  rows?: number
}
