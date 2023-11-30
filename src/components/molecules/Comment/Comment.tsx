// Comment/Comment.tsx

import React from 'react'
import Avatar from '@/components/atoms/Avatar'
import './Comment.scss'
import { CommentProps } from './interface'

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
