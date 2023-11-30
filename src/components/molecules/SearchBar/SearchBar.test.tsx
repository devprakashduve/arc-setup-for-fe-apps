// SearchBar/SearchBar.test.tsx

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'

test('renders SearchBar component', () => {
  const handleSearch = jest.fn()
  const { getByText, getByPlaceholderText } = render(
    <SearchBar
      placeholder="Search..."
      value=""
      onChange={() => {}}
      onSearch={handleSearch}
    />,
  )

  const searchButton = getByText('Search')
  const searchInput = getByPlaceholderText('Search...')

  fireEvent.click(searchButton)
  expect(handleSearch).toHaveBeenCalledTimes(1)

  fireEvent.change(searchInput, { target: { value: 'test' } })
  // expect(searchInput.value).toBe('test')
})
