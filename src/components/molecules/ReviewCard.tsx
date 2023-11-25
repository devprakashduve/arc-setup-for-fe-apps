import React from 'react'
import Avatar from '../atoms/Avatar'
import Badge from '../atoms/Badge'

interface ReviewCardProps {
  username: string
  avatarUrl: string
  rating: number
  comment: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  username,
  avatarUrl,
  rating,
  comment,
}) => {
  return (
    <div className="review-card">
      <div className="review-user">
        <Avatar src={avatarUrl} alt={username} />
        <h4>{username}</h4>
      </div>
      <div className="review-content">
        <p>{comment}</p>
        <div className="review-rating">
          <Badge text={`Rating: ${rating}`} />
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
