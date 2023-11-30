// HeaderWithSearch/interface.tsx

import React from 'react'

export interface HeaderWithSearchProps {
  logoSrc: string
  navItems: string[]
  placeholder: string
  searchValue: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
}
