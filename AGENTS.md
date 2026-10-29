<!--
INSTRUCCIONES EN ESPAÑOL

# Instrucciones para Agentes

## Resumen del Producto
- AstroBookings es una API backend para gestionar reservas de lanzamientos de cohetes.
- Simula una empresa de viajes espaciales: cohetes, lanzamientos y reservas de asientos.
- Proyecto educativo; no se requiere base de datos real ni seguridad de producción.

## Implementación Técnica

### Stack Tecnológico
- Lenguaje: **TypeScript 5.9 (modo estricto, módulos ES)**
- Framework: **Express 5.3 sobre Node.js 24 (LTS)**
- Base de datos: **Repositorios en memoria (sin base de datos real)**
- Seguridad: **No requerida en esta etapa**
- Pruebas: **Jest 29 + Supertest (e2e)**
- Logging: **Logger de consola personalizado (src/utils/logger.ts)**

### Flujo de trabajo de desarrollo
```bash
# Configurar el proyecto
npm install
# Compilar el proyecto
npm run build
# Ejecutar el proyecto
npm run dev      # dev con auto-recarga (tsx watch)
npm start        # ejecuta el dist/ compilado
# Probar el proyecto
npm test
# Desplegar el proyecto
# Sin despliegue; proyecto educativo
```

### Estructura de carpetas
```text
.
├── AGENTS.md           # Este archivo con instrucciones para agentes de IA
├── README.md           # El archivo principal de documentación humana
├── CHANGELOG.md        # Historial de versiones (Keep a Changelog)
├── package.json        # Scripts y dependencias
├── tsconfig.json       # Configuración de TypeScript (NodeNext, strict)
├── jest.config.js      # Configuración ESM de Jest
├── specs/              # Especificaciones de funcionalidades (criterios EARS)
├── src/
│   ├── index.ts        # Punto de entrada
│   ├── app.ts          # Configuración de la app Express
│   ├── config/         # Variables de entorno
│   ├── controllers/    # Manejadores de peticiones
│   ├── middlewares/    # Middlewares de Express
│   ├── models/         # Repositorios en memoria
│   ├── routes/         # Definiciones de rutas
│   ├── services/       # Lógica de negocio y validación
│   ├── types/          # Tipos e interfaces
│   └── utils/          # Utilidades (logger)
└── tests/              # Pruebas E2E
```

## Entorno
- El código y la documentación deben estar en inglés.
- Las respuestas del chat deben estar en el idioma del prompt del usuario.
- Sacrifica la gramática por concisión en las respuestas.
- Este es un entorno Windows usando terminal git bash.
- Mi rama por defecto es `main`.

## Comportamiento del Agente
- Cuando el usuario etiquete un archivo `.md` sin otras instrucciones, ejecuta las instrucciones que contiene.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

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

## Agent Behavior
- When the user tags a `.md` file with no other instructions, run the instructions it contains.
