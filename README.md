# Solvia Homepage

This project is a simple landing page built with **React 19**, **TypeScript**, **Vite 7**, and **Tailwind CSS 4**. It showcases the "Solvia" customer support system and is written primarily in Korean.

## Tech Stack

- **React 19** with the modern JSX runtime
- **TypeScript 5** for static type checking
- **Vite** for fast development and production builds
- **Tailwind CSS 4** for styling
- **ESLint** with TypeScript support for linting

## Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

Preview the built files locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```
src/
  assets/      # images and icons
  components/  # Navbar, Header, Layout1-4, CTA, Footer
  pages/       # HomePage.tsx (composes all components)
  main.tsx     # React entry point
```

The main layout is defined in `src/pages/HomePage.tsx` and renders components in the following order:

1. Navbar
2. Header
3. Layout1
4. Layout2
5. Layout3
6. Layout4
7. CTA
8. Footer

## Styling

Tailwind CSS variables define the color scheme. The design is responsive and uses the "Nunito Sans" font.

## License

This project is provided as-is for demonstration purposes.
