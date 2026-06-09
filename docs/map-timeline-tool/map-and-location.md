---
title: Map and Location
sidebar_label: Map and Location
---

# Map and Location

## Map stack

- osmdroid for map rendering
- OSM tiles as the default data source
- location and compass overlays for map interaction

## Location flow

The app can use last known, fresh, precise, or best-effort location depending on the current action.

## Important rule

Map tiles require network only when the app is allowed to download them; the app can also operate in downloaded-only mode.
