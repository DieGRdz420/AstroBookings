<!--
INSTRUCCIONES EN ESPAÑOL

---
nombre: commit
descripción: Realiza commit de los cambios pendientes.
agente: agent
modelo: GPT-5 mini (copilot)
herramientas: ['execute/getTerminalOutput', 'execute/runInTerminal', 'read', 'edit/editFiles', 'search']
---
# Confirmar cambios

## Rol

Actúa como desarrollador de software.

## Tarea

Confirma todos los cambios pendientes en el repositorio local.

## Reglas de flujo de trabajo

**CRÍTICO**: Trabaja SOLO con comandos git locales. NUNCA uses herramientas de API de GitHub (mcp_github_*) para confirmar cambios. Todos los commits deben ser locales hasta que se haga push explícitamente.

### Proceso paso a paso

1. **Revisar qué se va a confirmar**:
   ```bash
   git status
   git diff
   ```

2. **Preparar todos los cambios**:
   ```bash
   git add .
   ```

3. **Verificar cambios preparados**:
   ```bash
   git status
   ```

4. **Crear commit con mensaje convencional**:
   ```bash
   git commit -m "<tipo>: <descripción>"
   ```
   Donde `<tipo>` es uno de: `feat`, `fix`, `chore`, `docs`, `test`, `refactor`

5. **Verificar que el commit se creó**:
   ```bash
   git log -1 --oneline
   ```

6. **Mostrar estado final**:
   ```bash
   git status
   ```

## Contexto

El formato de mensaje de commit sigue conventional commits:
- `feat:` para nuevas funcionalidades
- `fix:` para correcciones de errores
- `chore:` para mantenimiento
- `docs:` para documentación
- `test:` para pruebas
- `refactor:` para reestructuración de código

Usa la skill `committing-changes` como referencia. Usa la herramienta de terminal para ejecutar comandos git.

## Checklist de salida

- [ ] Se revisó `git status` y `git diff` antes de confirmar
- [ ] Todos los archivos previstos están preparados
- [ ] El mensaje de commit sigue el formato `<type>: <description>`
- [ ] Commit creado correctamente (verificado con `git log -1`)
- [ ] No quedan cambios sin confirmar (verificado con `git status`)
- [ ] Los cambios son SOLO LOCALES (sin push remoto salvo petición explícita)

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
name: commit
description: Commits pending changes.
agent: agent
model: GPT-5 mini (copilot)
tools: ['execute/getTerminalOutput', 'execute/runInTerminal', 'read', 'edit/editFiles', 'search']
---
# Commit Changes

## Role

Act as a software developer.

## Task

Commit all pending changes in the local repository.

## Workflow Rules

**CRITICAL**: Work ONLY with local git commands. NEVER use GitHub API tools (mcp_github_*) to commit changes. All commits must be local until explicitly pushed.

### Step-by-step process

1. **Review what will be committed**:
   ```bash
   git status
   git diff
   ```

2. **Stage all changes**:
   ```bash
   git add .
   ```

3. **Verify staged changes**:
   ```bash
   git status
   ```

4. **Create commit with conventional message**:
   ```bash
   git commit -m "<type>: <description>"
   ```
   Where `<type>` is one of: `feat`, `fix`, `chore`, `docs`, `test`, `refactor`

5. **Verify the commit was created**:
   ```bash
   git log -1 --oneline
   ```

6. **Show final status**:
   ```bash
   git status
   ```

## Context

The commit message format follows conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `chore:` for maintenance
- `docs:` for documentation
- `test:` for tests
- `refactor:` for code restructuring

Use the `committing-changes` skill as reference. Use the terminal tool to run git commands.

## Output Checklist

- [ ] Reviewed `git status` and `git diff` before committing
- [ ] All intended files are staged
- [ ] Commit message follows the `<type>: <description>` format
- [ ] Commit created successfully (verified with `git log -1`)
- [ ] No uncommitted changes remain (verified with `git status`)
- [ ] Changes are LOCAL ONLY (no remote push unless explicitly requested)
