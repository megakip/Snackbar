import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { X, ShoppingCart } from 'lucide-react'
import { Language, getTranslation, translateMenuItem } from '../lib/translations'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartSummaryProps {
  items: CartItem[]
  language: Language
  isOpen: boolean
  onToggle: () => void
  onQuantityChange: (itemId: number, quantity: number) => void
}

export const CartSummary: React.FC<CartSummaryProps> = ({ 
  items, 
  language,
  isOpen, 
  onToggle,
  onQuantityChange
}) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleIncrement = (itemId: number, currentQuantity: number) => {
    onQuantityChange(itemId, currentQuantity + 1)
  }

  const handleDecrement = (itemId: number, currentQuantity: number) => {
    if (currentQuantity > 0) {
      onQuantityChange(itemId, currentQuantity - 1)
    }
  }

  return (
    <>
      {/* Overlay when cart is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onToggle}
        />
      )}

      {/* Fixed Bottom Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Expandable Cart Panel - slides up from bottom */}
        {isOpen && (
          <div className="bg-white border-t border-gray-200 shadow-2xl animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {getTranslation(language, 'cartTitle')}
                </h3>
                <p className="text-sm text-gray-600">
                  {getTranslation(language, 'cartSubtitle')}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0 rounded-full"
                onClick={onToggle}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Cart Items - Scrollable */}
            <div className="max-h-80 overflow-y-auto">
              {totalItems === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>Je snacklijstje is nog leeg</p>
                  <p className="text-sm">Voeg items toe door op + te klikken</p>
                </div>
              ) : (
                items.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {translateMenuItem(language, item.name)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.quantity} x €{item.price.toFixed(2)}
                      </p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-7 h-7 p-0 rounded-full border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() => handleDecrement(item.id, item.quantity)}
                          disabled={item.quantity === 0}
                        >
                          <span className="text-sm font-bold">−</span>
                        </Button>
                        
                        <span className="w-6 text-center font-medium text-sm">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-7 h-7 p-0 rounded-full border-green-500 text-green-500 hover:bg-green-50"
                          onClick={() => handleIncrement(item.id, item.quantity)}
                        >
                          <span className="text-sm font-bold">+</span>
                        </Button>
                      </div>
                      
                      {/* Total Price for this item */}
                      <div className="text-right min-w-[60px]">
                        <p className="font-semibold text-gray-900">
                          €{(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Total - only show if there are items */}
            {totalItems > 0 && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    {getTranslation(language, 'total')}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    €{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Bar with Cart Button - Always visible */}
        <div className="bg-white border-t border-gray-200 p-4">
          <button
            onClick={onToggle}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 px-4 flex items-center justify-between transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {/* Item Count Badge */}
                {totalItems > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </div>
                )}
              </div>
              <div className="text-left">
                <p className="font-semibold">
                  {getTranslation(language, 'cartTitle')}
                </p>
                <p className="text-xs opacity-75">
                  {getTranslation(language, 'cartSubtitle')}
                </p>
              </div>
            </div>
            
            {totalItems > 0 && (
              <div className="text-right">
                <p className="font-bold">€{totalPrice.toFixed(2)}</p>
                <p className="text-xs opacity-75">{totalItems} items</p>
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  )
}