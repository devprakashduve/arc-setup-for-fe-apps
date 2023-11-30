// HeaderWithSearch/interface.tsx

import React from 'react'
import { MenuProps } from '../Header/interface'

export interface HeaderWithSearchProps {
  logoSrc: string
  navItems?: MenuProps[] | any
  placeholder: string
  searchValue: string
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
}
