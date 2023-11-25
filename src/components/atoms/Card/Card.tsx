// Card/Card.tsx

import React from 'react'
import './Card.scss'
import { CardProps } from './interface'
import Image from '../Image'
import Badge from '../Badge'

const Card: React.FC<CardProps> = ({ imageUrl, title, description, tags }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image src={imageUrl} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <Badge key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
