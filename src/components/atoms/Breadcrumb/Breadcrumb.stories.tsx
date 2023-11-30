// Breadcrumb/Breadcrumb.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Breadcrumb from './Breadcrumb'
import { BreadcrumbProps } from './interface'

export default {
  title: 'Components/ATOM/Breadcrumb',
  component: Breadcrumb,
} as Meta

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />

export const Default = Template.bind({})
Default.args = {
  items: ['Home', 'Category', 'Subcategory', 'Page'],
}
