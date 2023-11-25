// Modal/Modal.stories.tsx

import React from 'react'
import { Story, Meta } from '@storybook/react'
import Modal from './Modal'
import { ModalProps } from './interface'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  onClose: () => {},
  title: 'Example Modal',
  children: <p>This is the modal content.</p>,
}
