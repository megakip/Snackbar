import React from 'react'
import { Language, getTranslation } from '../lib/translations'

interface CategoryGridProps {
  categories: string[]
  language: Language
  activeCategory: string | null
  onCategoryClick: (category: string) => void
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ 
  categories, 
  language,
  activeCategory, 
  onCategoryClick 
}) => {
  // Function to get category icon and colors
  const getCategoryStyle = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'patat':
        return {
          icon: (
            <img 
              src="/patat/Patat.png" 
              alt="Patat icon" 
              className="w-5 h-5 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.nextElementSibling!.textContent = '🍟'
              }}
            />
          ),
          fallbackIcon: '🍟',
          activeColors: 'bg-gradient-to-br from-orange-400 to-yellow-500 text-white border-orange-400',
          inactiveColors: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'
        }
      case 'snacks':
        return {
          icon: '🌭',
          activeColors: 'bg-gradient-to-br from-red-400 to-pink-500 text-white border-red-400',
          inactiveColors: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
        }
      case 'broodjes':
        return {
          icon: '🥪',
          activeColors: 'bg-gradient-to-br from-amber-400 to-orange-500 text-white border-amber-400',
          inactiveColors: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
        }
      case 'lunchgerechten':
        return {
          icon: '🍳',
          activeColors: 'bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-400',
          inactiveColors: 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'
        }
      case 'hoofdgerechten':
        return {
          icon: '🍖',
          activeColors: 'bg-gradient-to-br from-purple-400 to-indigo-500 text-white border-purple-400',
          inactiveColors: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
        }
      case 'ijs':
        return {
          icon: '🍦',
          activeColors: 'bg-gradient-to-br from-blue-400 to-cyan-500 text-white border-blue-400',
          inactiveColors: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
        }
      case 'drinken':
        return {
          icon: '🥤',
          activeColors: 'bg-gradient-to-br from-teal-400 to-blue-500 text-white border-teal-400',
          inactiveColors: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100'
        }
      default:
        return {
          icon: '🍽️',
          activeColors: 'bg-gradient-to-br from-gray-400 to-gray-500 text-white border-gray-400',
          inactiveColors: 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
        }
    }
  }

  return (
    <div className="px-4 py-4">
      <div className="flex flex-wrap gap-3 justify-start">
        {categories.map((category) => {
          const style = getCategoryStyle(category)
          const isActive = activeCategory === category
          
          return (
            <button
              key={category}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer border-2 shadow-sm ${
                isActive 
                  ? style.activeColors + ' shadow-lg transform scale-105' 
                  : style.inactiveColors + ' hover:shadow-md hover:transform hover:scale-102'
              }`}
              onClick={() => onCategoryClick(category)}
            >
              {/* Icon */}
              <span className="text-lg flex-shrink-0">
                {typeof style.icon === 'string' ? style.icon : style.icon}
                {style.fallbackIcon && <span className="hidden">{style.fallbackIcon}</span>}
              </span>
              
              {/* Category Name */}
              <span className="font-medium">
                {getTranslation(language, `categories.${category}`)}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}