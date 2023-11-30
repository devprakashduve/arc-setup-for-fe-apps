// Navigation/Navigation.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Navigation from './Navigation'
import { NavigationProps } from './interface'

export default {
  title: 'Components/MOLECULES/Navigation',
  component: Navigation,
} as Meta

const Template: Story<NavigationProps> = (args) => <Navigation {...args} />

export const Default = Template.bind({})
Default.args = {
  items: [
    { name: 'Home', link: '/' },
    { name: 'about', link: '/about' },
  ],
}
