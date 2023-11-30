// CartSummary/CartSummary.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import CartSummary from './CartSummary'
import { CartSummaryProps } from './interface'

export default {
  title: 'Components/MOLECULES/CartSummary',
  component: CartSummary,
} as Meta

const Template: Story<CartSummaryProps> = (args) => <CartSummary {...args} />

export const Default = Template.bind({})
Default.args = {
  itemCount: 5,
  totalPrice: 150,
}
