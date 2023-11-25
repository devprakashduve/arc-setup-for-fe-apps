import React from 'react'
import Avatar from '../atoms/Avatar'

interface CommentProps {
  author: string
  content: string
  avatarSrc?: string
}

const Comment: React.FC<CommentProps> = ({ author, content, avatarSrc }) => {
  return (
    <div className="comment">
      {avatarSrc && <Avatar src={avatarSrc} alt={author} />}
      <div className="comment-content">
        <h4>{author}</h4>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Comment
