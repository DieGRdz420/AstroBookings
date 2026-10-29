<!--
INSTRUCCIONES EN ESPAÑOL

---
nombre: generating-specs
descripción: "Redacta la especificación con la definición del problema, el esquema de la solución y los criterios de aceptación. Se usa para especificar una funcionalidad, una corrección de error o una mejora."
---

# Habilidad de Generación de Especificaciones

Redacta la especificación para implementar una funcionalidad, una corrección de error o una mejora.

Incluye la definición del problema, el resumen de la solución y los criterios de aceptación.

Mantén la definición del problema clara, concisa y enfocada.

No entres en detalles de implementación.

Haz que los criterios de aceptación sean específicos y verificables.

No escribas código ni pruebas; solo la especificación.

## Contexto

- [Documento de Requisitos del Producto (PRD)]({Project_Folder}/PRD.md)

La funcionalidad, corrección de error o mejora debe proporcionarse en la entrada.

Si no se proporciona, pide la información antes de continuar.

Los tipos de especificación a generar incluyen:
- Funcionalidad nueva o actual: `feat`
- Corrección de error: `bug`
- Mejora o refactorización: `chore`

### Plantilla de salida de la especificación

Lee y sigue la [plantilla de especificación](spec.template.md) para generar el documento.

## Pasos a seguir:

### Paso 1: Capturar las entradas:
  - [ ] Confirma `feat/bug/chore` para especificar; si falta, pregunta.
  - [ ] Redacta el título del issue a partir de la solicitud; si no es claro, pregunta.
### Paso 2: Revisar el PRD (si aplica):
  - [ ] Verifica si la funcionalidad, corrección de error o mejora ya está en el PRD.
  - [ ] Si está, usa esa información para ayudar a redactar la especificación.
  - [ ] Si no está, actualiza la documentación del PRD con ella.
### Paso 3: Definir el problema:
  - [ ] Describe claramente el problema que buscamos resolver.
### Paso 4: Listar historias de usuario:
  - [ ] Hasta 3 HU que describan el problema desde la perspectiva del usuario.
### Paso 5: Esbozar la solución:
  - [ ] Describe el enfoque más simple, sin detalles técnicos, para:
    - Interfaz de usuario/aplicación
    - Modelo y lógica
    - Persistencia
### Paso 6: Definir los criterios de aceptación:
  - [ ] Hasta 9 criterios en formato EARS que definan cuándo la especificación está completa.
  - [ ] Sigue la [guía del formato EARS](./EARS.md).
### Paso 7: Generar un spec-slug-id:
  - [ ] Crea un identificador de nombre corto para la especificación basado en el tipo y el título.
  - [ ] Ejemplo: `feat-booking-management`.
### Paso 8: Escribir la especificación:
  - [ ] Usa oraciones cortas y viñetas cuando sea posible.
  - [ ] Mantén la especificación concisa pero completa.
  - [ ] Sigue la [plantilla de especificación](spec.template.md).
  - [ ] Escríbela en formato markdown en `{Specs_Folder}/<spec-slug-id>.spec.md`.

## Checklist de salida

- [ ] Un archivo markdown de especificación llamado `{Specs_Folder}/<spec-slug-id>.spec.md`.
- [ ] El estado de los requisitos del PRD debe actualizarse si es necesario.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
name: generating-specs
description: "Writes the specification with problem definition, solution outline, and acceptance criteria. To be used to specify a feature, bug correction, or enhancement."
---

# Generating Specs Skill

Write the specification to implement a feature, bug correction, or enhancement.

Include the problem definition, solution overview, and acceptance criteria.

Keep the problem definition clear, concise, and focused.

Do not enter implementation details.

Make the acceptance criteria specific, and testable.

Do not write any code or tests, just the specification.

## Context

- [Product Requirements Document]({Project_Folder}/PRD.md) 

The feature, bug correction, or enhancement must be provided in the input.

If not, ask for it before proceeding.

Types of specifications to generate include:
- New or current feature : `feat`
- Bug correction : `bug`
- Enhancement or refactor : `chore`

### Specification output template

Read and follow the specific [spec template](spec.template.md) to generate the document.

## Steps to follow:

### Step 1: Capture inputs:
  - [ ] Confirm `feat/bug/chore` to specify; if missing, ask.
  - [ ] Draft the issue title from the request; if unclear, ask.
### Step 2: Review PRD (if applicable):
  - [ ] Check if the feature, bug correction, or enhancement is already in PRD.
  - [ ] If it is, use that information to help you write the specification.
  - [ ] If not, update the PRD documentation with it.
### Step 3: Define the Problem: 
  - [ ] Clearly outline the problem that we aim to solve.
### Step 4: List User Stories: 
  - [ ] Up to 3 US that describe the problem from the user's perspective.
### Step 5: Outline the Solution: 
  - [ ] Describe the simplest approach without technical details for:
    - User/App interface
    - Model and logic
    - Persistence
### Step 6: Set Acceptance Criteria: 
  - [ ] Up to 9 criteria in EARS format that define when the spec is complete.
  - [ ] Follow the [EARS format guide](./EARS.md).
### Step 7: Generate an spec-slug-id:
  - [ ] Create a short-name identifier for the spec based on the type and title.
  - [ ] Example: `feat-booking-management`.
### Step 8: Write the Specification: 
  - [ ] Use short sentences and bullet points where possible.
  - [ ] Keep the specification concise but complete.
  - [ ] Follow the [spec template](spec.template.md)
  - [ ] Write it in markdown format at `{Specs_Folder}/<spec-slug-id>.spec.md`.

## Output Checklist

- [ ] A specification markdown file named `{Specs_Folder}/<spec-slug-id>.spec.md`.
- [ ] The PRD requirements status must be updated if needed.