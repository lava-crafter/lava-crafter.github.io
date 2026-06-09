---
title: lava_note Architecture
sidebar_label: Architecture
---

# Architecture

Lava Note currently uses one Android `:app` module.

## Architecture goal

```text
Compose UI at the edge
core note logic in testable Kotlin APIs
heavy rendering/storage isolated from pointer input
```

## Current package areas

- `canvas/*`
- `data/*`
- `math/*`
- `shape/*`
- `ui/toolbar/*`
- `ui/system/*`

## Current split status

- most controller and layer code is already split out
- `CanvasScreen` is still the top-level coordinator
- input routing cleanup remains in progress
