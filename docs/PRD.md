# AstroBookings — Product Requirements Document (PRD)

Version: 1.2.0 (derived from the current project state)
Status: Draft for review

## 1. Product Overview

AstroBookings is a backend API that manages rocket launch bookings for a fictional space travel company. It is an educational project for the "Programación Inteligente" course. It has no real database and no production security requirements at this stage.

## 2. Problem Statement

A space travel company needs to:
- Keep an accurate catalog of its rockets, including range and seat capacity.
- Schedule launches for specific rockets, with prices and a minimum passenger count.
- Let customers reserve seats on a launch without exceeding capacity.
- Charge customers at booking time through a simulated payment gateway.

## 3. Target Users

- **Administrator**: manages the rocket catalog and launch schedule.
- **Client**: consults rockets and launches, and books seats.

## 4. Scope and Status

| # | Feature | Status | Reference |
|---|---------|--------|-----------|
| F1 | Health status endpoint | Implemented (1.0.0) | `GET /api/health` |
| F2 | Rocket catalog CRUD | Implemented (1.1.0) | `specs/rockets.spec.md` |
| F3 | Logging across layers | Implemented (1.2.0) | `src/utils/logger.ts` |
| F4 | Launch scheduling and lifecycle | Planned | README |
| F5 | Customer identification | Planned | README |
| F6 | Seat bookings with capacity checks | Planned | README |
| F7 | Simulated payment processing at booking | Planned | README |

## 5. Functional Requirements

### 5.1 Implemented

**F2 — Rocket catalog**
- Each rocket has a unique id, a name, a range (`suborbital`, `orbital`, `moon`, `mars`), and a capacity from 1 to 10.
- Endpoints: `GET /api/rockets`, `GET /api/rockets/:id`, `POST /api/rockets`, `PUT /api/rockets/:id`, `DELETE /api/rockets/:id`.
- Validation returns HTTP 400; unknown ids return HTTP 404.

### 5.2 Planned (from README)

**F4 — Launches**
- A launch is scheduled for a specific rocket with a price and a minimum passenger count.
- Lifecycle: `scheduled` → `confirmed` → `successful`, with `cancelled` and `suspended` alternatives.

**F5 — Customers**
- Customers are identified by email address and have a name and phone number.

**F6 — Bookings**
- A customer may reserve several seats on the same launch.
- A booking is rejected if it exceeds the seats still available on the rocket.

**F7 — Payments**
- Charges happen at booking time.
- Payments go through a simulated payment gateway.

## 6. Non-Functional Requirements

- Language: TypeScript 5.9 in strict mode, ES modules.
- Runtime and framework: Node.js 24 (LTS), Express 5.3.
- Storage: in-memory repositories only.
- Testing: Jest 29 with Supertest for end-to-end tests.
- Logging: console logger with ISO timestamps and levels (`INFO`, `WARN`, `ERROR`, `DEBUG`).
- Security: not required at this stage.
- Architecture: layered (routes → controllers → services → repositories/models → types).

## 7. Key Decisions

- Keep in-memory persistence for the educational scope; no real database.
- Keep the layered architecture so AI-generated changes stay small and localized.
- Specify each feature in `specs/` before implementing it.
- Do not add production security mechanisms.

## 8. Open Questions

- Should a launch's seat count come from the rocket capacity directly, or can it be set per launch?
- What fields does a payment record store, and how are refunds on cancellation handled?
- Which launch states can a customer see, and which are admin-only?
- Should bookings be cancellable by the customer?

## 9. Milestones

1. Launch scheduling (F4) with its own spec in `specs/`.
2. Customer identification (F5).
3. Bookings with capacity checks (F6).
4. Simulated payments (F7).
