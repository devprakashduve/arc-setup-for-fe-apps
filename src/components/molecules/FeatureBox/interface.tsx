// FeatureBox/interface.tsx

import React from 'react'

export interface FeatureBoxProps {
  icon: string
  title: string
  description: string
  status: 'new' | 'updated' | 'hot' | 'sale'
}
