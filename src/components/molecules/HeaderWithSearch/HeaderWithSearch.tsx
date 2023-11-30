// HeaderWithSearch/HeaderWithSearch.tsx

import React from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import SearchBar from '../SearchBar'
import './HeaderWithSearch.scss'
import { HeaderWithSearchProps } from './interface'

const HeaderWithSearch: React.FC<HeaderWithSearchProps> = ({
  logoSrc,
  navItems,
  placeholder,
  searchValue,
  onSearchChange,
  onSearch,
}) => {
  return (
    <header className="header-with-search">
      <div className="header-content">
        <div className="header-logo">
          <Logo src={logoSrc} alt="Logo" />
        </div>
        <div className="header-nav">
          <Navigation items={navItems} />
        </div>
        <div className="header-search">
          <SearchBar
            placeholder={placeholder}
            value={searchValue}
            onChange={onSearchChange}
            onSearch={onSearch}
          />
        </div>
      </div>
    </header>
  )
}

export default HeaderWithSearch
