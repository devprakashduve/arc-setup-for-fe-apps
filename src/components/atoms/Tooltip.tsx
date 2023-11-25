import React from 'react'

interface TooltipProps {
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  children?: any
}

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

export default Tooltip
