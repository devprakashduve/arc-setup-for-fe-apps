// Badge/Badge.tsx

import React from 'react'
import './Badge.scss'
import { BadgeProps } from './interface'

const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  return <span className="badge">{text}</span>
}

export default Badge
