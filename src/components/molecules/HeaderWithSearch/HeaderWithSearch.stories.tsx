// HeaderWithSearch/HeaderWithSearch.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import HeaderWithSearch from './HeaderWithSearch'
import { HeaderWithSearchProps } from './interface'

export default {
  title: 'Components/MOLECULES/HeaderWithSearch',
  component: HeaderWithSearch,
} as Meta

const Template: Story<HeaderWithSearchProps> = (args) => (
  <HeaderWithSearch {...args} />
)

export const Default = Template.bind({})
Default.args = {
  logoSrc: 'https://placekitten.com/200/200', // replace with your actual logo URL
  navItems: [
    { name: 'Home', link: '/' },
    { name: 'about', link: '/about' },
  ],
  placeholder: 'Search...',
  searchValue: '',
  onSearchChange: () => {},
  onSearch: () => {},
}
