// ArticleCard/ArticleCard.tsx

import React from 'react'
import Image from '@/components/atoms/Image'
import Badge from '@/components/atoms/Badge'
import './ArticleCard.scss'
import { ArticleCardProps } from './interface'

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  title,
  category,
}) => {
  return (
    <div className="article-card">
      <div className="article-image">
        <Image src={imageUrl} alt={title} />
      </div>
      <div className="article-details">
        <h3>{title}</h3>
        <Badge text={category} />
      </div>
    </div>
  )
}

export default ArticleCard
