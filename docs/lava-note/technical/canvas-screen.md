---
title: CanvasScreen Split
sidebar_label: CanvasScreen
---

# CanvasScreen Split

`CanvasScreen` coordinates the current canvas runtime.

## It currently coordinates

- note loading and persistence hooks
- stroke sessions and input state
- viewport state and fast scroll state
- selection, brush, tool, and history controllers
- PDF import/export state
- math mode and math overlays

## Remaining work

- finish input-routing decomposition
- reduce remaining screen-owned state
- keep the final coordinator readable
