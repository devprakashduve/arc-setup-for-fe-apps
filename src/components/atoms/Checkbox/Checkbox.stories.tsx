// Checkbox/Checkbox.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Checkbox from './Checkbox'
import { CheckboxProps } from './interface'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Checkbox Label',
  checked: false,
  onChange: (checked: boolean) => console.log(`Checkbox checked: ${checked}`),
}
