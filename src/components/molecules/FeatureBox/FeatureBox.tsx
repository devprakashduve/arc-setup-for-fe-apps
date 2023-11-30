// FeatureBox/FeatureBox.tsx

import React from 'react'
import Icon from '@/components/atoms/Icon'
import Badge from '@/components/atoms/Badge'
import './FeatureBox.scss'
import { FeatureBoxProps } from './interface'

const FeatureBox: React.FC<FeatureBoxProps> = ({
  icon,
  title,
  description,
  status,
}) => {
  return (
    <div className="feature-box">
      <div className="icon-wrapper">
        <Icon name={icon} />
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="status-badge">
        <Badge text={status} />
      </div>
    </div>
  )
}

export default FeatureBox
