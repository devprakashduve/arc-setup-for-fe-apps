// LoadingSpinner/LoadingSpinner.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import LoadingSpinner from './LoadingSpinner'
import { LoadingSpinnerProps } from './interface'

export default {
  title: 'Components/LoadingSpinner',
  component: LoadingSpinner,
} as Meta

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
)

export const Default = Template.bind({})
Default.args = {
  size: 50,
}
