// ResponsiveNavBar/ResponsiveNavBar.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import ResponsiveNavBar from './Header'
import { HeaderProps } from './interface'

export default {
  title: 'Components/MOLECULES/Header',
  component: ResponsiveNavBar,
} as Meta

const Template: Story<HeaderProps> = (args) => <ResponsiveNavBar {...args} />

export const Default = Template.bind({})
Default.args = {
  logoSrc: 'https://placekitten.com/300/200',
  navItems: [
    { name: 'Home', link: '/' },
    { name: 'about', link: '/about' },
  ],
}
