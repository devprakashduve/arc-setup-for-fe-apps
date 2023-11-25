import React from 'react'
import Icon from '../atoms/Icon'
import Badge from '../atoms/Badge'

interface NotificationCardProps {
  icon: React.ReactNode
  title: string
  content: string
  date: string
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  icon,
  title,
  content,
  date,
}) => {
  return (
    <div className="notification-card">
      <div className="notification-icon">{icon}</div>
      <div className="notification-details">
        <h3>{title}</h3>
        <p>{content}</p>
        <Badge text={date} />
      </div>
    </div>
  )
}

export default NotificationCard
