# Moment 3 - Angular Webbplats

## Keramik-portfolio

En responsiv webbplats byggd med Angular 17 för att visa keramikverk och portfolio. Webbplatsen kombinerar funktionalitet med estetik och följer moderna webbutvecklingsprinciper.

## Projektbeskrivning

Detta projekt är en portfolio-webbplats för keramikverk som demonstrerar Angular-utveckling med fokus på:

- **Responsiv design** som fungerar på alla enheter
- **Modulär arkitektur** med standalone-komponenter
- **Modern styling** med jordnära färger och minimalistisk stil
- **Användarvänlig navigation** med Angular Router
- **Interaktiva funktioner** som konverteringsverktyg

## Netlify

**Webbplats:** [Netlify Deployment](https://your-netlify-url.netlify.app)

## Tekniska verktyg

### Frontend

- **Angular 17** - som ramverk
- **TypeScript** - för funktion
- **HTML & CSS** - Semantisk markup och modern styling
- **Angular Router** - Navigation mellan sidor

### Styling & Design

- **CSS Grid & Flexbox** - Moderna layout-tekniker
- **Google Fonts** - Playfair Display & Montserrat
- **Responsiv design** - Mobile-first approach

### Utvecklingsverktyg

- **Angular CLI** - Komponentgenerering och projektstruktur
- **Vite** - Snabb utvecklingsserver
- **Git & GitHub** - Versionshantering
- **Netlify** - Automatisk deployment

## Design & UX

### Färgschema

- **Primär färg:** `#7c5c3e` (Brun)
- **Sekundär färg:** `#bfa980` (Ljusbrun)
- **Bakgrund:** `#f8f6f2` (Varm vit)
- **Text:** `#333` (Mörkgrå)

### Typografi

- **Rubrik:** Playfair Display (serif)
- **Brödtext:** Montserrat (sans-serif)
- **Responsiv textstorlek** för alla enheter

### Komponenter

- **Navbar:** Responsiv hamburgermeny
- **Footer:** Kontaktinfo och sociala länkar
- **Portfolio:** Grid-layout med bilder
- **Kontaktformulär:** Validering och loading-states
- **Konverterare:** Realtidskonvertering

## Installation & Utveckling

### Förutsättningar

- Node.js (v20.19 eller senare)
- npm
- Git

### Installation

1. **Klona repository**

   ```bash
   git clone https://github.com/ditt-användarnamn/moment3.git
   cd moment3
   ```

2. **Installera dependencies**

   ```bash
   npm install
   ```

3. **Starta utvecklingsserver**

   ```bash
   npm start
   ```

4. **Öppna i webbläsare**
   ```
   http://localhost:4200
   ```

### Bygga för produktion

```bash
npm run build
```

## Sidor & Funktioner

### Startsida

- Intro-text och hero-sektion
- Feature-kort med keramikverkens "egenskaper"
- Call-to-action knappar för navigation

### Portfolio

- Responsivt grid med 8 keramikverk
- Bildgalleri med produktnamn och produktbeskrivningar

### Kontakt

- Validerat kontaktformulär
- Loading-states och felhantering
- Responsiv design för alla enheter

### Konverterare

- Meter ↔ Fot konvertering
- Celsius ↔ Fahrenheit konvertering
- Realtidsuppdatering med ngModel

### Om Projektet

- Detaljerad projektbeskrivning
- Teknisk implementation
- Utmaningar och lärdomar
- Framtida förbättringar

## Utvecklingsprocess

### Komponentstruktur

Alla komponenter är standalone-komponenter med:

- **TypeScript-logik** (.ts)
- **HTML-innehåll** (.html)
- **CSS-styling** (.css)

### Routing

```typescript
export const routes: Routes = [
  { path: "home", component: Home },
  { path: "about", component: About },
  { path: "portfolio", component: Portfolio },
  { path: "contact", component: Contact },
  { path: "converter", component: Converter },
  { path: "", redirectTo: "home", pathMatch: "full" },
];
```

### Styling-approach

- **Globala stilar** i `styles.css`
- **Komponent-specifika stilar** i respektive `.css`-filer
- **CSS-variabler** för konsistent färgpalett
- **Media queries** för responsiv design

## Testning

### Utvecklingstestning

```bash
npm test
```

## Deployment

### Netlify (Automatisk)

- Kopplat till GitHub repository
- Automatisk build vid push
- Live deployment på:

### Manuell deployment

1. Bygg projektet: `npm run build`
2. Ladda upp `dist/`-mappen till din webbserver

## Prestanda & Optimering

### Bilder

- Bilder lagrade i `public/`-mappen
- Lazy loading för bättre prestanda

## Problem & Lösningar

### Node.js-version

- **Problem:** Angular CLI kräver Node.js v20.19+
- **Lösning:** Uppdatera Node.js eller använd nvm

### FormsModule

- **Problem:** ngModel fungerar inte utan FormsModule
- **Lösning:** Importera FormsModule i komponenten

### Asset-hantering

- **Problem:** Bilder i src/assets kräver angular.json-konfiguration
- **Lösning:** Använd public/-mappen för statiska filer

## Kontakt

**Utvecklare:** Ellen Lidén  
**Email:** elli1807@student.miun.se  
**GitHub:** https://github.com/ellenliden/dt208g_moment3.git
