// Label/Label.tsx

import React from 'react'
import './Label.scss'
import { LabelProps } from './interface'

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label className="custom-label" htmlFor={htmlFor}>
      {text}
    </label>
  )
}

export default Label
