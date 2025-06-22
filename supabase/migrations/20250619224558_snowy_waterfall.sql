/*
  # Add RLS policies for menu data access

  1. Security
    - Add policy to allow public read access to menu items
    - This enables the anonymous user to read menu data without authentication

  2. Changes
    - Create policy for SELECT operations on "Menukaart snackbar" table
    - Allow public access since this is a menu that should be visible to all users
*/

-- Allow public read access to menu items
CREATE POLICY "Allow public read access to menu items"
  ON public."Menukaart snackbar"
  FOR SELECT
  TO public
  USING (true);

-- Alternative: If you want to be more specific, you can allow only anon role
-- CREATE POLICY "Allow anonymous read access to menu items"
--   ON public."Menukaart snackbar"
--   FOR SELECT
--   TO anon
--   USING (true);