import React from 'react'
import Comment from '../molecules/Comment'

interface CommentData {
  id: number
  author: string
  content: string
}

interface CommentListProps {
  comments: CommentData[]
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </div>
  )
}

export default CommentList
