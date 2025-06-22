import React from 'react'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { MenuItem } from '../lib/supabase'
import { Language, getTranslation, translateMenuItem } from '../lib/translations'

interface InfoModalProps {
  item: MenuItem | null
  language: Language
  isOpen: boolean
  onClose: () => void
}

export const InfoModal: React.FC<InfoModalProps> = ({ 
  item, 
  language,
  isOpen, 
  onClose 
}) => {
  if (!isOpen || !item) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white rounded-lg">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold">{translateMenuItem(language, item.name)}</h3>
            <Button
              variant="outline"
              size="sm"
              className="p-1 h-8 w-8"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <img
            className="w-full h-48 object-cover rounded-lg mb-4"
            alt={item.name}
            src={item.image_url || '/image.png'}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = '/image.png'
            }}
          />
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{getTranslation(language, 'price')}</span>
              <span className="text-lg font-bold">€{item.price.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm">{getTranslation(language, 'itemNumber')}</span>
              <span className="text-sm text-gray-600">{item.item_number}</span>
            </div>
            
            {item.is_vegetarian && (
              <div className="flex items-center gap-2">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {getTranslation(language, 'vegetarian')}
                </span>
              </div>
            )}
            
            {item.description && (
              <div>
                <h4 className="font-medium mb-2">{getTranslation(language, 'description')}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}