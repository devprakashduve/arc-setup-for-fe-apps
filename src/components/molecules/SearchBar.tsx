import React from 'react'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

interface SearchBarProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSearch: () => void
}

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
      />
      <Button onClick={onSearch} text="Search" />
    </div>
  )
}

export default SearchBar
