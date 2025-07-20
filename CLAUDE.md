# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (runs TypeScript compiler first, then Vite build)
- `npm run lint` - Run ESLint on all TypeScript/TSX files
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + TypeScript + Vite project using Tailwind CSS v4 for styling. The application appears to be a Korean language homepage/landing page.

### Key Structure
- **Entry Point**: `src/main.tsx` → `src/App.tsx` → `src/pages/HomePage.tsx`
- **Components**: Located in `src/components/` - all are layout/UI components (Navbar, Header, Layout1-4, CTA, Footer)
- **Assets**: Images and icons stored in `src/assets/`
- **Styling**: Uses Tailwind CSS v4 with custom CSS variables for color schemes

### Component Architecture
The HomePage follows a linear layout pattern:
```
Navbar
├── Header
├── Layout1
├── Layout2  
├── Layout3
├── Layout4
├── CTA
└── Footer
```

Each Layout component appears to represent different content sections of the homepage.

### Styling Approach
- Tailwind CSS v4 with Vite plugin integration
- Custom CSS variables (e.g., `--Color-Scheme-1-Background`, `--Color-Scheme-1-Text`)
- Korean font family: `Nunito Sans`
- Responsive design with specific pixel-based layouts

### TypeScript Configuration
- Uses project references with separate configs for app and node
- Strict TypeScript setup with ESLint integration
- Modern React 19 with latest TypeScript support