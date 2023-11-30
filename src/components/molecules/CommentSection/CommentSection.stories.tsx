// CommentSection/CommentSection.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import CommentSection from './CommentSection'
import { CommentSectionProps } from './interface'

export default {
  title: 'Components/MOLECULES/CommentSection',
  component: CommentSection,
} as Meta

const Template: Story<CommentSectionProps> = (args) => (
  <CommentSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  comments: [
    {
      id: 1,
      author: 'John Doe',
      content: 'This is a sample comment.',
      avatarUrl: 'https://placekitten.com/40/40', // replace with your actual avatar URL
    },
    // add more comments as needed
  ],
}
