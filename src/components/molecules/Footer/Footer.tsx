// Footer/Footer.tsx

import React from 'react'
import './Footer.scss'
import { FooterProps } from './interface'

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
