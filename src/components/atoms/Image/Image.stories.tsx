// Image/Image.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Image from './Image'
import { ImageProps } from './interface'

export default {
  title: 'Components/Image',
  component: Image,
} as Meta

const Template: Story<ImageProps> = (args) => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://placekitten.com/300/200',
  alt: 'Sample Image',
  width: 300,
  height: 200,
}
