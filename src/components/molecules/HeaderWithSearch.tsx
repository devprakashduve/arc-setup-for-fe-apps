import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import SearchBar from './SearchBar'

interface HeaderWithSearchProps {
  logoSrc: string
  navItems: string[]
  placeholder: string
  searchValue: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
}

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
