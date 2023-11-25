import React from 'react'
import Image from 'next/image'
import Badge from '../atoms/Badge'

interface ArticleCardProps {
  imageUrl: string
  title: string
  category: string
}

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
