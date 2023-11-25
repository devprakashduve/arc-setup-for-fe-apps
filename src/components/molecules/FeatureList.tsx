import React from 'react'
import FeatureItem from './FeatureItem'

interface Feature {
  title: string
  description: string
  icon?: any
}

interface FeatureListProps {
  features: Feature[]
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="feature-list">
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  )
}

export default FeatureList
