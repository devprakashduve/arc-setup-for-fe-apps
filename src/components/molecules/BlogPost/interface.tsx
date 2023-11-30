// BlogPost/interface.tsx

import React from 'react'

export interface BlogPostProps {
  title: string
  author: {
    name: string
    avatarUrl: string
    status: 'online' | 'offline'
  }
  content: React.ReactNode
}
