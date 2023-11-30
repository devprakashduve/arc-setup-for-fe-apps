// Tooltip/Tooltip.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Tooltip from './Tooltip'
import { TooltipProps } from './interface'

export default {
  title: 'Components/ATOM/Tooltip',
  component: Tooltip,
} as Meta

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Tooltip Text',
  position: 'top',
  children: <button>Hover me</button>,
}
