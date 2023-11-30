// LoginForm/LoginForm.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import LoginForm from './LoginForm'
import { LoginFormProps } from './interface'

export default {
  title: 'Components/MOLECULES/LoginForm',
  component: LoginForm,
} as Meta

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = {
  onSubmit: () => console.log('Submit clicked'),
}
