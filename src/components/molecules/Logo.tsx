import React from 'react'
import Image from '../atoms/Image'
import Link from 'next/link'

interface LogoProps {
  src: string
  alt: string
  type: 'text' | 'image'
}

const Logo: React.FC<LogoProps> = ({ src, alt, type }) => {
  const result =
    type === 'text' ? (
      <Link href={'/'} className="logo">
        <button>{'<CODEX>'}</button>
      </Link>
    ) : (
      <Image src={src} alt={alt} width={100} height={100} />
    )

  return result
}

export default Logo
