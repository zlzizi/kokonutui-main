# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KokonutUI is an open-source collection of UI components built with Next.js, React, TailwindCSS, and Motion. It provides a comprehensive component registry system that allows users to install individual components, hooks, libraries, and blocks.

## Development Commands

- `npm run dev` - Start development server with Turbo
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linting
- `bun run ./scripts/build-registry.ts` - Build component registry (generates JSON files in public/r/)

## Code Style Guidelines

Following the .cursorrules configuration:

- Write concise, technical TypeScript code with accurate examples
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content, types
- Use lowercase with dashes for directories (e.g., components/auth-wizard)
- Favor named exports for components
- Use TypeScript interfaces over types
- Avoid enums; use maps instead
- Use the "function" keyword for pure functions
- Use Shadcn UI, Radix, and Tailwind for components and styling
- Implement responsive design with Tailwind CSS using mobile-first approach
- For gradient, use TailwindCSS v4 gradient format.

### File Organization

```
components/
├── kokonutui/          # Main component library
├── ui/                 # Base UI components (Shadcn-style)
├── landing/           # Landing page specific components
├── mdx/               # MDX documentation components
└── layout/            # Layout components

content/docs/          # MDX documentation files
registry/             # Component registry definitions
hooks/                # Custom React hooks
lib/                  # Utility libraries
```

### Documentation System

Uses Fumadocs for documentation:

- MDX files in `content/docs/`
- Configuration in `source.config.ts`
- Documentation loader in `lib/source.ts`
- Supports icons from Lucide React

### Key Dependencies

- **UI Framework**: Next.js 19+ with React 19+
- **Styling**: TailwindCSS v4, Tailwind Aria
- **Animation**: Motion (Framer Motion)
- **UI Components**: Radix UI primitives, Shadcn/ui pattern
- **Documentation**: Fumadocs
- **Code Quality**: Biome (linting/formatting), TypeScript

## Development Patterns

### Component Creation

Components should follow the established patterns in `components/kokonutui/`:

- Export as named export
- Include TypeScript interfaces
- Use Tailwind classes for styling
- Include Motion animations where appropriate
- Follow the registry schema for metadata
