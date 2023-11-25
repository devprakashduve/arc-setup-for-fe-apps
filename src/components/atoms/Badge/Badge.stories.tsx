// Badge/Badge.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Badge from './Badge'
import { BadgeProps } from './interface'

export default {
  title: 'Components/ATOM/Badge',
  component: Badge,
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Badge Text',
  color: 'blue',
}
