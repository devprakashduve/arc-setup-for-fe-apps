// Tooltip/interface.tsx

import React from 'react'

export interface TooltipProps {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  children?: React.ReactNode
}
