// SearchBar/SearchBar.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import SearchBar from './SearchBar'
import { SearchBarProps } from './interface'

export default {
  title: 'Components/MOLECULES/SearchBar',
  component: SearchBar,
} as Meta

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Search...',
  value: '',
  onChange: () => {},
  onSearch: () => {},
}
