import { useState, useEffect } from 'react'
import { Language } from '../lib/translations'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage or default to Dutch
    const saved = localStorage.getItem('menu-language')
    return (saved as Language) || 'nl'
  })

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('menu-language', language)
  }, [language])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return {
    language,
    changeLanguage
  }
}