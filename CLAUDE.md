# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application for a mosque website (Khanjahan Ali Jame Masjid) built with:
- **Next.js 15.5.4** with App Router and Turbopack
- **React 19.1.0** with React Native Web integration
- **GluestackUI v3** - A universal component library providing cross-platform components
- **NativeWind v4** - TailwindCSS for React Native and web
- **Lenis** - Smooth scrolling library

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Dual-Platform Component System

This project uses GluestackUI which supports both web and React Native through platform-specific files:
- `components/ui/[component]/index.tsx` - React Native version
- `components/ui/[component]/index.web.tsx` - Web-specific version
- `components/ui/[component]/styles.tsx` - Shared styling configuration

When importing UI components, the bundler automatically picks the correct platform file.

### Directory Structure

- **app/** - Next.js App Router pages and layouts
  - **app/components/** - Page-specific components (Navbar, PrayerTimes, AboutMosque, ServiceProgram)
  - **app/(pages)/** - Route groups for additional pages (contact-us, about-us)
- **components/** - Reusable components
  - **components/ui/** - GluestackUI component library
  - **components/customCursor/** - Custom cursor animation
  - **components/liveclock/** - Live date/time display
- **public/** - Static assets (mosque images, logo)

### Key Configuration Details

**Next.js Config (`next.config.mjs`):**
- Uses `withGluestackUI()` wrapper for proper component resolution
- TypeScript and ESLint errors ignored during builds
- No package transpilation configured

**Tailwind Config (`tailwind.config.js`):**
- Uses NativeWind preset for React Native Web compatibility
- Extensive color system with semantic tokens (primary, secondary, tertiary, error, success, warning, info, typography, outline, background, indicator)
- Each color has shades from 0-950
- Custom font families: Jakarta, Roboto, Code (Source Code Pro), Inter, Space Mono
- Custom shadows (hard-1 through hard-5, soft-1 through soft-4)
- Dark mode configured via environment variable or 'class' strategy

**Root Layout (`app/layout.js`):**
- Client component with ReactLenis for smooth scrolling (duration: 0.8s)
- GluestackUIProvider wraps all content for theme/UI context
- StyledJsxRegistry for styled-jsx support
- Global Navbar with responsive padding
- CustomCursor rendered outside main content

### Styling Approach

The project combines multiple styling systems:
1. **TailwindCSS** - Utility classes for layout and spacing
2. **GluestackUI Styles** - Component-level styling with platform awareness
3. **CSS Variables** - Semantic color tokens injected by GluestackUIProvider
4. **styled-jsx** - Scoped CSS when needed

Always use GluestackUI components (Box, Center, Grid, Text, VStack, HStack, etc.) for layout to maintain cross-platform compatibility.

### Custom Features

**Custom Cursor (`components/customCursor/CustomCursor.jsx`):**
- Only visible on large screens (lg breakpoint)
- Uses `requestAnimationFrame` for smooth 60fps animation
- Linear interpolation (lerp) with factor 0.1 for trailing effect
- Green (#006830) circular cursor with 50% opacity

**Smooth Scrolling:**
- Lenis integration at root level with custom easing function: `t * (2 - t)`
- ReactLenis wraps entire HTML structure for global smooth scroll behavior

## Import Aliases

The project uses `@/` alias for absolute imports:
- `@/components/ui/*` - UI component library
- `@/components/*` - Other components
- `@/app/*` - App directory files

## Platform Considerations

When modifying or creating components:
- UI library components support both web and native - check for `.web.tsx` variants
- Animations should use `react-native-reanimated` or `@legendapp/motion` for cross-platform support
- Images should use Next.js `Image` component for web optimization
- Layout components (Box, Center, Grid, VStack, HStack) work across platforms
