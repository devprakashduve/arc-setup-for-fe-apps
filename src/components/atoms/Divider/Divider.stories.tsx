// Divider/Divider.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Divider from './Divider'
import { DividerProps } from './interface'

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta

const Template: Story<DividerProps> = (args) => <Divider {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'black',
}
