// NavBar/NavBar.tsx

import React from 'react'
import './NavBar.scss'
import Logo from '../Logo'
import Navigation from '../Navigation'
import Button from '@/components/atoms/Button'
import { NavBarProps } from './interface'

const NavBar: React.FC<NavBarProps> = ({ logoSrc, navItems }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo src={logoSrc} alt="Logo" />
      </div>
      <div className="navbar-links">
        <Navigation items={navItems} />
      </div>
      <div className="navbar-actions">
        <Button text="Sign In" onClick={() => console.log('Sign In')} />
        <Button text="Sign Up" onClick={() => console.log('Sign Up')} />
      </div>
    </nav>
  )
}

export default NavBar
