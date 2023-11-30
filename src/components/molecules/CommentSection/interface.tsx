// CommentSection/interface.tsx

import React from 'react'

export interface Comment {
  id: number
  author: string
  content: string
  avatarUrl: string
}

export interface CommentSectionProps {
  comments: Comment[]
}
