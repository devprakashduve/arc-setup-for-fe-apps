// CardList/CardList.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import CardList from './CardList'
import { CardListProps } from './interface'

export default {
  title: 'Components/MOLECULES/CardList',
  component: CardList,
} as Meta

const Template: Story<CardListProps> = (args) => <CardList {...args} />

export const Default = Template.bind({})
Default.args = {
  cards: [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'https://placekitten.com/300/200', // replace with your actual image URL
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'https://placekitten.com/300/200', // replace with your actual image URL
    },
    // add more cards as needed
  ],
}
