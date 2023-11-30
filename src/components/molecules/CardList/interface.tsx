// CardList/interface.tsx

import React from 'react'

export interface CardData {
  id: number
  title: string
  description: string
  imageUrl: string
}

export interface CardListProps {
  cards: CardData[]
}
