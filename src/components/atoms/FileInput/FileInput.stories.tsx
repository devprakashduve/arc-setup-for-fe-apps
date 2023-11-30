// FileInput/FileInput.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import FileInput from './FileInput'
import { FileInputProps } from './interface'

export default {
  title: 'Components/ATOM/FileInput',
  component: FileInput,
} as Meta

const Template: Story<FileInputProps> = (args) => <FileInput {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: (files) => {
    console.log('Selected Files:', files)
  },
}
