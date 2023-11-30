// ProgressBar/ProgressBar.tsx

import React from 'react'
import './ProgressBar.scss'
import { ProgressBarProps } from './interface'

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ProgressBar
