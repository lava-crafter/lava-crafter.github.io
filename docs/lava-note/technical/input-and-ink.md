---
title: Input and Ink Flow
sidebar_label: Input and Ink
---

# Input and Ink Flow

## Runtime flow

```text
raw pointer event
 -> normalized sample
 -> tool / prediction routing
 -> in-progress stroke view
 -> committed stroke
 -> history
 -> storage
```

## Rules

- prediction is transient only
- predicted samples must not enter storage or history
- committed strokes must come from real input samples only
