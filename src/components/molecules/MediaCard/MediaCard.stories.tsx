// MediaCard/MediaCard.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import MediaCard from './MediaCard'
import { MediaCardProps } from './interface'

export default {
  title: 'Components/MOLECULES/MediaCard',
  component: MediaCard,
} as Meta

const Template: Story<MediaCardProps> = (args) => <MediaCard {...args} />

export const Default = Template.bind({})
Default.args = {
  imageUrl: 'https://placekitten.com/300/200',
  title: 'Sample Media Card',
  description: 'A description of the media content.',
  tags: ['Tag1', 'Tag2', 'Tag3'],
}
