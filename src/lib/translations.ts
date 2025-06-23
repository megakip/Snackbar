export type Language = 'nl' | 'de' | 'en'

export const translations = {
  nl: {
    // Header
    menu: 'Menu',
    
    // Navigation
    navigation: 'Navigatie',
    menuPage: 'Menukaart',
    contactPage: 'Contact',
    
    // Order Mode Settings
    orderSettings: 'Bestel Instellingen',
    orderModeTitle: 'Bestel Modus',
    orderModeDescription: 'Activeer om items toe te voegen',
    orderModeActive: 'Bestel modus is actief - je kunt nu items toevoegen',
    orderModeInactive: 'Bestel modus is uitgeschakeld - alleen menu bekijken',
    
    // Categories (these will be translated but database categories remain the same)
    categories: {
      'Patat': 'Patat',
      'Snacks': 'Snacks', 
      'Broodjes': 'Broodjes',
      'Lunchgerechten': 'Lunchgerechten',
      'Hoofdgerechten': 'Hoofdgerechten',
      'Ijs': 'Ijs',
      'Drinken': 'Drinken'
    },
    
    // Menu Items - Individual food items
    menuItems: {
      // Patat items
      'Patat': 'Patat',
      'Patat speciaal': 'Patat speciaal',
      'Patat oorlog': 'Patat oorlog',
      'Patat mayo': 'Patat mayo',
      'Patat ketchup': 'Patat ketchup',
      'Patat curry': 'Patat curry',
      'Patat satésaus': 'Patat satésaus',
      'Grote patat': 'Grote patat',
      'Kleine patat': 'Kleine patat',
      
      // Snacks
      'Frikandel': 'Frikandel',
      'Frikandel speciaal': 'Frikandel speciaal',
      'Kroket': 'Kroket',
      'Kaaskroket': 'Kaaskroket',
      'Bamischijf': 'Bamischijf',
      'Nasischijf': 'Nasischijf',
      'Kipnuggets': 'Kipnuggets',
      'Bitterballen': 'Bitterballen',
      'Loempia': 'Loempia',
      'Mexicano': 'Mexicano',
      'Viandel': 'Viandel',
      
      // Broodjes
      'Broodje hamburger': 'Broodje hamburger',
      'Broodje cheeseburger': 'Broodje cheeseburger',
      'Broodje frikandel': 'Broodje frikandel',
      'Broodje kroket': 'Broodje kroket',
      'Broodje braadworst': 'Broodje braadworst',
      'Broodje gezond': 'Broodje gezond',
      'Broodje kaas': 'Broodje kaas',
      'Broodje ham': 'Broodje ham',
      'Broodje ei': 'Broodje ei',
      
      // Lunchgerechten
      'Uitsmijter ham': 'Uitsmijter ham',
      'Uitsmijter kaas': 'Uitsmijter kaas',
      'Uitsmijter spek': 'Uitsmijter spek',
      'Tosti ham': 'Tosti ham',
      'Tosti kaas': 'Tosti kaas',
      'Tosti ham/kaas': 'Tosti ham/kaas',
      
      // Hoofdgerechten
      'Schnitzel': 'Schnitzel',
      'Kipschnitzel': 'Kipschnitzel',
      'Cordon bleu': 'Cordon bleu',
      'Spare ribs': 'Spare ribs',
      'Kipsaté': 'Kipsaté',
      'Varkenssaté': 'Varkenssaté',
      
      // Ijs
      'Softijs': 'Softijs',
      'Magnum': 'Magnum',
      'Cornetto': 'Cornetto',
      'Raket': 'Raket',
      'Calippo': 'Calippo',
      
      // Drinken
      'Cola': 'Cola',
      'Fanta': 'Fanta',
      'Sprite': 'Sprite',
      'Water': 'Water',
      'Koffie': 'Koffie',
      'Thee': 'Thee',
      'Bier': 'Bier',
      'Wijn': 'Wijn'
    },
    
    // Cart
    cartTitle: 'Snacklijstje',
    cartSubtitle: '(kan NIET online besteld worden)',
    total: 'Totaal:',
    
    // Item details
    price: 'Prijs:',
    itemNumber: 'Artikelnummer:',
    vegetarian: 'Vegetarisch',
    description: 'Beschrijving:',
    
    // Contact Page
    contactTitle: 'Contact & Locatie',
    contactSubtitle: 'Kom langs voor de lekkerste snacks!',
    ourStory: 'Ons Verhaal',
    storyText1: 'Welkom bij Snackresto, jouw lokale snackbar waar kwaliteit en smaak centraal staan. Al meer dan 15 jaar serveren wij de lekkerste patat, snacks en broodjes in de buurt.',
    storyText2: 'Onze verse ingrediënten en traditionele bereidingswijze zorgen ervoor dat elke hap een smaakervaring is. Van klassieke patat speciaal tot onze huisgemaakte kroket - bij ons vind je altijd iets lekkers!',
    contactInfo: 'Contactgegevens',
    address: 'Adres',
    phone: 'Telefoon',
    email: 'E-mail',
    openingHours: 'Openingstijden',
    location: 'Locatie',
    mapDescription: 'Klik op de kaart voor routebeschrijving',
    monday: 'Maandag',
    tuesday: 'Dinsdag',
    wednesday: 'Woensdag',
    thursday: 'Donderdag',
    friday: 'Vrijdag',
    saturday: 'Zaterdag',
    sunday: 'Zondag',
    closed: 'Gesloten',
    
    // Loading and errors
    loading: 'Menu wordt geladen...',
    error: 'Fout bij laden van menu',
    tryAgain: 'Probeer opnieuw',
    noCategories: 'Geen categorieën gevonden',
    noItems: 'Geen items gevonden in deze categorie',
    refreshPage: 'Ververs pagina'
  },
  
  de: {
    // Header
    menu: 'Menü',
    
    // Navigation
    navigation: 'Navigation',
    menuPage: 'Speisekarte',
    contactPage: 'Kontakt',
    
    // Order Mode Settings
    orderSettings: 'Bestelleinstellungen',
    orderModeTitle: 'Bestellmodus',
    orderModeDescription: 'Aktivieren um Artikel hinzuzufügen',
    orderModeActive: 'Bestellmodus ist aktiv - Sie können jetzt Artikel hinzufügen',
    orderModeInactive: 'Bestellmodus ist deaktiviert - nur Menü ansehen',
    
    // Categories
    categories: {
      'Patat': 'Pommes',
      'Snacks': 'Snacks',
      'Broodjes': 'Brötchen', 
      'Lunchgerechten': 'Mittagsgerichte',
      'Hoofdgerechten': 'Hauptgerichte',
      'Ijs': 'Eis',
      'Drinken': 'Getränke'
    },
    
    // Menu Items
    menuItems: {
      // Patat items
      'Patat': 'Pommes',
      'Patat speciaal': 'Pommes spezial',
      'Patat oorlog': 'Pommes Krieg',
      'Patat mayo': 'Pommes Mayo',
      'Patat ketchup': 'Pommes Ketchup',
      'Patat curry': 'Pommes Curry',
      'Patat satésaus': 'Pommes Satésauce',
      'Grote patat': 'Große Pommes',
      'Kleine patat': 'Kleine Pommes',
      
      // Snacks
      'Frikandel': 'Frikandel',
      'Frikandel speciaal': 'Frikandel spezial',
      'Kroket': 'Krokette',
      'Kaaskroket': 'Käsekrokette',
      'Bamischijf': 'Bami-Scheibe',
      'Nasischijf': 'Nasi-Scheibe',
      'Kipnuggets': 'Hähnchen-Nuggets',
      'Bitterballen': 'Bitterballen',
      'Loempia': 'Frühlingsrolle',
      'Mexicano': 'Mexicano',
      'Viandel': 'Viandel',
      
      // Broodjes
      'Broodje hamburger': 'Hamburger-Brötchen',
      'Broodje cheeseburger': 'Cheeseburger-Brötchen',
      'Broodje frikandel': 'Frikandel-Brötchen',
      'Broodje kroket': 'Kroketten-Brötchen',
      'Broodje braadworst': 'Bratwurst-Brötchen',
      'Broodje gezond': 'Gesundes Brötchen',
      'Broodje kaas': 'Käse-Brötchen',
      'Broodje ham': 'Schinken-Brötchen',
      'Broodje ei': 'Ei-Brötchen',
      
      // Lunchgerechten
      'Uitsmijter ham': 'Spiegelei mit Schinken',
      'Uitsmijter kaas': 'Spiegelei mit Käse',
      'Uitsmijter spek': 'Spiegelei mit Speck',
      'Tosti ham': 'Schinken-Toast',
      'Tosti kaas': 'Käse-Toast',
      'Tosti ham/kaas': 'Schinken-Käse-Toast',
      
      // Hoofdgerechten
      'Schnitzel': 'Schnitzel',
      'Kipschnitzel': 'Hähnchenschnitzel',
      'Cordon bleu': 'Cordon bleu',
      'Spare ribs': 'Spare Ribs',
      'Kipsaté': 'Hähnchen-Saté',
      'Varkenssaté': 'Schweine-Saté',
      
      // Ijs
      'Softijs': 'Softeis',
      'Magnum': 'Magnum',
      'Cornetto': 'Cornetto',
      'Raket': 'Rakete',
      'Calippo': 'Calippo',
      
      // Drinken
      'Cola': 'Cola',
      'Fanta': 'Fanta',
      'Sprite': 'Sprite',
      'Water': 'Wasser',
      'Koffie': 'Kaffee',
      'Thee': 'Tee',
      'Bier': 'Bier',
      'Wijn': 'Wein'
    },
    
    // Cart
    cartTitle: 'Bestellliste',
    cartSubtitle: '(kann NICHT online bestellt werden)',
    total: 'Gesamt:',
    
    // Item details
    price: 'Preis:',
    itemNumber: 'Artikelnummer:',
    vegetarian: 'Vegetarisch',
    description: 'Beschreibung:',
    
    // Contact Page
    contactTitle: 'Kontakt & Standort',
    contactSubtitle: 'Besuchen Sie uns für die besten Snacks!',
    ourStory: 'Unsere Geschichte',
    storyText1: 'Willkommen bei Snackresto, Ihrer lokalen Snackbar, wo Qualität und Geschmack im Mittelpunkt stehen. Seit über 15 Jahren servieren wir die leckersten Pommes, Snacks und Brötchen in der Nachbarschaft.',
    storyText2: 'Unsere frischen Zutaten und traditionelle Zubereitungsweise sorgen dafür, dass jeder Bissen ein Geschmackserlebnis ist. Von klassischen Pommes spezial bis zu unserer hausgemachten Krokette - bei uns finden Sie immer etwas Leckeres!',
    contactInfo: 'Kontaktdaten',
    address: 'Adresse',
    phone: 'Telefon',
    email: 'E-Mail',
    openingHours: 'Öffnungszeiten',
    location: 'Standort',
    mapDescription: 'Klicken Sie auf die Karte für Wegbeschreibung',
    monday: 'Montag',
    tuesday: 'Dienstag',
    wednesday: 'Mittwoch',
    thursday: 'Donnerstag',
    friday: 'Freitag',
    saturday: 'Samstag',
    sunday: 'Sonntag',
    closed: 'Geschlossen',
    
    // Loading and errors
    loading: 'Menü wird geladen...',
    error: 'Fehler beim Laden des Menüs',
    tryAgain: 'Erneut versuchen',
    noCategories: 'Keine Kategorien gefunden',
    noItems: 'Keine Artikel in dieser Kategorie gefunden',
    refreshPage: 'Seite aktualisieren'
  },
  
  en: {
    // Header
    menu: 'Menu',
    
    // Navigation
    navigation: 'Navigation',
    menuPage: 'Menu',
    contactPage: 'Contact',
    
    // Order Mode Settings
    orderSettings: 'Order Settings',
    orderModeTitle: 'Order Mode',
    orderModeDescription: 'Activate to add items',
    orderModeActive: 'Order mode is active - you can now add items',
    orderModeInactive: 'Order mode is disabled - viewing menu only',
    
    // Categories
    categories: {
      'Patat': 'Chips',
      'Snacks': 'Snacks',
      'Broodjes': 'Sandwiches',
      'Lunchgerechten': 'Lunch Dishes', 
      'Hoofdgerechten': 'Main Courses',
      'Ijs': 'Ice Cream',
      'Drinken': 'Drinks'
    },
    
    // Menu Items
    menuItems: {
      // Patat items
      'Patat': 'Chips',
      'Patat speciaal': 'Special Chips',
      'Patat oorlog': 'War Chips',
      'Patat mayo': 'Chips with Mayo',
      'Patat ketchup': 'Chips with Ketchup',
      'Patat curry': 'Curry Chips',
      'Patat satésaus': 'Chips with Satay Sauce',
      'Grote patat': 'Large Chips',
      'Kleine patat': 'Small Chips',
      
      // Snacks
      'Frikandel': 'Dutch Sausage',
      'Frikandel speciaal': 'Special Dutch Sausage',
      'Kroket': 'Croquette',
      'Kaaskroket': 'Cheese Croquette',
      'Bamischijf': 'Bami Patty',
      'Nasischijf': 'Nasi Patty',
      'Kipnuggets': 'Chicken Nuggets',
      'Bitterballen': 'Dutch Meatballs',
      'Loempia': 'Spring Roll',
      'Mexicano': 'Spicy Sausage',
      'Viandel': 'Beef Sausage',
      
      // Broodjes
      'Broodje hamburger': 'Hamburger Roll',
      'Broodje cheeseburger': 'Cheeseburger Roll',
      'Broodje frikandel': 'Dutch Sausage Roll',
      'Broodje kroket': 'Croquette Roll',
      'Broodje braadworst': 'Bratwurst Roll',
      'Broodje gezond': 'Healthy Sandwich',
      'Broodje kaas': 'Cheese Roll',
      'Broodje ham': 'Ham Roll',
      'Broodje ei': 'Egg Roll',
      
      // Lunchgerechten
      'Uitsmijter ham': 'Fried Eggs with Ham',
      'Uitsmijter kaas': 'Fried Eggs with Cheese',
      'Uitsmijter spek': 'Fried Eggs with Bacon',
      'Tosti ham': 'Ham Toastie',
      'Tosti kaas': 'Cheese Toastie',
      'Tosti ham/kaas': 'Ham & Cheese Toastie',
      
      // Hoofdgerechten
      'Schnitzel': 'Schnitzel',
      'Kipschnitzel': 'Chicken Schnitzel',
      'Cordon bleu': 'Cordon Bleu',
      'Spare ribs': 'Spare Ribs',
      'Kipsaté': 'Chicken Satay',
      'Varkenssaté': 'Pork Satay',
      
      // Ijs
      'Softijs': 'Soft Serve Ice Cream',
      'Magnum': 'Magnum',
      'Cornetto': 'Cornetto',
      'Raket': 'Ice Rocket',
      'Calippo': 'Calippo',
      
      // Drinken
      'Cola': 'Cola',
      'Fanta': 'Fanta',
      'Sprite': 'Sprite',
      'Water': 'Water',
      'Koffie': 'Coffee',
      'Thee': 'Tea',
      'Bier': 'Beer',
      'Wijn': 'Wine'
    },
    
    // Cart
    cartTitle: 'Order List',
    cartSubtitle: '(cannot be ordered online)',
    total: 'Total:',
    
    // Item details
    price: 'Price:',
    itemNumber: 'Item Number:',
    vegetarian: 'Vegetarian',
    description: 'Description:',
    
    // Contact Page
    contactTitle: 'Contact & Location',
    contactSubtitle: 'Visit us for the best snacks!',
    ourStory: 'Our Story',
    storyText1: 'Welcome to Snackresto, your local snack bar where quality and taste are central. For over 15 years we have been serving the tastiest chips, snacks and sandwiches in the neighborhood.',
    storyText2: 'Our fresh ingredients and traditional preparation methods ensure that every bite is a taste experience. From classic special chips to our homemade croquette - you will always find something delicious with us!',
    contactInfo: 'Contact Information',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    openingHours: 'Opening Hours',
    location: 'Location',
    mapDescription: 'Click on the map for directions',
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    
    // Loading and errors
    loading: 'Loading menu...',
    error: 'Error loading menu',
    tryAgain: 'Try again',
    noCategories: 'No categories found',
    noItems: 'No items found in this category',
    refreshPage: 'Refresh page'
  }
}

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.')
  let value: any = translations[language]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

// Helper function to translate menu item names
export const translateMenuItem = (language: Language, itemName: string): string => {
  const translation = getTranslation(language, `menuItems.${itemName}`)
  return translation !== `menuItems.${itemName}` ? translation : itemName
}

export const languages = [
  { code: 'nl' as Language, name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' }
]