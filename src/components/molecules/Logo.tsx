import React from 'react'
import Image from 'next/image'

interface LogoProps {
  src: string
  alt: string
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} />
}

export default Logo
