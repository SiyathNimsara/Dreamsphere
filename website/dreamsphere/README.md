# DreamSphere — Explore The Universe Inside Your Mind

DreamSphere is an interdisciplinary, production-grade React application that explores human dreams through neuroscience, analytical psychology, global anthropology, sleep science, and emerging AI technologies.

## Technology Stack
- **Core**: React 18+ (Functional components, custom hooks, context)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6)
- **Animations**: Framer Motion
- **3D Graphics**: Three.js Canvas Engine
- **Icons**: Lucide React

## Project Architecture
```text
website/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/         # Reusable UI components (Navbar, Footer, Card, Button, Modal)
│   │   ├── canvas/         # Three.js 3D Solar System & Starfield canvas
│   │   ├── home/           # Hero, Stats, Featured Topics
│   │   ├── science/        # Sleep Cycle live EEG visualizer & Brain Heatmap
│   │   ├── psychology/     # Theory timeline & Jungian archetype matrix
│   │   ├── culture/        # Global anthropological SVG world map
│   │   ├── experiences/    # Lucid reality check trainer & estimator
│   │   └── ai/             # AI Subconscious Neural Interpreter
│   ├── pages/              # Route pages (Home, Science, Psychology, Culture, Experiences, AI, References)
│   ├── hooks/              # Custom hooks (useScrollPosition, useAudioSynth)
│   ├── services/           # Business logic & AI simulation services
│   ├── data/               # Structured research datasets
│   ├── utils/              # Helper utilities and formatters
│   ├── styles/             # Global CSS & Tailwind directives
│   ├── App.jsx             # Main layout & router shell
│   └── main.jsx            # Application entry point
├── package.json
├── vite.config.js
└── index.html
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory, ready to be served by Nginx or deployed to AWS/Docker.
