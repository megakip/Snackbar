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
  orderMode: boolean
  onQuantityChange: (item: MenuItem, quantity: number) => void
  onInfoClick?: (item: MenuItem) => void
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ 
  item, 
  quantity,
  language,
  orderMode,
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
      <CardContent className="p-0">
        <div className="flex items-center w-full">
          {/* Product Image - Left */}
          <div className="flex-shrink-0 w-[71px] h-[76px] flex items-center justify-center">
            <img
              className="w-[72px] h-[48px] object-cover rounded"
              alt={item.name}
              src={item.image_url || '/image.png'}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = '/image.png'
              }}
            />
          </div>

          {/* Main Content - Middle and Right */}
          <div className="flex-1 flex items-center justify-between px-4 py-4">
            {/* Left side - Product Info and Quantity Controls */}
            <div className="flex flex-col gap-2">
              {/* Product Name */}
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-black text-[16px] leading-none">
                  {translateMenuItem(language, item.name)}
                </h3>
                {item.is_vegetarian && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {getTranslation(language, 'vegetarian').charAt(0)}
                  </span>
                )}
              </div>

              {/* Quantity Controls - Only show when order mode is active */}
              {orderMode && (
                <div className="flex items-center rounded-[7px] shadow-sm h-10 w-[120px] overflow-hidden border border-gray-200">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 rounded-none bg-white hover:bg-gray-100 border-none"
                    onClick={handleDecrement}
                    disabled={quantity === 0}
                  >
                    <span className="text-lg font-bold text-red-500">−</span>
                  </Button>
                  
                  <div className="w-10 h-10 bg-white flex items-center justify-center border-l border-r border-gray-200">
                    <span className="text-[14px] font-medium text-black">
                      {quantity}
                    </span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-10 h-10 p-0 rounded-none bg-white hover:bg-gray-100 border-none"
                    onClick={handleIncrement}
                  >
                    <span className="text-lg font-bold text-green-500">+</span>
                  </Button>
                </div>
              )}
            </div>

            {/* Right side - Price and Info */}
            <div className="flex flex-col items-end gap-2">
              {/* Price */}
              <p className="font-light text-black text-[16px] leading-none">
                €{item.price.toFixed(2)}
              </p>

              {/* Info Button */}
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 rounded bg-white shadow-sm hover:bg-gray-50 border border-gray-100"
                onClick={handleInfoClick}
              >
                <InfoIcon className="h-3.5 w-3.5 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}