
<!--
INSTRUCCIONES EN ESPAÑOL

ROL:
Actúa como analista de software.

TAREA:
Genera una especificación para implementar la funcionalidad descrita a continuación.
No escribas código ni pruebas; entrega únicamente la especificación.

CONTEXTO:
- Se necesita un endpoint de API para gestionar cohetes en la aplicación de viajes AstroBookings.
- Cada cohete tiene:
  - Un nombre.
  - Un rango: "suborbital", "orbital", "moon" o "mars".
  - Una capacidad de entre 1 y 10 pasajeros.
- Solicita información adicional si es necesaria.

PLANTILLA DE LA ESPECIFICACIÓN:
Sigue la plantilla definida en este archivo para generar la especificación
en la ruta specs/rockets.spec.md.

PASOS A SEGUIR:

1. Definir el problema:
   - Describe claramente el problema utilizando un máximo de 3 historias de usuario.

2. Describir la solución:
   - Propón el enfoque más sencillo para la aplicación, la lógica y la infraestructura.
   - No incluyas detalles técnicos innecesarios.

3. Definir los criterios de aceptación:
   - Establece un máximo de 9 criterios de aceptación.
   - Utiliza el formato EARS (Easy Approach to Requirements Syntax).

LISTA DE VERIFICACIÓN DEL RESULTADO:
- El resultado debe ser un archivo Markdown llamado specs/rockets.spec.md.
- La especificación debe incluir:
  - Descripción del problema.
  - Resumen de la solución.
  - Criterios de aceptación.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

# Spec

## Role

Act as a software analyst.

## Task

Generate a specification to implement the functionality described below. Do not write any code or tests, just the specification.

## Context

- An API endpoint to manage rockets in the AstroBookings travel application.
- Each rocket has:
  - name,
  - range ("suborbital", "orbital", "moon", "mars"),
  - capacity (1 to 10 passengers).

Ask for any additional context if needed.

## Specification Template

Follow this template for writing the specification file `specs/rockets.spec.md`:

# Rocket Management API Specification

## Problem Description

- As {role}, I want to **{goal}** so that {reason}.

## Solution Overview

- {Simple approach to solve the problem, no technical details.}

## Acceptance Criteria

- [ ] EARS format

## Steps to follow:

1. **Define the Problem:**
   - Clearly outline the problem with up to 3 user stories.

2. **Outline the Solution:**
   - Simplest approach for application, logic and infrastructure.

3. **Set Acceptance Criteria:**
   - Up to 9 acceptance criteria in EARS format.

## Output Checklist

- The output should be a markdown file named `specs/rockets.spec.md`.
- The specification with:
  - Problem Description,
  - Solution Overview,
  - Acceptance Criteria.
