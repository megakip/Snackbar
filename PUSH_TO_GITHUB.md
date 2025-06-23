# Hoe je wijzigingen naar GitHub pusht

## Stap 1: Download je project
1. Klik op de download knop in de file explorer (rechtsboven)
2. Download het hele project als ZIP bestand
3. Pak het uit op je computer

## Stap 2: Vervang je lokale bestanden
1. Ga naar je lokale GitHub repository folder
2. Vervang alle bestanden met de nieuwe bestanden uit de ZIP
3. Let op: behoud je `.git` folder!

## Stap 3: Push naar GitHub
Open terminal/command prompt in je project folder en voer uit:

```bash
# Controleer status
git status

# Voeg alle wijzigingen toe
git add .

# Commit met beschrijving
git commit -m "Add order mode functionality and UI improvements

- Added order mode toggle in hamburger menu
- Order mode controls when quantity buttons are visible
- Cart only shows when order mode is active
- Added translations for order mode
- Fixed cart background styling
- Improved user experience for menu browsing vs ordering"

# Push naar GitHub
git push origin main
```

## Wat er is gewijzigd:
- ✅ Order mode functionaliteit toegevoegd
- ✅ Hamburger menu uitgebreid met order mode toggle
- ✅ Quantity controls alleen zichtbaar in order mode
- ✅ Cart alleen zichtbaar wanneer order mode actief is
- ✅ Vertalingen toegevoegd voor order mode
- ✅ Cart achtergrond styling verbeterd
- ✅ Betere gebruikerservaring voor menu bekijken vs bestellen

## Alternatief: GitHub Desktop
Als je GitHub Desktop gebruikt:
1. Open GitHub Desktop
2. Selecteer je repository
3. Vervang de bestanden in je lokale folder
4. GitHub Desktop detecteert automatisch de wijzigingen
5. Schrijf een commit message
6. Commit en push