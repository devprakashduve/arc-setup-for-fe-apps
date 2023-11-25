import React from 'react'
import UserProfile from './UserProfile'

interface User {
  id: number
  username: string
  avatarSrc: string
  status: 'online' | 'offline'
}

interface UserListProps {
  users: User[]
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserProfile
          key={user.id}
          username={user.username}
          avatarSrc={user.avatarSrc}
          status={user.status}
        />
      ))}
    </div>
  )
}

export default UserList
