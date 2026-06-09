---
title: Architecture
sidebar_label: Architecture
---

# Architecture

## Main structure

- `MapTimelineApp` provides the app graph
- `AppViewModel` handles screen state and operations
- `PointWriteUseCase` handles point writes
- `TagManagementUseCase` handles tag operations
- `SettingsManagementUseCase` handles settings
- `PointRepository` abstracts Room data access

## Current design goal

```text
UI state in ViewModels
business rules in use cases
data access behind repository gateways
```
