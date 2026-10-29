# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-10-29

### Added

- Logging functionality across all layers:
  - Extended logger with `warn` and `debug` levels and ISO timestamps (`src/utils/logger.ts`).
  - HTTP request logging middleware: method, URL, status code, and response time (`src/middlewares/request-logger.ts`).
  - CRUD operation logs in controllers (`info`) and failure logs (`warn`).
  - Domain event and validation error logs in services.
  - Repository mutation logs in models (`debug`).
- Unit tests for logger and request-logger middleware (26 tests total).
- AI agent customization files:
  - Agents: `coder`, `dev-ops` (`.github/agents/`).
  - Prompts: `commit`, `translate-format`, `clean-ts`, `add-logger` (`.github/prompts/`).
  - Skills: `commit-changes` (with conventional commits reference), `releasing-version` (`.github/skills/`).
- Agent behavior rule in `AGENTS.md`: run tagged `.md` files with no other instructions.

### Changed

- Replaced default exports with named exports (`app`, `apiRoutes`, `rocketRoutes`).
- Renamed `errorHandler.ts` to `error-handler.ts` (kebab-case).
- Moved prompt files from repository root to `.github/prompts/`.
- Applied bilingual translation format (Spanish comment + English content) to instruction files.

## [1.1.0] - 2026-10-28

### Added

- Rocket management API at `/api/rockets` with full CRUD operations (create, list, get by id, update, delete) per `specs/rockets.spec.md`.
- In-memory `RocketRepository` implementation with interface-based contract.
- Service-layer validation: required name, range enum (`suborbital`, `orbital`, `moon`, `mars`), capacity between 1 and 10.
- HTTP error handling: 400 for validation errors, 404 for unknown identifiers.
- E2E test suite (`tests/rockets.e2e.test.ts`) covering all acceptance criteria with Jest + Supertest.
- README section on AI-assisted development best practices.

### Changed

- Migrated project to ES modules (`"type": "module"`, `NodeNext` in tsconfig).
- Replaced `ts-node-dev` with `tsx` for the dev server (ESM support).

## [1.0.0] - 2026-10-28

### Added

- Initial project scaffold: Node.js + TypeScript with Express 5.
- Health status endpoint at `GET /api/health`.
- Layered structure: config, controllers, middlewares, models, routes, services, types, utils.
- TypeScript strict configuration with build output to `dist/`.
