# KirikaeLabs Site

Official website for Kirikae Labs, an independent software engineering collective focused on building developer tools, autonomous systems, and experimental software.

**Live Site:** https://kirikaelabs.vercel.app

## Overview

This project serves as the corporate website and primary digital presence for Kirikae Labs. It is built with a modern web stack using React, TypeScript, and Vite, providing a fast, type-safe development experience with optimized production builds.

## Technology Stack

- **Framework:** React 19.1.0
- **Language:** TypeScript 5.8.3
- **Build Tool:** Vite 6.3.5
- **Routing:** React Router DOM 7.6.2
- **Styling:** CSS Modules
- **Linting:** ESLint 9.25.0 with TypeScript support
- **Deployment:** Vercel

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── sections/       # Page sections (Home, About, Services, Contact)
├── contexts/           # React Context providers
│   └── theme/         # Theme context for dark/light mode
├── pages/             # Page-level components (404 handling)
├── styles/            # Global stylesheets
├── utils/             # Utility functions (SEO, ScrollToTop)
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Features

- Responsive design with CSS modules
- Theme context provider for light/dark mode support
- SEO utilities for improved search engine optimization
- Scroll-to-top functionality on route changes
- Structured routing with React Router
- 404 error page handling
- Configured for optimal Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

```bash
npm install
```

### Development

Start the local development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

Generate an optimized production build:

```bash
npm run build
```

This command compiles TypeScript and bundles assets with Vite for production deployment.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

Run ESLint to validate code quality and TypeScript types:

```bash
npm run lint
```

## ESLint Configuration

The project uses TypeScript ESLint with recommended rules. For production applications, consider enabling type-aware lint rules:

```javascript
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // or for stricter rules:
    // ...tseslint.configs.strictTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

Additional React-specific linting plugins can be installed for enhanced validation:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

## TypeScript Configuration

The project uses separate TypeScript configurations for application and tooling:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js and build tool settings

## Deployment

This project is deployed on Vercel. Configuration is managed in `vercel.json`.

To deploy your own instance:

1. Push changes to your repository
2. Connect the repository to Vercel
3. Vercel will automatically build and deploy on push to the main branch

## Development Workflow

1. Create a feature branch from `main`
2. Make your changes and commit with clear messages
3. Run `npm run lint` to validate code quality
4. Submit a pull request for review
5. After approval, merge to `main` for automatic deployment

## Performance Optimization

- **Vite:** Provides fast HMR during development and optimized bundle splitting for production
- **React 19:** Latest React version with improved performance features
- **CSS Modules:** Scoped styling to prevent conflicts and reduce CSS bundle size
- **Tree Shaking:** Unused code is eliminated during production builds

## License

Refer to the repository's LICENSE file for licensing information.

## Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.
