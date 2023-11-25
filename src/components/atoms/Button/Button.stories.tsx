// Button/Button.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './interface'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onClick: () => console.log('Button clicked'),
  text: 'Primary Button',
}
