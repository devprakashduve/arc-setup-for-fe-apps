// Alert.stories.tsx

import React from 'react'
import type { Story, Meta, StoryObj } from '@storybook/react'
import { CloseButtonProps } from './interface'
import CloseButton from '.'

export default {
  title: 'Components/ATOM/CloseButton',
  component: CloseButton,
} as Meta

const Template: Story<CloseButtonProps> = (args) => <CloseButton {...args} />

export const AlignLeft: StoryObj<CloseButtonProps> = Template.bind({})
AlignLeft.args = {
  align: 'left',
}

export const AlignRight: StoryObj<CloseButtonProps> = Template.bind({})
AlignRight.args = {
  align: 'right',
}
