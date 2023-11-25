import React from 'react'

interface NavigationProps {
  items: string[]
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={`/${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
