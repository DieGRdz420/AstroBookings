# AstroBookings — Product Requirements Document (PRD)

> **English** · [Español](#documento-de-requisitos-del-producto-prd)

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

---

# Documento de Requisitos del Producto (PRD)

> [English](#astrobookings--product-requirements-document-prd) · **Español**

Versión: 1.2.0 (derivada del estado actual del proyecto)
Estado: Borrador para revisión

## 1. Descripción del producto

AstroBookings es una API backend que gestiona reservaciones de lanzamientos de cohetes para una empresa ficticia de viajes espaciales. Es un proyecto educativo para el curso "Programación Inteligente". En esta etapa no usa una base de datos real ni requiere seguridad de producción.

## 2. Planteamiento del problema

Una empresa de viajes espaciales necesita:
- Mantener un catálogo preciso de sus cohetes, incluyendo alcance y capacidad de asientos.
- Programar lanzamientos para cohetes específicos, con precios y un número mínimo de pasajeros.
- Permitir que los clientes reserven asientos en un lanzamiento sin superar la capacidad.
- Cobrar a los clientes al momento de reservar mediante una pasarela de pago simulada.

## 3. Usuarios objetivo

- **Administrador**: gestiona el catálogo de cohetes y la programación de lanzamientos.
- **Cliente**: consulta cohetes y lanzamientos, y reserva asientos.

## 4. Alcance y estado

| # | Funcionalidad | Estado | Referencia |
|---|---------------|--------|------------|
| F1 | Endpoint de estado de salud | Implementada (1.0.0) | `GET /api/health` |
| F2 | CRUD del catálogo de cohetes | Implementada (1.1.0) | `specs/rockets.spec.md` |
| F3 | Logging en todas las capas | Implementada (1.2.0) | `src/utils/logger.ts` |
| F4 | Programación y ciclo de vida de lanzamientos | Planeada | README |
| F5 | Identificación de clientes | Planeada | README |
| F6 | Reservas de asientos con control de capacidad | Planeada | README |
| F7 | Procesamiento de pagos simulado al reservar | Planeada | README |

## 5. Requisitos funcionales

### 5.1 Implementados

**F2 — Catálogo de cohetes**
- Cada cohete tiene un id único, un nombre, un alcance (`suborbital`, `orbital`, `moon`, `mars`) y una capacidad de 1 a 10.
- Endpoints: `GET /api/rockets`, `GET /api/rockets/:id`, `POST /api/rockets`, `PUT /api/rockets/:id`, `DELETE /api/rockets/:id`.
- La validación devuelve HTTP 400; los ids inexistentes devuelven HTTP 404.

### 5.2 Planeados (según el README)

**F4 — Lanzamientos**
- Un lanzamiento se programa para un cohete específico, con un precio y un número mínimo de pasajeros.
- Ciclo de vida: `scheduled` → `confirmed` → `successful`, con las alternativas `cancelled` y `suspended`.

**F5 — Clientes**
- Los clientes se identifican por correo electrónico y tienen nombre y número de teléfono.

**F6 — Reservas**
- Un cliente puede reservar varios asientos en el mismo lanzamiento.
- Una reserva se rechaza si supera los asientos disponibles en el cohete.

**F7 — Pagos**
- Los cobros se realizan al momento de reservar.
- Los pagos pasan por una pasarela de pago simulada.

## 6. Requisitos no funcionales

- Lenguaje: TypeScript 5.9 en modo estricto, módulos ES.
- Entorno y framework: Node.js 24 (LTS), Express 5.3.
- Almacenamiento: solo repositorios en memoria.
- Pruebas: Jest 29 con Supertest para pruebas end-to-end.
- Logging: logger de consola con timestamp ISO y niveles (`INFO`, `WARN`, `ERROR`, `DEBUG`).
- Seguridad: no requerida en esta etapa.
- Arquitectura: por capas (rutas → controladores → servicios → repositorios/modelos → tipos).

## 7. Decisiones clave

- Mantener la persistencia en memoria para el alcance educativo; sin base de datos real.
- Mantener la arquitectura por capas para que los cambios generados con IA sean pequeños y localizados.
- Especificar cada funcionalidad en `specs/` antes de implementarla.
- No agregar mecanismos de seguridad de producción.

## 8. Preguntas abiertas

- ¿La cantidad de asientos de un lanzamiento viene directamente de la capacidad del cohete, o puede definirse por lanzamiento?
- ¿Qué campos guarda un registro de pago y cómo se manejan los reembolsos al cancelar?
- ¿Qué estados de lanzamiento puede ver el cliente y cuáles son solo de administrador?
- ¿El cliente puede cancelar sus reservas?

## 9. Hitos

1. Programación de lanzamientos (F4) con su propia especificación en `specs/`.
2. Identificación de clientes (F5).
3. Reservas con control de capacidad (F6).
4. Pagos simulados (F7).
