# Invitation

A beautiful, interactive invitation website built with React, TypeScript, and Vite. Perfect for weddings, events, or special occasions.

## Features

- **Intro Section**: Welcoming introduction with engaging visuals
- **Countdown Timer**: Live countdown to the event date
- **Timeline**: Event schedule and itinerary
- **Venue Information**: Location details with maps and directions
- **Video Gallery**: Share memorable moments and highlights
- **Big Day Highlights**: Showcase the main event details

## Tech Stack

- React 19
- TypeScript
- Vite
- ESLint
- CSS Modules

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd invitation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building

Build for production:
```bash
npm run build
```

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and deploy the `dist` folder to GitHub Pages.

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Intro/          # Introduction section
│   ├── Countdown/      # Event countdown timer
│   ├── Timeline/       # Event schedule
│   ├── Venue/          # Location and venue details
│   ├── Video/          # Video gallery
│   └── Bigday/         # Main event highlights
├── assets/             # Static assets
├── App.tsx            # Main app component
└── index.tsx          # App entry point
```

## Customization

To customize the invitation:

1. Update event details in the respective components
2. Modify styles in the `.module.css` files
3. Replace assets in the `public/` and `src/assets/` folders
4. Adjust the countdown date in the Countdown component

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and not licensed for public use.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
