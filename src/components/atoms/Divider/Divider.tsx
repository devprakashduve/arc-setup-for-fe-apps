// Divider/Divider.tsx

import React from 'react'
import './Divider.scss'
import { DividerProps } from './interface'

const Divider: React.FC<DividerProps> = ({ color }) => {
  return <hr className="divider" style={{ backgroundColor: color }} />
}

export default Divider
