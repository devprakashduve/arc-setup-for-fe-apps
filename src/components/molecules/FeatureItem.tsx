import React from 'react'
import Icon from '../atoms/Icon'

interface FeatureItemProps {
  icon: React.ReactNode // This can be an SVG or an Icon component
  title: string
  description: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <div className="feature-details">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem
