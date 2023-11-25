// Badge/Badge.tsx

import React from 'react'
import './Badge.scss'
import { BadgeProps } from './interface'

const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        padding: '4px 8px',
        borderRadius: '4px',
        color: '#fff',
      }}
    >
      {text}
    </span>
  )
}

export default Badge
