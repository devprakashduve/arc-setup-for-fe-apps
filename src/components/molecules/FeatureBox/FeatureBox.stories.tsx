// FeatureBox/FeatureBox.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import FeatureBox from './FeatureBox'
import { FeatureBoxProps } from './interface'

export default {
  title: 'Components/MOLECULES/FeatureBox',
  component: FeatureBox,
} as Meta

const Template: Story<FeatureBoxProps> = (args) => <FeatureBox {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: 'hart', // replace with your actual icon name
  title: 'Feature Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  status: 'new',
}
