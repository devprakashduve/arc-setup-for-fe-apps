import React from 'react'
import Icon from '../atoms/Icon'
import Badge from '../atoms/Badge'

interface FeatureBoxProps {
  icon: string
  title: string
  description: string
  status: 'new' | 'updated' | 'hot' | 'sale'
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  icon,
  title,
  description,
  status,
}) => {
  return (
    <div className="feature-box">
      <div className="icon-wrapper">
        <Icon icon={icon} />
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
