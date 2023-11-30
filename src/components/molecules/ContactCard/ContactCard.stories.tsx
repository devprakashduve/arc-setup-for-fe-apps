// ContactCard/ContactCard.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import ContactCard from './ContactCard'
import { ContactCardProps } from './interface'

export default {
  title: 'Components/MOLECULES/ContactCard',
  component: ContactCard,
} as Meta

const Template: Story<ContactCardProps> = (args) => <ContactCard {...args} />

export const Default = Template.bind({})
Default.args = {
  avatarSrc: 'https://placekitten.com/80/80', // replace with your actual avatar URL
  name: 'John Doe',
  email: 'john.doe@example.com',
}
