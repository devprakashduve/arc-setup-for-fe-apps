// Avatar/Avatar.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Avatar from './Avatar'
import { AvatarProps } from './interface'

export default {
  title: 'Components/ATOM/Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Circle = Template.bind({})
Circle.args = {
  src: 'https://placekitten.com/200/200',
  alt: 'Avatar',
  size: 40,
  classes: 'right,circle',
}
export const Box = Template.bind({})
Box.args = {
  src: 'https://placekitten.com/200/200',
  alt: 'Avatar',
  size: 40,
  classes: 'right,box',
}
export const Flat = Template.bind({})
Flat.args = {
  src: 'https://placekitten.com/200/200',
  alt: 'Avatar',
  size: 40,
  classes: 'left,flat',
}
