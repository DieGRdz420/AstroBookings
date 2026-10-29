<!--
INSTRUCCIONES EN ESPAÑOL

---
nombre: resolve-issue
descripción: Resuelve un issue de GitHub especificado siguiendo el flujo de trabajo del proyecto.
sugerencia-de-argumento: Proporciona el número del issue a resolver.
agente: agent
modelo: Auto (copilot)
herramientas: ['vscode', 'execute', 'read', 'edit', 'search', 'web', 'github/*', 'todo']
---
# Resolver issue

## Rol

Actúa como un desarrollador de software senior.

## Tarea

Resuelve el issue de GitHub especificado en la entrada.
Implementa los cambios necesarios en el código para cerrar el issue.

## Contexto

El número del issue debe proporcionarse en la entrada.

Si no, usa el issue abierto más reciente del repositorio.

## Pasos a seguir:

1. **Lee el issue**:
   - Obtén el issue de GitHub con sus comentarios.
   - Comprende el problema y el plan de implementación descrito.
2. **Prepara el entorno de trabajo**:
   - Confirma cualquier cambio pendiente antes de empezar.
   - Crea una rama de git con la convención `{tipo}/{nombre-corto}` (ej. `feat/add-logging`).
3. **Implementa la solución**:
   - Sigue el plan del issue paso a paso.
   - Aplica las buenas prácticas de código del proyecto (ver copilot-instructions).
   - Asegura que el código compila sin errores.
4. **Escribe pruebas**:
   - Agrega pruebas unitarias para el código implementado.
   - Asegura que todas las pruebas pasan exitosamente.
5. **Confirma los cambios**:
   - Usa la skill `commit-changes` con mensajes de commit convencionales.
   - Referencia el issue en el mensaje del commit (ej. `feat: add logging (#2)`).
6. **Integra los cambios**:
   - Sube la rama y crea un pull request que cierre el issue.
   - Usa `Closes #<número>` en la descripción del PR.

## Checklist de salida

- [ ] El issue fue leído y comprendido (con sus comentarios).
- [ ] La rama sigue la convención `{tipo}/{nombre-corto}`.
- [ ] El código compila sin errores (`npm run build`).
- [ ] Todas las pruebas pasan (`npm test`).
- [ ] Los commits siguen conventional commits y referencian el issue.
- [ ] El pull request incluye `Closes #<número>`.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
name: resolve-issue
description: Resolves a specified GitHub issue following the project workflow.
argument-hint: Provide the issue number to resolve.
agent: agent
model: Auto (copilot)
tools: ['vscode', 'execute', 'read', 'edit', 'search', 'web', 'github/*', 'todo']
---
# Resolve Issue

## Role

Act as a senior software developer.

## Task

Resolve the GitHub issue specified in the input.
Implement the necessary code changes to close the issue.

## Context

The issue number must be provided in the input.

If not, use the most recent open issue in the repository.

## Steps to follow:

1. **Read the issue**:
   - Fetch the GitHub issue with its comments.
   - Understand the problem and the described implementation plan.
2. **Prepare the working environment**:
   - Commit any pending changes before starting.
   - Create a git branch with the `{type}/{short-name}` convention (e.g. `feat/add-logging`).
3. **Implement the solution**:
   - Follow the issue plan step by step.
   - Apply the project code best practices (see copilot-instructions).
   - Ensure the code compiles without errors.
4. **Write tests**:
   - Add unit tests for the implemented code.
   - Ensure all tests pass successfully.
5. **Commit the changes**:
   - Use the `commit-changes` skill with conventional commit messages.
   - Reference the issue in the commit message (e.g. `feat: add logging (#2)`).
6. **Integrate the changes**:
   - Push the branch and create a pull request that closes the issue.
   - Use `Closes #<number>` in the PR description.

## Output Checklist

- [ ] The issue was read and understood (with its comments).
- [ ] The branch follows the `{type}/{short-name}` convention.
- [ ] The code compiles without errors (`npm run build`).
- [ ] All tests pass (`npm test`).
- [ ] Commits follow conventional commits and reference the issue.
- [ ] The pull request includes `Closes #<number>`.
