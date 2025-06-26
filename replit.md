# Replit.md - Harshit's Intelligent Systems Lab Portfolio

## Overview

This is a futuristic, interactive portfolio website showcasing AI research, IoT innovations, and cutting-edge intelligent systems development. The application is built as a modern React single-page application with 3D graphics, interactive animations, and a comprehensive portfolio showcase.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool for fast development and optimized production builds
- **Single Page Application (SPA)** using Wouter for client-side routing
- **Component-based architecture** with reusable UI components from Shadcn/ui
- **3D Graphics Integration** using Three.js and React Three Fiber for immersive experiences

### Backend Architecture
- **Express.js** server with TypeScript support
- **RESTful API** structure (currently minimal, ready for expansion)
- **In-memory storage** implementation with interface for future database integration
- **Session management** ready with connect-pg-simple (currently unused)

### Styling and UI System
- **Tailwind CSS** for utility-first styling
- **CSS Custom Properties** for theme system (light/dark mode)
- **Glassmorphism effects** and modern design patterns
- **Responsive design** optimized for all device sizes

## Key Components

### 3D Interactive Elements
- **Hero Section**: Particle animations and rotating geometries using Three.js
- **Skills Visualization**: Interactive 3D tag cloud with React Three Fiber
- **Floating Navigation**: Animated navigation with scroll-based state management

### Portfolio Sections
- **Projects Showcase**: Graph layouts with detailed modals for technical projects
- **Experience Timeline**: Animated journey through research and startup roles
- **Publications Gallery**: Flip cards showcasing research papers and patents
- **Agent Bio**: Virtual AI agents that guide through different sections

### Interactive Features
- **Contact Form**: EmailJS integration with confetti success animation
- **Theme System**: Light/dark mode with localStorage persistence
- **Smooth Scrolling**: Section-based navigation with active state tracking

## Data Flow

### Client-Side State Management
- **React Query** for server state management (minimal usage currently)
- **Context API** for theme management
- **Local State** for component interactions and animations
- **localStorage** for theme persistence

### Contact Form Flow
1. User fills out contact form with validation
2. Form data is processed through EmailJS service
3. Success triggers confetti animation and toast notification
4. Error handling with user-friendly error messages

### Navigation Flow
1. Floating navigation tracks scroll position
2. Active section highlighting based on viewport intersection
3. Smooth scrolling to sections on navigation click
4. Mobile-responsive navigation behavior

## External Dependencies

### 3D Graphics and Animation
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers and components for R3F
- **three**: Core 3D graphics library
- **framer-motion**: Animation library (implied usage)

### UI and Styling
- **@radix-ui/***: Comprehensive component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for component variants
- **clsx**: Conditional class name utility

### Communication Services
- **@emailjs/browser**: Email service integration for contact form
- **@tanstack/react-query**: Server state management

### Development Tools
- **typescript**: Type safety and development experience
- **vite**: Build tool and development server
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Replit Configuration
- **Node.js 20** runtime environment
- **PostgreSQL 16** database provisioned (ready for future use)
- **Port 5000** for development server
- **Autoscale deployment** target for production

### Build Process
1. **Development**: `npm run dev` - Vite dev server with HMR
2. **Production Build**: `npm run build` - Vites builds client, esbuild bundles server
3. **Production Start**: `npm run start` - Serves built application

### Database Integration
- **Drizzle ORM** configured with PostgreSQL support
- **Schema definition** in `shared/schema.ts` (basic user model)
- **Migration system** ready with `drizzle-kit`
- **Environment variable** configuration for database URL

## Recent Changes

- June 25, 2025: Enhanced portfolio with authentic Harshit Manik profile data
- Updated hero section with accurate personal introduction and career focus
- Integrated real experience from Hexaware, Thapar University CEEMS, IIT Roorkee, and AeroInspect-Solar
- Added authentic project portfolio including SAS-to-Python converter, AR industrial dashboard, glucose monitoring AI, and acoustic threat detection
- Updated skills section with Harshit's actual technical expertise in Agentic AI, IoT, AR/VR
- Enhanced contact information with real email (hmanik_be23@thapar.edu), LinkedIn (/in/hmanik23), and phone (+91 8958434000)
- Implemented futuristic robotic theme with Orbitron and Rajdhani fonts
- Added advanced CSS animations: neon pulse effects, metallic surfaces, circuit patterns
- Replaced 3D Three.js components with performant 2D alternatives for better compatibility
- Applied glassmorphism effects with circuit board patterns for authentic robotic feel
- June 26, 2025: Updated experience timeline with correct Hexaware internship dates (June-August 2025)
- Integrated authentic publications record: 1 published journal paper (10 citations), 3 papers under review, 2 conference papers at IEEE EAIC NIT Jalandhar, 1 IoT glucose monitoring patent filed
- Added profile photo to hero section with professional circular frame and neon effects
- Replaced robotic animation section with authentic project images
- Added user's actual AR/VR industrial dashboard screenshot and breast tumor classification results
- Updated skills section with official technology logos (Python, TensorFlow, Unity, etc.)
- Enhanced project portfolio with real screenshots and appropriate placeholder images

## User Preferences

Preferred communication style: Simple, everyday language.