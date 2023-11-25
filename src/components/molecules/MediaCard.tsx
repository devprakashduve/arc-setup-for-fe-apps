import React from 'react'
import Image from 'next/image'
import Badge from '../atoms/Badge'

interface MediaCardProps {
  imageUrl: string
  title: string
  description: string
  tags: string[]
}

const MediaCard: React.FC<MediaCardProps> = ({
  imageUrl,
  title,
  description,
  tags,
}) => {
  return (
    <div className="media-card">
      <div className="media-image">
        <Image src={imageUrl} alt={title} />
      </div>
      <div className="media-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="media-tags">
          {tags.map((tag, index) => (
            <Badge key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MediaCard
