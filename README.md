# Solarpunk Marketing Site

This repository hosts a static marketing site themed around solarpunk. The site is built with [Astro](https://astro.build). The Astro project lives in the `site-src` directory so you can keep the source separate from the built pages served by GitHub Pages.

## Development

From within `site-src`:

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```

## Building

Inside `site-src` run:
```bash
npm run build
```
The production build will be generated in the `dist` folder.

## Style

The site uses Helvetica, Arial, sans-serif fonts and defines a turquoise accent color in `styles/global.css`. Components mimic [shadcn](https://ui.shadcn.com/) styles for buttons and cards.
