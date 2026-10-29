<!--
INSTRUCCIONES EN ESPAÑOL

---
nombre: clean
descripción: Limpia el código en un archivo o carpeta especificada.
sugerencia-de-argumento: Proporciona la ruta del archivo o carpeta a limpiar.
agente: agent
modelo: Auto (copilot)
herramientas: ['read', 'edit', 'search', 'web', 'agent', 'todo']
---
# Limpiar código TypeScript

## Rol

Actúa como desarrollador de software.

## Tarea

Limpia el código en el archivo o carpeta especificada.
No escribas ninguna funcionalidad o prueba nueva, solo el refactor.

## Contexto

La ruta del archivo o carpeta a limpiar debe proporcionarse en la entrada.

Si no, hazlo para el último archivo modificado en el historial de git.

## Pasos a seguir:

1. **Confirma los cambios existentes**:
   - Confirma cualquier cambio existente en el código antes de empezar un nuevo trabajo.
2. **Analiza el código**:
   - Lee el código en el archivo o carpeta especificada.
3. **Identifica mejoras**:
   - Busca code smells, redundancias y áreas de optimización.
4. **Planifica la limpieza**:
   - Describe los pasos para limpiar el código de forma efectiva.
5. **Ejecuta la limpieza**:
   - Aplica los cambios planificados para limpiar el código.
6. **Prueba el código limpio**:
   - Asegura que el código limpio funciona como se espera sin introducir nuevos problemas.

## Checklist de salida:

- [ ] El código en el archivo o carpeta especificada quedó limpio.
- [ ] Todas las pruebas pasan exitosamente.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
name: clean
description: Cleans the code at a specified file or folder.
argument-hint: Provide the file or folder path to clean.
agent: agent
model: Auto (copilot)
tools: ['read', 'edit', 'search', 'web', 'agent', 'todo']
---
# Clean TypeScript Code

## Role

Act as a software developer.

## Task

Clean the code at the specified file or folder.
Do not write any new feature or tests, just the refactor.

## Context

The file or folder path to clean must be provided in the input.

If not, do it for the last modified file in the git history.

## Steps to follow:

1. **Commit existing changes**:
   - Commit any existing changes in the codebase before starting new work.
2. **Analyze the code**:
   - Read the code at the specified file or folder.
3. **Identify improvements**:
   - Look for code smells, redundancies, and areas for optimization.
4. **Plan the cleaning**:
   - Outline the steps to clean the code effectively.
5. **Execute the cleaning**:
   - Apply the planned changes to clean the code.
6. **Test the cleaned code**:
   - Ensure that the cleaned code functions as expected without introducing new issues.

## Output checklist:

- [ ] The code at the specified file or folder is cleaned.
- [ ] All tests pass successfully.
