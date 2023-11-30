'use client'
// ResponsiveNavBar/ResponsiveNavBar.tsx

import React, { useState } from 'react'
import './Header.scss'
import Logo from '../Logo'
import Navigation from '../Navigation'
import { HeaderProps } from './interface'
import Icon from '@/components/atoms/Icon'
import Modal from '@/components/atoms/Modal'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Header: React.FC<HeaderProps> = ({ logoSrc, navItems }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen)
  }
  const handleModel = () => {
    console.log(isModalOpen)
    setIsModalOpen(!isModalOpen)
  }

  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: 'Cobol',
    },
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Basic',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name: 'Java',
    },
  ]

  const handleOnSearch = (string: any, results: any) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result: any) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item: any) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item: { id: any; name: any }) => {
    return (
      <>
        <span
          className="searchResult"
          style={{ display: 'block', textAlign: 'left' }}
        >
          {item.name}
        </span>
      </>
    )
  }

  return (
    <>
      <nav className={`responsive-navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-logo">
          <Logo src={logoSrc} alt="Logo" type="text" />
        </div>
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Navigation items={navItems} />
          <span onClick={handleModel}>
            <Icon
              iconElement={<i className="fa-solid fa-magnifying-glass"></i>}
            />
          </span>
        </div>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </div>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModel}
        title={'Enter your key'}
        isBackgroundFull={false}
      >
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
          placeholder="Enter your key.."
        />
      </Modal>
    </>
  )
}

export default Header
