# Agents Instructions

## Product Overview
- AstroBookings is a backend API to manage rocket launch bookings.
- It simulates a space travel company: rockets, launches, and seat reservations.
- Educational project; no real database or production security required.

## Technical Implementation

### Tech Stack
- Language: **TypeScript 5.9 (strict mode, ES modules)**
- Framework: **Express 5.3 on Node.js 24 (LTS)**
- Database: **In-memory repositories (no real database)**
- Security: **None required at this stage**
- Testing: **Jest 29 + Supertest (e2e)**
- Logging: **Custom console logger (src/utils/logger.ts)**

### Development workflow
```bash
# Set up the project
npm install
# Build/Compile the project
npm run build
# Run the project
npm run dev      # dev with auto-reload (tsx watch)
npm start        # run compiled dist/
# Test the project
npm test
# Deploy the project
# No deployment; educational project
```

### Folder structure
```text
.
├── AGENTS.md           # This file with instructions for AI agents
├── README.md           # The main human documentation file
├── CHANGELOG.md        # Version history (Keep a Changelog)
├── package.json        # Scripts and dependencies
├── tsconfig.json       # TypeScript config (NodeNext, strict)
├── jest.config.js      # Jest ESM config
├── specs/              # Feature specifications (EARS criteria)
├── src/
│   ├── index.ts        # Entry point
│   ├── app.ts          # Express app setup
│   ├── config/         # Environment variables
│   ├── controllers/    # Request handlers
│   ├── middlewares/    # Express middlewares
│   ├── models/         # In-memory repositories
│   ├── routes/         # Route definitions
│   ├── services/       # Business logic and validation
│   ├── types/          # Types and interfaces
│   └── utils/          # Utilities (logger)
└── tests/              # E2E tests
```

## Environment
- Code and documentation must be in English.
- Chat responses must be in the language of the user prompt.
- Sacrifice grammar for conciseness in responses.
- This is a Windows environment using git bash terminal.
- My default branch is `main`.
