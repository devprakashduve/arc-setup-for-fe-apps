import React from 'react'
import Avatar from '../atoms/Avatar'
import Badge from '../atoms/Badge'

interface UserProfileProps {
  username: string
  avatarSrc: string
  status: 'online' | 'offline'
}

const UserProfile: React.FC<UserProfileProps> = ({
  username,
  avatarSrc,
  status,
}) => {
  return (
    <div className="user-profile">
      <Avatar src={avatarSrc} alt={username} />
      <h3>{username}</h3>
      <Badge text={status} color={status === 'online' ? 'green' : 'red'} />
    </div>
  )
}

export default UserProfile
