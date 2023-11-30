// BlogPost/BlogPost.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import BlogPost from './BlogPost'
import { BlogPostProps } from './interface'

export default {
  title: 'Components/MOLECULES/BlogPost',
  component: BlogPost,
} as Meta

const Template: Story<BlogPostProps> = (args) => <BlogPost {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Sample Blog Post',
  author: {
    name: 'John Doe',
    avatarUrl: 'https://placekitten.com/40/40', // replace with your actual avatar URL
    status: 'online',
  },
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
