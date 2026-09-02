---
title: "Rewrite MicroGPT in Rust"
description: "Refection on my rewrite of Andrej Karpathy's MicroGPT in Rust"
pubDate: 2026-08-02
tags: ["engineering", "learning", "rust", "gpt"]
---

Last week, I built a gpt-like model from scratch on my hubble laptop using only rust and no fancy frameworks, just pure math.

Last week, I visited a project I wanted to study a while ago, but I noticed something, it was in python (It was written in python to be easy to understand) so I told myself what would happen if I changed the language under the architecture. And that's why I rewrote Andrej Karpathy's microgpt in rust.

What I did was that I took the microgpt source code and turned it into parts. Each part was rewritten carefully to ensure a difference in the architecture.

I began by building the autograd then I built a custom Matrix structure by wrapping the autograd value structure. After that I built the essential functions like the linear, softmax, and rmsnorm. And I finished it by building the gpt-like architecture and setting up the parameters.

Then I built the training loop and the inference, and I tested it. It worked very well and fast. It’s nearly 5-10x faster than the original microgpt written in python, and that was only using normal rust, there wasn’t any efficient data type or simd. It was just rust. And that shows how picking the language and stack under the architecture could make a huge difference.

Also, I added a beautiful tui to make the training process more fun.

You can see it now on my [github](https://github.com/theawakener0/rs-gpt) or try it from [here](https://crates.io/crates/rs-gpt)

Last thing, thanks to Hack Club for supporting this project in the [stardance](https://stardance.hackclub.com/) challenge.

