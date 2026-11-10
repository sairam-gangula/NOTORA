# Notora Asset Pack

A starter handoff package for the Notora MVP visual direction.

## Brand
- Name: Notora
- Tagline: Capture. Organise. Create.
- Logo concept: feather/quill + sparkle
- Palette: Sand & Terracotta
- Headings: Manrope
- Body: SF Pro Text on Apple platforms; Inter/Arial fallback elsewhere

## Included
- `brand/logo/`: light mark, dark mark, wordmark lockup
- `brand/app-icon/`: terracotta and sand SVG app-icon masters
- `icons/`: 24px outline SVG icons grouped by use
- `design-tokens/`: colour, typography, spacing, radius and motion tokens
- `documentation/`: asset inventory, screen inventory and implementation notes

## Important font note
Font files are not bundled. SF Pro is an Apple font and should be obtained/used under Apple's applicable terms. Manrope and Inter should be downloaded from their official sources and included in a shipped app only in accordance with their licences.

## SVG usage
Icons use `currentColor` for stroke, so set the CSS `color` property or replace `currentColor` with a fixed colour for static exports. Standard icon size is 24 x 24, 1.8px stroke.

## App icon production
The SVG app-icon masters are source artwork. Export platform-specific raster sizes and follow current Apple App Store and Google Play icon requirements before release. Do not ship the SVG directly as the store icon unless the platform workflow explicitly supports it.

## Notes
This is a design asset starter pack, not a complete production app or a set of implemented screens. The visual reference board should be used alongside this pack for layout direction.
