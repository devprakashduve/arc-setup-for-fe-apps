// Label/Label.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Label from './Label'
import { LabelProps } from './interface'

export default {
  title: 'Components/ATOM/Label',
  component: Label,
} as Meta

const Template: Story<LabelProps> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Label Text',
  htmlFor: 'inputId',
}
