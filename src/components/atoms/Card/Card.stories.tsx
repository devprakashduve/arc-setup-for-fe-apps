// Card/Card.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Card from './Card'
import { CardProps } from './interface'

export default {
  title: 'Components/Card',
  component: Card,
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  imageUrl: 'https://placekitten.com/300/200',
  title: 'Card Title',
  description: 'This is a sample card description.',
  tags: ['Tag1', 'Tag2', 'Tag3'],
}
