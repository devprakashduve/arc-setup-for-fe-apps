// Breadcrumb/Breadcrumb.tsx

import React from 'react'
import './Breadcrumb.scss'
import { BreadcrumbProps } from './interface'

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {index !== items.length - 1 && <span> / </span>}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
