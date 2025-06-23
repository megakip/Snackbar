import React from 'react'
import { MenuItemCard } from './MenuItemCard'
import { MenuItem } from '../lib/supabase'
import { Language, getTranslation } from '../lib/translations'

interface CategorySectionProps {
  category: string
  language: Language
  items: MenuItem[]
  quantities: Record<number, number>
  orderMode: boolean
  onQuantityChange: (item: MenuItem, quantity: number) => void
  onInfoClick?: (item: MenuItem) => void
}

export const CategorySection: React.FC<CategorySectionProps> = ({ 
  category, 
  language,
  items, 
  quantities,
  orderMode,
  onQuantityChange,
  onInfoClick
}) => {
  const sectionId = `category-${category.toLowerCase().replace(/\s+/g, '-')}`

  // Function to get category icon
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'patat':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <img 
              src="/patat/Patat.png" 
              alt="Patat icon" 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                // Fallback to emoji if image fails to load
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.nextElementSibling!.textContent = '🍟'
              }}
            />
            <span className="text-white text-xl hidden">🍟</span>
          </div>
        )
      case 'snacks':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🌭</span>
          </div>
        )
      case 'broodjes':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🥪</span>
          </div>
        )
      case 'lunchgerechten':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🍳</span>
          </div>
        )
      case 'hoofdgerechten':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🍖</span>
          </div>
        )
      case 'ijs':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🍦</span>
          </div>
        )
      case 'drinken':
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🥤</span>
          </div>
        )
      default:
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xl">🍽️</span>
          </div>
        )
    }
  }

  return (
    <section id={sectionId} className="py-8 scroll-mt-[200px]">
      <div className="mb-6 flex items-center gap-3">
        {getCategoryIcon(category)}
        <h2 className="text-2xl font-bold text-gray-900">
          {getTranslation(language, `categories.${category}`)}
        </h2>
      </div>
      
      <div className="space-y-3 max-w-2xl mx-auto">
        {items.length > 0 ? (
          items.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              language={language}
              quantity={quantities[item.id] || 0}
              orderMode={orderMode}
              onQuantityChange={onQuantityChange}
              onInfoClick={onInfoClick}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">
              {getTranslation(language, 'noItems')}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}