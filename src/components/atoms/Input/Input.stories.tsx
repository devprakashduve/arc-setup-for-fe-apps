// Input/Input.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Input from './Input'
import { InputProps } from './interface'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Flat = Template.bind({})
Flat.args = {
  type: 'text',
  designShape: 'flat',
  placeholder: 'Enter text...',
  value: '',
  onChange: () => {},
}
export const Box = Template.bind({})
Box.args = {
  type: 'text',
  designShape: 'box',
  placeholder: 'Enter text...',
  value: '',
  onChange: () => {},
}
