import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase configuration:', {
  url: supabaseUrl,
  hasAnonKey: !!supabaseAnonKey,
  anonKeyLength: supabaseAnonKey?.length
})

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type MenuItem = {
  id: number
  created_at: string
  name: string
  image_url: string
  price: number
  item_number: number
  is_vegetarian: boolean
  description: string | null
  category: string
}

// Test the connection with detailed error logging
export const testConnection = async () => {
  try {
    console.log('Testing Supabase connection...')
    
    // First test: Simple count query
    const { data, error, count } = await supabase
      .from('Menukaart snackbar')
      .select('*', { count: 'exact' })
      .limit(1)
    
    console.log('Connection test result:', { 
      success: !error, 
      data, 
      error: error?.message || error,
      count,
      errorDetails: error 
    })
    
    if (error) {
      console.error('Detailed error:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      })
    }
    
    return { success: !error, data, error, count }
  } catch (err) {
    console.error('Connection test failed with exception:', err)
    return { success: false, error: err }
  }
}

// Test RLS policies
export const testRLSAccess = async () => {
  try {
    console.log('Testing RLS access...')
    
    const { data, error } = await supabase
      .from('Menukaart snackbar')
      .select('id, name, category')
      .limit(5)
    
    console.log('RLS test result:', { data, error })
    return { success: !error, data, error }
  } catch (err) {
    console.error('RLS test failed:', err)
    return { success: false, error: err }
  }
}