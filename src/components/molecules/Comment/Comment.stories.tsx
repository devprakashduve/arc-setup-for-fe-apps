// Comment/Comment.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Comment from './Comment'
import { CommentProps } from './interface'

export default {
  title: 'Components/MOLECULES/Comment',
  component: Comment,
} as Meta

const Template: Story<CommentProps> = (args) => <Comment {...args} />

export const Default = Template.bind({})
Default.args = {
  author: 'John Doe',
  content: 'This is a sample comment.',
  avatarSrc: 'https://placekitten.com/40/40', // replace with your actual avatar URL
}
