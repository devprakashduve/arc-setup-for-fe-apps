// ContactCard/ContactCard.tsx

import React from 'react'
import Avatar from '@/components/atoms/Avatar'
import './ContactCard.scss'
import { ContactCardProps } from './interface'

const ContactCard: React.FC<ContactCardProps> = ({
  avatarSrc,
  name,
  email,
}) => {
  return (
    <div className="contact-card">
      <div className="contact-avatar">
        <Avatar src={avatarSrc} alt={name} />
      </div>
      <div className="contact-details">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default ContactCard
