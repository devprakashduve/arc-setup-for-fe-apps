import React from 'react'
import Avatar from '../atoms/Avatar'

interface Comment {
  id: number
  author: string
  content: string
  avatarUrl: string
}

interface CommentSectionProps {
  comments: Comment[]
}

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
