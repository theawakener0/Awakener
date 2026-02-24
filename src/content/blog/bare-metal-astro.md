---
title: "Bare-Metal Astro: Building for Speed"
description: "Why I chose Astro for maximum performance and minimal JavaScript."
pubDate: 2025-01-15
tags: ["astro", "performance", "architecture"]
---

The modern web is bloated. Frameworks ship megabytes of JavaScript to render what could be static HTML. This isn't engineering—it's waste.

## The Problem

Most websites don't need React. They don't need Vue. They need content, delivered fast.

When I set out to build this portfolio, I had three non-negotiable requirements:

1. **Zero unnecessary JavaScript** - The page should work without JS
2. **100/100 Lighthouse score** - Performance isn't optional
3. **Developer experience** - I refuse to fight my tools

## Enter Astro

Astro's philosophy aligns perfectly: ship less JavaScript, use the platform. Islands architecture means interactivity only where needed.

The results speak for themselves:

- First Contentful Paint: < 0.5s
- Total JS: < 5KB (gzipped)
- Lighthouse: 100/100 across the board

## The Architecture

This site uses:

- **Astro** for static generation
- **Tailwind CSS** for utility-first styling
- **Zero external JS libraries** - All animations are vanilla JS or CSS
- **SVG neural network** - Generated at build time, animated with RAF

## The Cursor

That morphing cursor? 40 lines of vanilla JS. No libraries. It follows with linear interpolation, expands on hover, degrades gracefully on mobile.

## Conclusion

Performance is a feature. By choosing the right tools and resisting the urge to over-engineer, we can build experiences that are both beautiful and blazing fast.

The web doesn't have to be slow. We just have to care enough to make it fast.
