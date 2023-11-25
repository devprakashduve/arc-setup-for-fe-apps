import React from 'react'
import Avatar from '../atoms/Avatar'

interface ContactCardProps {
  avatarSrc: string
  name: string
  email: string
}

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
