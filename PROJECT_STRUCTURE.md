# Project Structure

This document provides an overview of the repository layout and file structure for the Verity OS project.

## Root Directory

- `package.json`: Node.js project configuration and dependencies
- `tsconfig.json`: TypeScript configuration
- `next.config.js`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `eslint.config.mjs`: ESLint configuration
- `.gitattributes`: Git attributes file
- `README.md`: Project readme file
- `PROJECT_STRUCTURE.md`: This file, describing the project structure

## Source Code

### App Directory (`/app`)

- `layout.tsx`: Root layout component
- `page.tsx`: Main page component
- `globals.css`: Global styles
- `/dapp-store/page.tsx`: DApp store page component

### Components Directory (`/components`)

- `AboutWindow.tsx`: About window component
- `AppDrawer.tsx`: App drawer component
- `BatteryMenu.tsx`: Battery menu component
- `BirdeyeMenu.tsx`: Birdeye menu component
- `ComingSoonOverlay.tsx`: Coming soon overlay component
- `CryptoChartMenu.tsx`: Crypto chart menu component
- `DAppCategories.tsx`: DApp categories component
- `DAppGrid.tsx`: DApp grid component
- `DAppPage.tsx`: DApp page component
- `DAppStore.tsx`: DApp store component
- `Desktop.tsx`: Desktop component
- `DesktopContextMenu.tsx`: Desktop context menu component
- `DesktopIcon.tsx`: Desktop icon component
- `Dock.tsx`: Dock component
- `ErrorBoundary.tsx`: Error boundary component
- `FarmingMenu.tsx`: Farming menu component
- `FeaturedDApp.tsx`: Featured DApp component
- `HomeContent.tsx`: Home content component
- `LandingPage.tsx`: Landing page component
- `LoadingAnimation.tsx`: Loading animation component
- `LoginOverlay.tsx`: Login overlay component
- `PortfolioMenu.tsx`: Portfolio menu component
- `ShootingStar.tsx`: Shooting star animation component
- `SoundMenu.tsx`: Sound menu component
- `SpaceBackground.tsx`: Space background component
- `ThemeContext.tsx`: Theme context provider
- `TopBar.tsx`: Top bar component
- `VerityOSMenu.tsx`: Verity OS menu component
- `Window.tsx`: Window component

#### UI Components (`/components/ui`)

Various reusable UI components (e.g., `button.tsx`, `input.tsx`, `card.tsx`, etc.)

### Lib Directory (`/lib`)

- `appData.ts`: Application data
- `appUrls.ts`: Application URLs
- `dappData.ts`: DApp data
- `mongodb.ts`: MongoDB connection utility
- `utils.ts`: Utility functions

### Pages Directory (`/pages`)

- `/api/auth/[...nextauth].ts`: NextAuth configuration

### Public Directory (`/public`)

Static assets (e.g., `logo.png`)

### Types Directory (`/types`)

- `dapp.ts`: DApp type definitions

## Configuration Files

- `.eslinterc.js`: ESLint configuration
- `components.json`: Component configuration
- `next-env.d.ts`: Next.js type definitions

This structure provides a clear organization for the Verity OS project, separating concerns and making it easy to navigate and maintain the codebase.