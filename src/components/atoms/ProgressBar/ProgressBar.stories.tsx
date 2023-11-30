// ProgressBar/ProgressBar.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import ProgressBar from './ProgressBar'
import { ProgressBarProps } from './interface'

export default {
  title: 'Components/ATOM/ProgressBar',
  component: ProgressBar,
} as Meta

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  progress: 50,
}
