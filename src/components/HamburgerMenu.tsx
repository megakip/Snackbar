import React, { useState } from 'react'
import { X, ShoppingCart } from 'lucide-react'
import { Language, getTranslation } from '../lib/translations'

interface HamburgerMenuProps {
  language: Language
  currentPage: 'menu' | 'contact'
  onPageChange: (page: 'menu' | 'contact') => void
  orderMode: boolean
  onOrderModeToggle: () => void
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  language,
  currentPage,
  onPageChange,
  orderMode,
  onOrderModeToggle
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handlePageChange = (page: 'menu' | 'contact') => {
    onPageChange(page)
    setIsOpen(false)
  }

  const handleOrderModeToggle = () => {
    onOrderModeToggle()
    setIsOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="flex flex-col gap-1 p-2 hover:bg-gray-800 rounded transition-colors"
        onClick={toggleMenu}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleMenu}
        />
      )}

      {/* Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-900">
            {getTranslation(language, 'navigation')}
          </h2>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-4">
          <nav className="space-y-2">
            <button
              onClick={() => handlePageChange('menu')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'menu'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {getTranslation(language, 'menuPage')}
            </button>
            
            <button
              onClick={() => handlePageChange('contact')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                currentPage === 'contact'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {getTranslation(language, 'contactPage')}
            </button>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Order Mode Toggle */}
            <div className="px-4 py-2">
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                {getTranslation(language, 'orderSettings')}
              </h3>
              
              <button
                onClick={handleOrderModeToggle}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                  orderMode
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-200 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-medium">
                      {getTranslation(language, 'orderModeTitle')}
                    </p>
                    <p className="text-xs opacity-75">
                      {getTranslation(language, 'orderModeDescription')}
                    </p>
                  </div>
                </div>
                
                {/* Toggle Switch */}
                <div className={`relative w-12 h-6 rounded-full transition-colors ${
                  orderMode ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    orderMode ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </div>
              </button>

              {/* Status Text */}
              <p className="text-xs text-gray-500 mt-2 px-4">
                {orderMode 
                  ? getTranslation(language, 'orderModeActive')
                  : getTranslation(language, 'orderModeInactive')
                }
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}