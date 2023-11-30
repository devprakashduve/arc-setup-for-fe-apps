// Button/Button.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './interface'

export default {
  title: 'Components/ATOM/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const WithoutIcon = Template.bind({})
WithoutIcon.args = {
  onClick: () => console.log('Button clicked'),
  text: 'Primary Button',
  withIcon: false,
}
export const WithIcon = Template.bind({})
WithIcon.args = {
  onClick: () => console.log('Button clicked'),
  text: 'Primary Button',
  withIcon: true,
  iconElement: <i className="fa-regular fa-star"></i>,
}
