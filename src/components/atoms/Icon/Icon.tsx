// Icon/Icon.tsx

import React from 'react'
import './Icon.scss'
import { IconProps } from './interface'

const Icon: React.FC<IconProps> = ({ name, size = 24, color }) => {
  return (
    <i
      className={`icon-${name}`}
      style={{ fontSize: size, color: color }}
      aria-hidden="true"
    />
  )
}

export default Icon
