// Icon/Icon.tsx

import React from 'react'
import './Icon.scss'
import { IconProps } from './interface'

const Icon: React.FC<IconProps> = ({ name, size = 24, color, iconElement }) => {
  return <span className="iconElement">{iconElement}</span>
}

export default Icon
