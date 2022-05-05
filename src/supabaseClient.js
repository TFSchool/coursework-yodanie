import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cryqluuukumkkiztlbng.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyeXFsdXV1a3Vta2tpenRsYm5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1Mjc5OTUsImV4cCI6MTk2MzEwMzk5NX0.-4CyrH0hPVqUADNIquV591xd1HQDxIgZShXMnhyexVg'

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
