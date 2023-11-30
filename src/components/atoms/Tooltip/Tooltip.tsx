// Tooltip/Tooltip.tsx

import React from 'react'
import './Tooltip.scss'
import { TooltipProps } from './interface'

const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  children,
}) => {
  return (
    <div className={`tooltip tooltip-${position}`}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  )
}
3
export default Tooltip
