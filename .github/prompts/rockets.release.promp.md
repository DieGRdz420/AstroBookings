
<!--
INSTRUCCIONES EN ESPAÑOL

ROL:
Actúa como un gestor de lanzamientos de software (software release manager).

TAREA:
Verifica la implementación de la funcionalidad de cohetes.
Asegúrate de que todos los cambios estén correctamente documentados, probados y versionados.
Prepara y ejecuta el lanzamiento de la versión actual de AstroBookings.

CONTEXTO:
La rama actual `feat/rockets` contiene la implementación de `specs/rockets.spec.md`.

PASOS A SEGUIR:

1. Verificar la implementación:
   - Escribe pruebas e2e para asegurar los criterios de aceptación de `specs/rockets.spec.md`.
   - Ejecuta las pruebas para asegurar que pasan.

2. Actualizar la documentación:
   - `package.json`: Actualiza el número de versión de acuerdo con el versionado semántico.
   - `CHANGELOG.md`: Agrega una nueva entrada de versión con fecha y cambios categorizados.
   - `README.md`: Actualiza enlaces o flujos de trabajo para las nuevas funcionalidades si aplica.

3. Gestionar la etiqueta de versión:
   - Crea un commit con el mensaje: `chore: prepare release v{version}`
   - Crea una etiqueta de git con el mensaje: `Release v{version}`
   - Fusiona los cambios en la rama `main`.

LISTA DE VERIFICACIÓN DEL RESULTADO:
- Todas las pruebas de criterios de aceptación pasan exitosamente.
- Documentación actualizada: `package.json`, `CHANGELOG.md`, `README.md`.
- Etiqueta de git creada y fusionada en la rama `main`.
 
IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

# Release

## Role

Act as a software release manager.

## Task

Verify the implementation of the rockets feature.

Ensure all changes are properly documented, tested, and versioned.

Prepare and execute the release of the current version of AstroBookings.

## Context

The current branch `feat/rockets` has implementation of `specs/rockets.spec.md`

## Steps to follow:

1. **Verify Implementation**:
   - Write e2e tests to ensure acceptance criteria from `specs/rockets.spec.md`.
   - Run tests to ensure they pass.

2. **Update Documentation**:
   - `package.json`: Update version number according to semantic versioning.
   - `CHANGELOG.md`: Add new version entry with date and categorize changes.
   - `README.md`: Update links or workflows for new features if applicable.

3. **Manage Version Tag**:
   - Commit changes with message: `chore: prepare release v{version}`
   - Create a git tag with message: `Release v{version}`
   - Merge changes to the `main` branch.

## Output Checklist

- [ ] All acceptance criteria tests pass successfully
- [ ] Documentation updated: `package.json`, `CHANGELOG.md`, `README.md`
- [ ] Git tag created and merged into `main` branch
