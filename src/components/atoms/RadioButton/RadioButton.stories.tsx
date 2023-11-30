// RadioButton/RadioButton.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import RadioButton from './RadioButton'
import { RadioButtonProps } from './interface'

export default {
  title: 'Components/ATOM/RadioButton',
  component: RadioButton,
} as Meta

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  onChange: () => {},
  label: 'Radio Button Label',
}
