// Footer/Footer.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Footer from './Footer'
import { FooterProps } from './interface'

export default {
  title: 'Components/MOLECULES/Footer',
  component: Footer,
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  companyName: 'Your Company',
  year: new Date().getFullYear(),
}
