<!--
INSTRUCCIONES EN ESPAÑOL

---
nombre: releasing-version
descripción: >
  Actualiza documentación, genera changelogs y maneja el versionado.
  Para ser usado en la automatización de tareas de release.
---

# Skill para Versionado de Releases

Cuando se te pida preparar un release, sigue estos pasos:

1. **Revisa los cambios desde el último release**:
   - Usa `git log` y `git diff` contra el último tag para identificar los cambios.
   - Clasifica los cambios según conventional commits (feat, fix, docs, etc.).
2. **Determina la nueva versión**:
   - Aplica versionado semántico (semver):
     - MAJOR: cambios que rompen compatibilidad (`!` o "BREAKING CHANGE").
     - MINOR: nuevas funcionalidades (`feat:`).
     - PATCH: correcciones de errores (`fix:`).
3. **Actualiza la versión**:
   - Actualiza el campo `version` en `package.json`.
4. **Actualiza el changelog**:
   - Agrega una entrada en `CHANGELOG.md` siguiendo el formato Keep a Changelog.
   - Agrupa los cambios por tipo: Added, Changed, Fixed, etc.
   - Incluye la fecha del release.
5. **Actualiza la documentación**:
   - Actualiza el README u otros documentos afectados por los cambios.
6. **Confirma y etiqueta**:
   - Crea un commit `chore: prepare release v<versión>`.
   - Crea un tag git `v<versión>` con la descripción del release.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
name: releasing-version
description: >
  Updates documentation, generates changelogs, and handles versioning.
  To be used for automating releases tasks.
---

# Releasing Version Skill

When asked to prepare a release, follow these steps:

1. **Review changes since the last release**:
   - Use `git log` and `git diff` against the latest tag to identify changes.
   - Classify changes according to conventional commits (feat, fix, docs, etc.).
2. **Determine the new version**:
   - Apply semantic versioning (semver):
     - MAJOR: breaking changes (`!` or "BREAKING CHANGE").
     - MINOR: new features (`feat:`).
     - PATCH: bug fixes (`fix:`).
3. **Update the version**:
   - Update the `version` field in `package.json`.
4. **Update the changelog**:
   - Add an entry in `CHANGELOG.md` following the Keep a Changelog format.
   - Group changes by type: Added, Changed, Fixed, etc.
   - Include the release date.
5. **Update documentation**:
   - Update the README or other documents affected by the changes.
6. **Commit and tag**:
   - Create a commit `chore: prepare release v<version>`.
   - Create a git tag `v<version>` with the release description.
