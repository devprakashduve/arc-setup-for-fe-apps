import React from 'react'
import ProfileInfo from './ProfileInfo'
import UserList from '../molecules/UserList'
import CommentSection from '../molecules/CommentSection'

interface UserProfileOrganismProps {
  userInfo: any // Replace with actual user data structure
  userList: any[] // Replace with actual data structure
  comments: any[] // Replace with actual data structure
}

const UserProfileOrganism: React.FC<UserProfileOrganismProps> = ({
  userInfo,
  userList,
  comments,
}) => {
  return (
    <div className="user-profile">
      <div className="user-profile-info">
        <ProfileInfo
          username={userInfo.username}
          avatarSrc={userInfo.avatarSrc}
          status={userInfo.status}
          bio={userInfo.bio}
        />
      </div>
      <div className="user-profile-friends">
        <UserList users={userList} />
      </div>
      <div className="user-profile-comments">
        <CommentSection comments={comments} />
      </div>
    </div>
  )
}

export default UserProfileOrganism
