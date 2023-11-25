import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import Button from '../atoms/Button'

interface NavBarProps {
  logoSrc: string
  navItems: string[]
}

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
