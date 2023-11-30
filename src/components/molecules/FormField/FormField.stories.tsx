// FormField/FormField.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import FormField from './FormField'
import { FormFieldProps } from './interface'

export default {
  title: 'Components/MOLECULES/FormField',
  component: FormField,
} as Meta

const Template: Story<FormFieldProps> = (args) => <FormField {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Your Label',
  placeholder: 'Your Placeholder',
  type: 'text',
  value: '',
  onChange: () => {}, // Replace with your actual onChange function
}
