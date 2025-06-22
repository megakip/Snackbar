import { useState, useEffect } from 'react'
import { supabase, MenuItem, testConnection, testRLSAccess } from '../lib/supabase'

export const useMenuData = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMenuData()
  }, [])

  const fetchMenuData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('=== Starting menu data fetch ===')
      
      // Test connection first
      const connectionTest = await testConnection()
      console.log('Connection test:', connectionTest)
      
      // Test RLS access
      const rlsTest = await testRLSAccess()
      console.log('RLS test:', rlsTest)
      
      // Main data fetch
      console.log('Fetching all menu data...')
      
      const { data, error } = await supabase
        .from('Menukaart snackbar')
        .select('*')
        .order('category')
        .order('item_number')

      console.log('Main query result:', { 
        dataCount: data?.length || 0, 
        error: error?.message || error,
        firstItem: data?.[0]
      })

      if (error) {
        console.error('Supabase query error:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        })
        
        // Provide more specific error messages
        if (error.code === 'PGRST116') {
          throw new Error('Tabel niet gevonden. Controleer of de tabel "Menukaart snackbar" bestaat.')
        } else if (error.code === '42501') {
          throw new Error('Geen toegang tot de tabel. RLS policies moeten worden toegevoegd.')
        } else {
          throw error
        }
      }

      if (!data || data.length === 0) {
        console.warn('No data returned from database')
        setError('Geen menu items gevonden in de database. Controleer of er data in de tabel staat.')
        return
      }

      console.log('Successfully loaded', data.length, 'menu items')
      console.log('Sample items:', data.slice(0, 3))
      
      setMenuItems(data)
      
      // Extract unique categories
      const uniqueCategories = [...new Set(data.map(item => item.category))]
      console.log('Categories found:', uniqueCategories)
      setCategories(uniqueCategories)
      
    } catch (error) {
      console.error('Error fetching menu data:', error)
      const errorMessage = error instanceof Error ? error.message : 'Er is een onbekende fout opgetreden'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const getItemsByCategory = (category: string) => {
    const items = menuItems.filter(item => item.category === category)
    console.log(`Items for category "${category}":`, items.length)
    return items
  }

  return {
    menuItems,
    categories,
    loading,
    error,
    getItemsByCategory,
    refetch: fetchMenuData
  }
}