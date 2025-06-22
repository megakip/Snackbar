import React, { useState } from 'react'
import { InfoIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { MenuItem } from '../lib/supabase'
import { Language, getTranslation, translateMenuItem } from '../lib/translations'

interface MenuItemCardProps {
  item: MenuItem
  quantity: number
  language: Language
  onQuantityChange: (item: MenuItem, quantity: number) => void
  onInfoClick?: (item: MenuItem) => void
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ 
  item, 
  quantity,
  language,
  onQuantityChange,
  onInfoClick
}) => {
  const handleIncrement = () => {
    onQuantityChange(item, quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      onQuantityChange(item, quantity - 1)
    }
  }

  const handleInfoClick = () => {
    onInfoClick?.(item)
  }

  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          {/* Product Image - Left */}
          <div className="flex-shrink-0">
            <img
              className="w-16 h-16 object-cover rounded"
              alt={item.name}
              src={item.image_url || '/image.png'}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/image.png'
              }}
            />
          </div>

          {/* Product Info - Middle */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 mb-1">
              <h3 className="font-medium text-black text-base leading-tight">
                {translateMenuItem(language, item.name)}
              </h3>
              {item.is_vegetarian && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex-shrink-0">
                  {getTranslation(language, 'vegetarian').charAt(0)}
                </span>
              )}
            </div>
            <p className="font-semibold text-black text-lg">
              €{item.price.toFixed(2)}
            </p>
          </div>

          {/* Controls - Right */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 rounded-full border-red-500 text-red-500 hover:bg-red-50"
                onClick={handleDecrement}
                disabled={quantity === 0}
              >
                <span className="text-lg font-bold">−</span>
              </Button>
              
              <span className="w-8 text-center font-medium text-lg">
                {quantity}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 rounded-full border-green-500 text-green-500 hover:bg-green-50"
                onClick={handleIncrement}
              >
                <span className="text-lg font-bold">+</span>
              </Button>
            </div>

            {/* Info Button */}
            <Button
              variant="outline"
              size="sm"
              className="w-8 h-8 p-0 rounded-full border-gray-400 text-gray-600 hover:bg-gray-50"
              onClick={handleInfoClick}
            >
              <InfoIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}