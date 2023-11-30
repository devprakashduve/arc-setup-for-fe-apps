// CardList/CardList.tsx

import React from 'react'
import Card from '@/components/atoms/Card'
import './CardList.scss'
import { CardListProps } from './interface'

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          tags={[]}
        />
      ))}
    </div>
  )
}

export default CardList
