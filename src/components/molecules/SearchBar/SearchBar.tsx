// SearchBar/SearchBar.tsx

import React from 'react'
import './SearchBar.scss'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import { SearchBarProps } from './interface'

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  onChange,
  onSearch,
}) => {
  return (
    <div className="search-bar">
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        designShape={'flat'}
      />
      <Button onClick={onSearch} text="Search" withIcon={false} />
    </div>
  )
}

export default SearchBar
