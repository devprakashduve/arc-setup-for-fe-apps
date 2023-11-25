import React from 'react'
import Icon from '../atoms/Icon'

interface NotificationProps {
  icon: React.ReactNode // This can be an SVG or an Icon component
  message: string
  timestamp: string
}

const Notification: React.FC<NotificationProps> = ({
  icon,
  message,
  timestamp,
}) => {
  return (
    <div className="notification">
      <div className="notification-icon">{icon}</div>
      <div className="notification-content">
        <p>{message}</p>
        <span>{timestamp}</span>
      </div>
    </div>
  )
}

export default Notification
