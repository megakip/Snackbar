import React, { useState, useEffect } from 'react'
import { CategoryGrid } from '../../components/CategoryGrid'
import { CategorySection } from '../../components/CategorySection'
import { CartSummary } from '../../components/CartSummary'
import { InfoModal } from '../../components/InfoModal'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'
import { HamburgerMenu } from '../../components/HamburgerMenu'
import { ContactPage } from '../../components/ContactPage'
import { useMenuData } from '../../hooks/useMenuData'
import { useLanguage } from '../../hooks/useLanguage'
import { MenuItem } from '../../lib/supabase'
import { getTranslation } from '../../lib/translations'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export const Iphone = (): JSX.Element => {
  const { categories, loading, error, getItemsByCategory, menuItems } = useMenuData()
  const { language, changeLanguage } = useLanguage()
  const [currentPage, setCurrentPage] = useState<'menu' | 'contact'>('menu')
  const [orderMode, setOrderMode] = useState(false) // New state for order mode
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [quantities, setQuantities] = useState<Record<number, number>>({})
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)
  const [showCategoryGrid, setShowCategoryGrid] = useState(true)

  const handleQuantityChange = (item: MenuItem, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [item.id]: quantity
    }))

    // Update cart items
    setCartItems(prev => {
      const existingIndex = prev.findIndex(cartItem => cartItem.id === item.id)
      
      if (quantity === 0) {
        // Remove item from cart
        return prev.filter(cartItem => cartItem.id !== item.id)
      } else if (existingIndex >= 0) {
        // Update existing item
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity
        }
        return updated
      } else {
        // Add new item
        return [...prev, {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity
        }]
      }
    })
  }

  // Handle quantity changes from cart
  const handleCartQuantityChange = (itemId: number, quantity: number) => {
    // Update quantities state
    setQuantities(prev => ({
      ...prev,
      [itemId]: quantity
    }))

    // Update cart items
    setCartItems(prev => {
      if (quantity === 0) {
        // Remove item from cart
        return prev.filter(cartItem => cartItem.id !== itemId)
      } else {
        // Update existing item
        const existingIndex = prev.findIndex(cartItem => cartItem.id === itemId)
        if (existingIndex >= 0) {
          const updated = [...prev]
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity
          }
          return updated
        }
      }
      return prev
    })
  }

  const handleInfoClick = (item: MenuItem) => {
    setSelectedItem(item)
    setIsInfoModalOpen(true)
  }

  const scrollToCategory = (category: string) => {
    const sectionId = `category-${category.toLowerCase().replace(/\s+/g, '-')}`
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 70 // Only the main header height now
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setActiveCategory(category)
  }

  const handlePageChange = (page: 'menu' | 'contact') => {
    setCurrentPage(page)
    // Reset scroll position when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOrderModeToggle = () => {
    setOrderMode(!orderMode)
    
    // If turning off order mode, clear all quantities and cart
    if (orderMode) {
      setQuantities({})
      setCartItems([])
      setIsCartOpen(false)
    }
  }

  // Handle scroll to update active category and hide/show category grid (only for menu page)
  useEffect(() => {
    if (currentPage !== 'menu') return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Hide category grid when scrolling down, show when at top
      setShowCategoryGrid(scrollPosition < 50)
      
      // Update active category
      const adjustedScrollPosition = scrollPosition + 200 // Increased offset for better detection

      for (const category of categories) {
        const sectionId = `category-${category.toLowerCase().replace(/\s+/g, '-')}`
        const element = document.getElementById(sectionId)
        
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight
          
          if (adjustedScrollPosition >= elementTop && adjustedScrollPosition < elementBottom) {
            setActiveCategory(category)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [categories, currentPage])

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center relative bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">{getTranslation(language, 'loading')}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center relative bg-white p-4">
        <div className="text-center text-red-600 max-w-md">
          <p className="text-lg font-semibold mb-2">{getTranslation(language, 'error')}</p>
          <p className="text-sm mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            {getTranslation(language, 'tryAgain')}
          </button>
        </div>
      </div>
    )
  }

  if (categories.length === 0 && currentPage === 'menu') {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center relative bg-white p-4">
        <div className="text-center max-w-md">
          <p className="text-lg font-semibold mb-2">{getTranslation(language, 'noCategories')}</p>
          <p className="text-sm text-gray-600 mb-4">
            {getTranslation(language, 'noItems')}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {getTranslation(language, 'refreshPage')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Always visible */}
      <header className="sticky top-0 z-40 text-white" style={{ backgroundColor: 'rgb(27, 26, 26)' }}>
        {/* Main Header Bar */}
        <div className="flex h-[70px] items-center justify-between px-4">
          <img
            className="h-12 w-auto"
            alt="Snackresto Logo"
            src="/Snackresto logo.svg"
          />
          
          {/* Language Switcher and Hamburger Menu */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher 
              currentLanguage={language}
              onLanguageChange={changeLanguage}
            />
            
            <HamburgerMenu
              language={language}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              orderMode={orderMode}
              onOrderModeToggle={handleOrderModeToggle}
            />
          </div>
        </div>
        
        {/* Category Grid Navigation - Only show on menu page */}
        {currentPage === 'menu' && (
          <div className={`transition-all duration-300 overflow-hidden ${
            showCategoryGrid ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <CategoryGrid
              categories={categories}
              language={language}
              activeCategory={activeCategory}
              onCategoryClick={scrollToCategory}
            />
          </div>
        )}
      </header>

      {/* Main Content */}
      {currentPage === 'contact' ? (
        <ContactPage language={language} />
      ) : (
        <main className="px-4 pb-32 pt-4">
          {categories.map((category) => (
            <CategorySection
              key={category}
              category={category}
              language={language}
              items={getItemsByCategory(category)}
              quantities={quantities}
              orderMode={orderMode}
              onQuantityChange={handleQuantityChange}
              onInfoClick={handleInfoClick}
            />
          ))}
        </main>
      )}

      {/* Cart Summary - Only show on menu page and when order mode is active */}
      {currentPage === 'menu' && orderMode && (
        <CartSummary
          items={cartItems}
          language={language}
          isOpen={isCartOpen}
          onToggle={() => setIsCartOpen(!isCartOpen)}
          onQuantityChange={handleCartQuantityChange}
        />
      )}

      {/* Info Modal - Only show on menu page */}
      {currentPage === 'menu' && (
        <InfoModal
          item={selectedItem}
          language={language}
          isOpen={isInfoModalOpen}
          onClose={() => {
            setIsInfoModalOpen(false)
            setSelectedItem(null)
          }}
        />
      )}
    </div>
  )
}