// CommentSection/CommentSection.tsx

import React from 'react'
import Avatar from '@/components/atoms/Avatar'
import './CommentSection.scss'
import { CommentSectionProps } from './interface'

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="comment-section">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <Avatar src={comment.avatarUrl} alt={comment.author} />
          <div className="comment-content">
            <p>{comment.content}</p>
            <p className="comment-author">{comment.author}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentSection
