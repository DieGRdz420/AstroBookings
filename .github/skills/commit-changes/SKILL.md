<!--
INSTRUCCIONES EN ESPAÑOL

---
nombre: commit-changes
descripción: >
  Confirma los cambios pendientes.
  Para ser usado al confirmar cambios de código en un repositorio git.
---

# Skill para Confirmar Cambios

Cuando se te pida confirmar cambios, sigue estos pasos:

1. **Verifica cambios sin confirmar**:
   - Usa `git status` para ver si hay cambios sin confirmar.
2. **Agrupa los cambios**:
   - Si hay varios archivos modificados, agrúpalos lógicamente si es posible.
   - Decide mensajes de commit significativos para cada grupo.
3. **Prepara los cambios**:
   - Prepara los cambios usando `git add` para cada grupo de archivos.
4. **Confirma los cambios**:
   - Confirma los cambios preparados usando [mensajes de commit convencionales]
   - `feat:` nueva funcionalidad
   - `fix:` corrección de error
   - `test:` agregar o corregir pruebas
   - `perf:` mejoras de rendimiento del código
   - `refactor|style:` limpieza de código
   - `docs:` cambios solo de documentación
   - `chore|build|ci:` cambios en el proceso de build o herramientas auxiliares
   - Cambios que rompen compatibilidad (indicados con `!` o "BREAKING CHANGE")

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
name: commit-changes
description: >
  Commits pending changes.
  To be used for committing code changes in a git repository.
---

# Committing Changes Skill

When asked for committing changes, follow these steps:

1. **Check for uncommitted changes**:
   - Use `git status` to see if there are any uncommitted changes.
2. **Group changes**:
   - If there are multiple files changed, group them logically if possible.
   - Decide on meaningful commit messages for each group.
3. **Stage changes**:
   - Stage the changes using `git add` for each group of files.
4. **Commit changes**:
   - Commit the staged changes using [conventional commit messages]
   - `feat:` new feature
   - `fix:` bug fix
   - `test:` adding or fixing tests
   - `perf:` code performance improvements
   - `refactor|style:` code cleanup
   - `docs:` documentation only changes
   - `chore|build|ci:` build process or auxiliary tool changes
   - Breaking changes (indicated by `!` or "BREAKING CHANGE")
