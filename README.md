# Awakener

> Engineering intelligence at bare-metal speed.

A high-performance, minimalist, artistic developer portfolio + technical blog built with Astro.

## Philosophy

This is not a personal website. This is an engineering identity.

- **Zero unnecessary JavaScript** - The page works without JS
- **100/100 Lighthouse score** - Performance is a feature
- **Neural Monochrome aesthetic** - Pure black, white, and brutalist design
- **Bare-metal precision** - No bloat, no waste

## Tech Stack

- **Runtime:** Bun
- **Framework:** Astro (static-first, islands only when required)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS (utility-first, minimal abstractions)
- **Content:** MDX + Astro Content Collections

## Features

- **Neural Background** - SVG-based generative neural network with 3-layer parallax
- **Morphing Cursor** - Desktop-only custom cursor with `mix-blend-mode: difference`
- **GitHub Integration** - Build-time fetch of pinned repositories
- **Blog System** - MDX-driven technical writing with reading time calculation
- **Responsive Design** - Mobile-optimized with touch-friendly interactions
- **SEO Optimized** - Sitemap, OpenGraph, semantic HTML5
- **Accessibility** - Keyboard navigation, proper contrast ratios

## Project Structure

```
src/
├── components/
│   ├── NeuralBackground.astro    # SVG neural net + parallax
│   ├── MorphCursor.astro         # Desktop-only custom cursor
│   ├── ScrollSection.astro       # Parallax section wrapper
│   ├── ProjectCard.astro         # Brutalist project cards
│   └── Header.astro              # Auto-hiding navigation
├── layouts/
│   ├── BaseLayout.astro          # Root layout with SEO
│   └── BlogLayout.astro          # Blog post layout
├── pages/
│   ├── index.astro               # Homepage (Hero → Projects → Blog)
│   ├── blog/
│   │   ├── index.astro           # Blog listing
│   │   └── [slug].astro          # Individual posts
├── lib/
│   ├── neural.ts                 # PRNG + SVG node generator
│   ├── github.ts                 # GitHub API integration
│   └── scroll.ts                 # Scroll utilities
├── content/
│   └── blog/                     # MDX blog posts
└── styles/
    └── global.css                # Tailwind + custom properties
```

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## Environment Variables

To fetch pinned repositories from GitHub, create a `.env` file:

```env
GITHUB_TOKEN=your_github_personal_access_token
```

The token needs `public_repo` or `repo` scope depending on your repository visibility.

## Visual Identity

### Colors
- Background: `#000000` (pure black)
- Primary: `#FFFFFF` (pure white)
- Secondary: `#A1A1AA` (neutral gray)

### Typography
- **Playfair Display** (serif) - Branding and major headers
- **JetBrains Mono** (monospace) - Body text, code, terminal UI elements

### Scroll Experience
Layered depth parallax creates a 3D tunnel effect:
- Background layer (0.3x speed)
- Midground layer (0.5x speed)
- Foreground layer (1.0x speed)

## Performance

- First Contentful Paint: < 0.5s
- Total JavaScript: < 5KB (gzipped)
- Zero external JavaScript libraries
- 100/100 Lighthouse score

## License

MIT

---

Built with Astro & bare-metal precision by [theawakener0](https://github.com/theawakener0)
