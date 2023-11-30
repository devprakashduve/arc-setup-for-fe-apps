// Select/Select.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Select from './Select'
import { SelectProps } from './interface'

export default {
  title: 'Components/ATOM/Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: 'option1',
  onChange: (value) => console.log(value),
}
