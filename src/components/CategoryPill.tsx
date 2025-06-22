import React from 'react'

interface CategoryPillProps {
  name: string
  onClick: () => void
  isActive?: boolean
}

export const CategoryPill: React.FC<CategoryPillProps> = ({ 
  name, 
  onClick, 
  isActive = false 
}) => {
  return (
    <button
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive 
          ? 'bg-gray-900 text-white shadow-md' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
      }`}
      onClick={onClick}
    >
      {name}
    </button>
  )
}