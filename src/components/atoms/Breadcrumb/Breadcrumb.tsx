// Breadcrumb/Breadcrumb.tsx

import React from 'react'
import './Breadcrumb.scss'
import { BreadcrumbProps } from './interface'
import Divider from '../Divider'
import Link from 'next/link'

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {index < items.length - 1 ? (
              <Link href={item}>{item.toUpperCase()}</Link>
            ) : (
              <span> {item.toUpperCase()} </span>
            )}
            {index !== items.length - 1 && <span> {' / '} </span>}
          </li>
        ))}
      </ul>
      <Divider />
    </nav>
  )
}

export default Breadcrumb
