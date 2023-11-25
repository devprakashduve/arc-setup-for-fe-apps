import React from 'react'
import Card from '../atoms/Card'

interface CardData {
  id: number
  title: string
  description: string
  imageUrl: string
}

interface CardListProps {
  cards: CardData[]
}

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
