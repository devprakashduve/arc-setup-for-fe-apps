// ArticleCard/ArticleCard.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import ArticleCard from './ArticleCard'
import { ArticleCardProps } from './interface'

export default {
  title: 'Components/MOLECULES/ArticleCard',
  component: ArticleCard,
} as Meta

const Template: Story<ArticleCardProps> = (args) => <ArticleCard {...args} />

export const Default = Template.bind({})
Default.args = {
  imageUrl: 'https://placekitten.com/300/200', // replace with your actual image URL
  title: 'Sample Article',
  category: 'Technology',
}
