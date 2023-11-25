// Alert.stories.tsx

import React from 'react'
import type { Story, Meta, StoryObj } from '@storybook/react'
// import type  StoryObj  from '@storybook/addons'

import { AlertProps } from './interface'
import Alert from './Alert'

export default {
  title: 'Components/ATOM/Alert',
  component: Alert,
} as Meta

const Template: Story<AlertProps> = (args) => <Alert {...args} />

export const Success: StoryObj<AlertProps> = Template.bind({})
Success.args = {
  type: 'success',
  message: 'This is a success message!',
}

export const Error: StoryObj<AlertProps> = Template.bind({})
Error.args = {
  type: 'error',
  message: 'This is an error message!',
}

export const Warning: StoryObj<AlertProps> = Template.bind({})
Warning.args = {
  type: 'warning',
  message: 'This is a warning message!',
}

export const Info: StoryObj<AlertProps> = Template.bind({})
Info.args = {
  type: 'info',
  message: 'This is an info message!',
}

export const Closable: StoryObj<AlertProps> = Template.bind({})
Closable.args = {
  type: 'info',
  message: 'This is a closable info message with a close button!',
}
