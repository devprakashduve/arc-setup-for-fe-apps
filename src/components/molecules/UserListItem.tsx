import React from 'react'
import Avatar from '../atoms/Avatar'
import Badge from '../atoms/Badge'

interface UserListItemProps {
  username: string
  avatarSrc: string
  status: 'online' | 'offline'
}

const UserListItem: React.FC<UserListItemProps> = ({
  username,
  avatarSrc,
  status,
}) => {
  return (
    <div className="user-list-item">
      <Avatar src={avatarSrc} alt={username} />
      <div className="user-details">
        <h3>{username}</h3>
        <Badge text={status} color={status === 'online' ? 'green' : 'red'} />
      </div>
    </div>
  )
}

export default UserListItem
