---
title: "Neural Networks in SVG"
description: "Building a generative art system without Canvas or WebGL."
pubDate: 2025-01-20
tags: ["svg", "generative-art", "javascript"]
---

The hero animation on this site isn't Three.js. It isn't WebGL. It's SVG.

## Why SVG?

Canvas is powerful, but it's imperative. You write code to draw pixels. SVG is declarative—you describe shapes, and the browser renders them. For a static-first site like this, SVG is the perfect fit:

- **Declarative**: The neural network is just markup
- **Accessible**: Screen readers can describe it
- **Lightweight**: No 500KB library to download
- **Sharp**: Infinite resolution on all displays

## The Algorithm

The neural network is generated using a simple PRNG (Pseudo-Random Number Generator):

```javascript
class PRNG {
  constructor(seed) {
    this.seed = seed;
  }
  
  next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}
```

This gives us deterministic randomness—the same seed always produces the same network. Change the seed daily, and the network evolves.

## The Structure

Each node has:
- Position (x, y as percentages)
- Depth (z for parallax intensity)
- Connections (to nearby nodes)

Nodes connect to their 2-3 nearest neighbors within a distance threshold. This creates the geometric, AI-inspired structure.

## Parallax Depth

The network has three layers:
- Background (0.3x scroll speed)
- Midground (0.5x scroll speed)  
- Foreground (1.0x scroll speed)

As you scroll, each layer moves at a different rate, creating that 3D tunnel effect. The browser's scroll position drives CSS transforms—no scroll libraries, no jank.

## Mobile Optimization

On touch devices:
- Node count drops from 20 to 10
- Connections reduce from 3 to 2 per node
- The morphing cursor is disabled
- Mouse parallax becomes a subtle tilt effect

## The Result

~2KB of SVG markup. 0 external dependencies. 60fps on all devices.

Sometimes the simplest solution is the best one.
