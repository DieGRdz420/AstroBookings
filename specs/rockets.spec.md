# Rocket Management API Specification

## Problem Description

- As an **administrator**, I want to **register rockets with their name, range, and passenger capacity** so that **launches can be scheduled for specific rockets**.
- As an **administrator**, I want to **view and update the rocket catalog** so that **the available fleet information stays accurate and up to date**.
- As a **client**, I want to **consult the available rockets and their capacity** so that **I can know how many seats each rocket offers before booking**.

## Solution Overview

- Expose a REST endpoint `/api/rockets` that manages the rocket catalog with basic CRUD operations: create, list, get by id, update, and delete.
- Each rocket is stored with a unique identifier, a name, a range (`suborbital`, `orbital`, `moon`, `mars`), and a capacity between 1 and 10 passengers.
- Data is kept in an in-memory collection for this stage of the project (no real database required), following the existing layered structure: route → controller → service → model.
- Input validation is performed on every write operation, returning clear error messages when the data does not meet the rules.

## Acceptance Criteria

- [ ] **Ubiquitous:** The system shall assign a unique identifier to each registered rocket.
- [ ] **Event-driven:** When a valid rocket is created, the system shall store it and respond with HTTP 201 and the created rocket.
- [ ] **Event-driven:** When a rocket is created or updated with a capacity outside the 1–10 range, the system shall reject the request with HTTP 400 and a descriptive error message.
- [ ] **Event-driven:** When a rocket is created or updated with a range other than "suborbital", "orbital", "moon", or "mars", the system shall reject the request with HTTP 400 and a descriptive error message.
- [ ] **Event-driven:** When a rocket is created or updated without a name, the system shall reject the request with HTTP 400 and a descriptive error message.
- [ ] **Event-driven:** When all rockets are requested, the system shall respond with HTTP 200 and the complete list of rockets.
- [ ] **Event-driven:** When a rocket is requested by an existing identifier, the system shall respond with HTTP 200 and that rocket's data.
- [ ] **Unwanted behavior:** If a rocket is requested, updated, or deleted with a non-existent identifier, then the system shall respond with HTTP 404 and a descriptive error message.
- [ ] **State-driven:** While a rocket exists in the catalog, the system shall allow updating its name, range, and capacity, and deleting it, responding with HTTP 200 on success.
