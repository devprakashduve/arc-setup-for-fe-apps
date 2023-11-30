// TextArea/TextArea.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import TextArea from './TextArea'
import { TextAreaProps } from './interface'

export default {
  title: 'Components/ATOM/TextArea',
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: (e) => console.log(e.target.value),
  placeholder: 'Enter text here...',
  rows: 4,
}
