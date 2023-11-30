// Avatar/Avatar.tsx

import React from 'react'
import './Avatar.scss'
import { AvatarProps } from './interface'
import { addClass } from '@/components/reusableFunctionality/customFunctionality'
import Image from '../Image'

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <Image
      classes={addClass('avatar,' + props.classes)}
      src={props.src}
      alt={props.alt}
    />
  )
}

export default Avatar
