// Icon/Icon.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Icon from './Icon'
import { IconProps } from './interface'

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta

const Template: Story<IconProps> = (args) => <Icon {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'heart',
  size: 24,
  color: 'red',
}
