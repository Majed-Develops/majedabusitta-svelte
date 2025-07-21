# Majed Abu Sitta Portfolio - Svelte 5 Version

This is a Svelte 5 conversion of the Next.js portfolio website, maintaining the exact same styling and functionality.

## Features

- **Svelte 5** with the new runes system
- **SvelteKit** for full-stack functionality
- **TypeScript** for type safety
- **Tailwind CSS v4** with the same styling as the original
- **Theme switching** (Light/Dark/Cyberpunk themes)
- **Responsive design** that works on all devices
- **Blog system** with markdown support
- **Contact form** with Formspree integration
- **Projects showcase** with featured and other projects
- **Resume page** with PDF download

## Project Structure

```
src/
├── app.html              # Main HTML template
├── app.css              # Global styles (same as original)
├── routes/              # SvelteKit file-based routing
│   ├── +layout.svelte   # Root layout
│   ├── +page.svelte     # Home page
│   ├── about/           # About page
│   ├── blog/            # Blog pages
│   ├── contact/         # Contact page
│   ├── projects/        # Projects page
│   └── resume/          # Resume page
├── lib/
│   ├── components/      # Reusable Svelte components
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   ├── ThemeToggle.svelte
│   │   └── Icons.svelte
│   ├── stores/          # Svelte stores
│   │   └── theme.ts     # Theme management
│   ├── content.ts       # Content loading functions
│   └── types.ts         # TypeScript type definitions
├── content/             # Content files (copied from original)
└── static/              # Static assets (images, videos, etc.)
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Key Differences from Next.js Version

1. **Framework**: Uses SvelteKit instead of Next.js
2. **Reactivity**: Uses Svelte 5 runes (`$state`, `$props`) instead of React hooks
3. **Data Loading**: Uses SvelteKit's `+page.ts` files instead of React Server Components
4. **Routing**: File-based routing with SvelteKit instead of Next.js App Router
5. **State Management**: Uses Svelte stores instead of React Context
6. **Animations**: Uses CSS transitions instead of Framer Motion (can be added if needed)

## Content Management

The content is managed through JSON and Markdown files in the `content/` directory:

- `about.md` - About page content
- `projects.json` - Projects data
- `contact.json` - Contact information
- `resume.json` - Resume data
- `posts/` - Blog posts in Markdown format

## Styling

The styling is maintained exactly as in the original using:

- Tailwind CSS v4
- Same CSS custom properties
- Same theme system (Light/Dark/Cyberpunk)
- Same responsive design patterns

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `build/` directory and can be deployed to any static hosting service or Node.js server that supports SvelteKit.

## License

MIT License - feel free to use this as a template for your own portfolio!
