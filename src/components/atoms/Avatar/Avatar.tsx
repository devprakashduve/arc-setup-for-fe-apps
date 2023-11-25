// Avatar/Avatar.tsx

import React from 'react'
import './Avatar.scss'
import { AvatarProps } from './interface'
import { addClass } from '@/components/reusableFunctionality/customFunctionality'

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <img
      className={addClass('avatar,' + props.classes)}
      src={props.src}
      alt={props.alt}
    />
  )
}

export default Avatar
