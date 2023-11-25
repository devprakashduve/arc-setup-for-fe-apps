import React from 'react'
import Checkbox from '../atoms/Checkbox'
import Select from '../atoms/Select'

interface FilterSectionProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: any) => void
  onFilterChange: (isChecked: boolean) => void
}

const FilterSection: React.FC<FilterSectionProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  onFilterChange,
}) => {
  return (
    <div className="filter-section">
      <Select
        options={categories.map((category) => ({
          value: category,
          label: category,
        }))}
        value={selectedCategory}
        onChange={(value) => onCategoryChange(value)}
      />
      <Checkbox
        checked={false}
        onChange={onFilterChange}
        label="Apply Filter"
      />
    </div>
  )
}

export default FilterSection
