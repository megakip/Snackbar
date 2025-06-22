import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Language, languages } from '../lib/translations'

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const currentLang = languages.find(lang => lang.code === currentLanguage)
  
  const getFlagComponent = (code: Language) => {
    switch (code) {
      case 'nl':
        return (
          <div className="w-6 h-4 rounded overflow-hidden flex-shrink-0">
            <div className="h-1.5 bg-red-500"></div>
            <div className="h-1 bg-white"></div>
            <div className="h-1.5 bg-blue-600"></div>
          </div>
        )
      case 'de':
        return (
          <div className="w-6 h-4 rounded overflow-hidden flex-shrink-0">
            <div className="h-1.5 bg-black"></div>
            <div className="h-1 bg-red-500"></div>
            <div className="h-1.5 bg-yellow-400"></div>
          </div>
        )
      case 'en':
        return (
          <div className="w-6 h-4 rounded overflow-hidden flex-shrink-0 relative bg-blue-800">
            <div className="absolute inset-0 bg-blue-800"></div>
            <div className="absolute top-0 left-0 w-3 h-2 bg-blue-900"></div>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-white"></div>
            <div className="absolute top-1 left-0 w-full h-0.5 bg-red-500"></div>
            <div className="absolute top-2 left-0 w-full h-0.5 bg-white"></div>
            <div className="absolute top-3 left-0 w-full h-0.5 bg-red-500"></div>
            <div className="absolute top-0 left-0 w-0.5 h-2 bg-white"></div>
            <div className="absolute top-0 left-1 w-0.5 h-2 bg-red-500"></div>
            <div className="absolute top-0 left-2 w-0.5 h-2 bg-white"></div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 text-white hover:bg-gray-800 px-2 py-1 rounded transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {getFlagComponent(currentLanguage)}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[140px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 transition-colors ${
                  currentLanguage === lang.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
                onClick={() => {
                  onLanguageChange(lang.code)
                  setIsOpen(false)
                }}
              >
                {getFlagComponent(lang.code)}
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}