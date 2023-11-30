// NavBar/NavBar.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import NavBar from './NavBar'
import { NavBarProps } from './interface'

export default {
  title: 'Components/MOLECULES/NavBar',
  component: NavBar,
} as Meta

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />

export const Default = Template.bind({})
Default.args = {
  logoSrc: 'https://placekitten.com/300/200',
  navItems: [
    { name: 'Home', link: '/' },
    { name: 'about', link: '/about' },
  ],
}
