// ToggleSwitch/ToggleSwitch.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import ToggleSwitch from './ToggleSwitch'
import { ToggleSwitchProps } from './interface'

export default {
  title: 'Components/ATOM/ToggleSwitch',
  component: ToggleSwitch,
} as Meta

const Template: Story<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  onChange: (isChecked) => console.log(isChecked),
}
