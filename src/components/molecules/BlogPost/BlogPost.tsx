// BlogPost/BlogPost.tsx

import React from 'react'
import Avatar from '@/components/atoms/Avatar'
import Badge from '@/components/atoms/Badge'
import './BlogPost.scss'
import { BlogPostProps } from './interface'

const BlogPost: React.FC<BlogPostProps> = ({ title, author, content }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <div className="author-info">
        <Avatar src={author.avatarUrl} alt={author.name} />
        <div className="author-details">
          <h3>{author.name}</h3>
          <Badge
            text={author.status}
            color={author.status === 'online' ? 'green' : 'red'}
          />
        </div>
      </div>
      <p>{content}</p>
    </div>
  )
}

export default BlogPost
