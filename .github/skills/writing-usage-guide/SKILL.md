<!--
INSTRUCCIONES EN ESPAÑOL

---
nombre: writing-usage-guide
descripción: >
  Genera el documento de instrucciones de uso del proyecto.
  Para ser usado al documentar cómo instalar, configurar, ejecutar, probar y consumir la API.
---

# Skill para Escribir la Guía de Uso

Cuando se te pida generar la guía de uso del proyecto, sigue estos pasos:

1. **Lee las fuentes de verdad**:
   - `package.json`: scripts disponibles y versión de Node/TypeScript.
   - `.env.example` y `src/config/env.ts`: variables de entorno y valores por defecto.
   - `src/routes/` y `src/controllers/`: endpoints, métodos y códigos de respuesta.
   - `src/services/`: reglas de validación y mensajes de error.
   - `specs/`: criterios de aceptación de cada funcionalidad.
2. **Verifica antes de documentar**:
   - Cada comando debe existir en `package.json`.
   - Cada endpoint debe existir en las rutas.
   - Cada ejemplo de petición y respuesta debe corresponder al código real.
   - No inventes funcionalidades, variables ni puertos.
3. **Escribe el documento en inglés y en español**, con las mismas secciones en ambos idiomas. Primero va la versión en inglés y después la versión en español. Los comandos, rutas, código y ejemplos no se traducen:
   - Requirements: versiones de Node.js y npm.
   - Installation: `npm install`.
   - Configuration: variables de entorno.
   - Running: `npm run dev`, `npm run build` y `npm start`.
   - Testing: `npm test`.
   - API reference: cada endpoint con método, ruta, cuerpo, ejemplo de `curl` y respuestas.
   - Error responses: formato `{ "error": "..." }` y códigos 400, 404 y 500.
   - Logging: niveles y ejemplo de salida.
   - Troubleshooting: problemas comunes, como puerto ocupado o validación fallida.
4. **Usa ejemplos ejecutables**:
   - Los comandos `curl` deben apuntar a `http://localhost:<PORT>`.
   - Usa solo valores válidos según las reglas de validación.
5. **Guarda el resultado** en la ruta indicada por el usuario, por defecto `docs/INSTRUCTIONS.md`.

## Reglas

- El documento siempre incluye inglés y español visibles, con la misma estructura. Cada versión tiene un enlace de navegación a la otra.
- Mantén el texto conciso y usa tablas para los endpoints.
- No documentes características planeadas como si ya existieran; márcalas como planeadas si aparecen en el PRD.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
name: writing-usage-guide
description: >
  Generates the project usage instructions document.
  To be used for documenting how to install, configure, run, test, and consume the API.
---

# Writing Usage Guide Skill

When asked to generate the project usage guide, follow these steps:

1. **Read the sources of truth**:
   - `package.json`: available scripts and Node/TypeScript versions.
   - `.env.example` and `src/config/env.ts`: environment variables and default values.
   - `src/routes/` and `src/controllers/`: endpoints, methods, and response codes.
   - `src/services/`: validation rules and error messages.
   - `specs/`: acceptance criteria for each feature.
2. **Verify before documenting**:
   - Every command must exist in `package.json`.
   - Every endpoint must exist in the routes.
   - Every request and response example must match the real code.
   - Do not invent features, variables, or ports.
3. **Write the document in English and Spanish**, with the same sections in both languages. The English version comes first, followed by the Spanish version. Commands, paths, code, and examples are not translated:
   - Requirements: Node.js and npm versions.
   - Installation: `npm install`.
   - Configuration: environment variables.
   - Running: `npm run dev`, `npm run build`, and `npm start`.
   - Testing: `npm test`.
   - API reference: each endpoint with method, path, body, `curl` example, and responses.
   - Error responses: `{ "error": "..." }` format and 400, 404, and 500 codes.
   - Logging: levels and an output example.
   - Troubleshooting: common problems, such as a busy port or failed validation.
4. **Use runnable examples**:
   - `curl` commands must target `http://localhost:<PORT>`.
   - Use only values that pass the validation rules.
5. **Save the result** to the path the user provides, defaulting to `docs/INSTRUCTIONS.md`.

## Rules

- The document always includes visible English and Spanish sections with the same structure. Each version has a navigation link to the other.
- Keep the text concise and use tables for endpoints.
- Do not document planned features as if they exist; mark them as planned if they appear in the PRD.
