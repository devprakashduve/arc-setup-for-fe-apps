// Navigation/Navigation.tsx

import React from 'react'
import './Navigation.scss'
import { NavigationProps } from './interface'
import Link from 'next/link'

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="navigation">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={`${item.link.toLowerCase()}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
