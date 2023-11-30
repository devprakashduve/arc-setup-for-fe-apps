// Image/Image.tsx

import React from 'react'
import './Image.scss'
import { ImageProps } from './interface'

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <img
      className="custom-image"
      src={src}
      alt={alt}
      width={width ?? '110px'}
      height={height ?? '110px'}
    />
  )
}

export default Image
