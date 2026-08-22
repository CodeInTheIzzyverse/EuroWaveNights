# EuroWave Nights

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel\&logoColor=white)](https://eurowave-nights.vercel.app/)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

An underground electronic music portfolio and digital broadcast platform built around **EuroWave Nights**, a fictional clandestine midnight transmission from an unnamed futuristic city.

## Project Status

| Property        | Value                               |
| --------------- | ----------------------------------- |
| Version         | `v0.1`                              |
| Status          | 🚧 In Development                   |
| Project Type    | Music Portfolio / Creative Platform |
| Main Brand      | EuroWave Nights                     |
| Featured Artist | LatePassenger                       |
| Frontend        | React + TypeScript                  |
| Styling         | SCSS / CSS                          |
| Build Tool      | Vite                                |
| Deployment      | Vercel                              |
| Data            | JSON                                |
| License         | TBD                                 |

## Overview

**EuroWave Nights** is a fictional underground radio station, independent music platform, and creative universe that only appears after midnight.

The project takes place in an unnamed futuristic city where anonymous artists transmit their music through a clandestine radio broadcast. Each transmission represents a place, a memory, a night, a train ride, a rainy window, a neon sign, or an encounter with an unknown person.

The website combines a modern, accessible user interface with a retro-futuristic visual language inspired by:

* Cyberpunk
* Synthwave
* Eurobeat
* Eurodance
* Lo-Fi electronic music
* Japanese retro-futurism
* CRT interfaces
* VHS aesthetics
* Pixel art
* Underground radio stations
* Analog audio equipment
* Late-night city environments

The primary artist currently featured on the platform is **LatePassenger**, an intentionally anonymous electronic music identity.

The architecture is data-driven and designed to support additional anonymous artists in the future, allowing EuroWave Nights to evolve from a personal portfolio into a broader independent music platform.

## Tech Stack

### Production Dependencies

| Technology       |   Version | Purpose                      |
| ---------------- | --------: | ---------------------------- |
| React            | `^19.2.8` | UI library                   |
| React DOM        | `^19.2.8` | React browser rendering      |
| React Router DOM | `^7.18.2` | Client-side routing          |
| Vercel Analytics |  `^2.0.1` | Website analytics            |
| Resend           | `^6.20.0` | Transactional email handling |

### Development Dependencies

| Technology           |    Version | Purpose                           |
| -------------------- | ---------: | --------------------------------- |
| Vite                 |   `^8.2.0` | Development server and build tool |
| TypeScript           |   `~6.0.2` | Static typing                     |
| Sass                 | `^1.102.0` | SCSS preprocessing                |
| ESLint               |  `^10.8.0` | Code quality and linting          |
| TypeScript ESLint    |  `^8.65.0` | TypeScript-aware ESLint rules     |
| ESLint React Hooks   |   `^7.1.1` | React Hooks linting               |
| ESLint React Refresh |   `^0.5.3` | React Fast Refresh linting        |
| Vite React Plugin    |   `^6.0.4` | React integration for Vite        |
| Vercel Node          |  `^5.10.1` | Vercel serverless functionality   |
| Node Types           | `^24.13.3` | Node.js TypeScript definitions    |
| React Types          | `^19.2.17` | React TypeScript definitions      |
| React DOM Types      |  `^19.2.3` | React DOM TypeScript definitions  |
| ESLint JS            |  `^10.0.1` | ESLint JavaScript configuration   |
| Globals              |  `^17.7.0` | Global environment definitions    |

## Project Structure

The project follows a modular, feature-oriented structure that separates pages, reusable UI, data, constants, types, hooks, routing, and global styles.

```text
EuroWaveNights/
├── public/
│   └── ...
├── docs/
│   └── ...
├── api/
│   └── contact.ts
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   └── UI/
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── router/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Component Organization

Each page and reusable component follows a feature-like folder structure.

For example:

```text
components/
└── UI/
    └── Panels/
        ├── CRTPanel.tsx
        └── CRTPanel.scss
```

The same convention applies to pages:

```text
pages/
└── LatePassenger/
    ├── LatePassenger.tsx
    └── LatePassenger.scss
```

This keeps component-specific logic and styles close together while maintaining a clean global architecture.

## Prerequisites

Before running the project locally, make sure the following are installed:

* Node.js
* pnpm
* Git

Recommended:

* Node.js `20.19+`
* pnpm `10+`

Verify the installed versions:

```bash
node --version
pnpm --version
git --version
```

## Installation and Usage

Clone the repository:

```git
git clone https://github.com/CodeInTheIzzyverse/EuroWaveNights.git
```

Navigate into the project:

```bash
cd EuroWaveNights
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The application will be available through the local Vite development URL displayed in the terminal.

## Build

Create a production build:

```bash
pnpm build
```

The production-ready files will be generated in the `dist/` directory.

A successful build should complete without TypeScript or bundling errors.

## Local Preview

To preview the production build locally:

```bash
pnpm preview
```

This runs the generated production build using Vite's preview server.

## Linting

Run ESLint:

```bash
npm lint
```

Linting should be performed before submitting changes to help maintain consistent code quality and catch common React and TypeScript issues.

## Deployment

The project is designed to be deployed on **Vercel**.

### Vercel Deployment

The recommended deployment workflow is:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the project.
5. Verify the production build.
6. Test the contact functionality.
7. Verify all routes and responsive layouts.

Vercel automatically handles the Vite production build when the project is configured correctly.

### Serverless Contact Endpoint

The project includes:

```text
contact.ts
```

This file is intended to run as a Vercel Serverless Function and handle contact-related requests through **Resend**.

The email address used by the project should not be exposed directly in the public UI.

Sensitive configuration such as API keys must be stored as environment variables and must never be committed to Git.

Example environment configuration:

```env
RESEND_API_KEY=your_resend_api_key
```

Never commit real API keys, tokens, credentials, or other secrets to the repository.

## Screenshots

### Desktop

*Add desktop screenshots here once the current design is finalized.*

### Mobile

*Add mobile screenshots here once the responsive implementation is finalized.*

## Architecture and Patterns

### Component-Based Architecture

The application follows a component-based architecture built around reusable React components.

Pages are responsible for composing sections and coordinating page-level content, while reusable UI components handle individual visual and interactive elements.

Examples include:

* `ArtistCard`
* `MusicCard`
* `ProjectCard`
* `ServiceCard`
* `EquipmentCard`
* `CRTPanel`

This approach allows the visual system to remain consistent while making it easier to extend the platform with additional artists, music, projects, and services.

## Main Features

### Responsive Design

The interface follows a mobile-first approach and adapts across:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop displays

Layouts use modern CSS techniques including:

* CSS Grid
* Flexbox
* Fluid typography
* Responsive spacing
* SCSS variables
* Media queries
* `clamp()`

### Contact Form

The contact functionality is designed around a serverless architecture using:

* Vercel Serverless Functions
* Resend

The frontend communicates with the serverless endpoint without exposing private API credentials.

### Dynamic Routing

React Router provides client-side navigation for:

* `/`
* `/latepassenger`
* `/albums/:id`
* `/contact`
* `/links`
* `/under-construction`
* Custom `404`

Routes are centralized through:

```text
src/constants/routes.ts
```

and configured through:

```text
src/router/router.tsx
```

### Modern Styling with Sass

The project uses Sass/SCSS instead of a utility-first CSS framework.

Global design tokens are centralized in:

```text
src/styles/_vars.scss
```

Typography and utility styles are separated into dedicated SCSS files, while component-specific styles remain inside their corresponding component directories.

The styling system supports:

* Design tokens
* Responsive breakpoints
* Reusable mixins
* Typography scales
* Color variables
* Spacing
* Shadows
* Transitions
* Accessibility states

### Data-Driven Content

Artists, albums, tracks, platforms, projects, services, and equipment are represented as structured JSON data (`albums.json`, `music.json`, `platforms.json`, etc.).

This modular design decouples music releases (albums vs. singles/tracks), centralizes platform broadcast metadata, and allows new content to be added without rewriting UI components.

### Cyberpunk Retro-Futuristic Design

The visual system combines:

* Electric blue
* Indigo
* Violet
* Lilac
* Minimal neon pink
* Dark navy backgrounds
* CRT-inspired interfaces
* Pixel art
* Broadcast indicators
* Radio motifs
* Retro hardware references
* Subtle digital effects

The design intentionally avoids generic music imagery such as headphones and musical notes.

## Contribution

Contributions, suggestions, and improvements are welcome.

Before opening a pull request:

1. Create a new branch from the latest development state.
2. Keep changes focused and related to a specific purpose.
3. Follow the existing project architecture.
4. Use TypeScript for application logic.
5. Keep component-specific styles inside their corresponding SCSS files.
6. Avoid introducing unnecessary dependencies.
7. Run linting before submitting changes.
8. Run a production build to verify there are no build errors.
9. Test the affected routes on both desktop and mobile.
10. Do not commit secrets, API keys, environment files, or private credentials.

### Pull Requests

Pull requests should include:

* A concise description of the change
* The reason for the change
* Screenshots for visual/UI changes
* Relevant testing information
* Any known limitations

Keep pull requests small and focused whenever possible.

## License

[MIT License](LICENSE)

---

Built as part of the **EuroWave Nights** universe.

*Illegal midnight broadcasts from an unnamed city.*
