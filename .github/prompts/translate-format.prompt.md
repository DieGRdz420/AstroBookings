<!--
INSTRUCCIONES EN ESPAÑOL

---
nombre: translate-format
descripción: Aplica el formato de traducción bilingüe a un archivo de instrucciones.
agente: agent
modelo: GPT-5 mini (copilot)
herramientas: ['read', 'edit/editFiles', 'search']
---
# Aplicar formato de traducción

## Rol

Actúa como desarrollador de software.

## Tarea

Aplica el formato de traducción bilingüe al archivo de instrucciones indicado por el usuario.

## Contexto

El proyecto mantiene archivos de instrucciones para agentes de IA (prompts, skills, instructions)
con un formato bilingüe: las instrucciones en español van dentro de un comentario HTML al inicio
del archivo, y el contenido original en inglés se conserva visible a continuación.

## Reglas de flujo de trabajo

1. **Leer el archivo objetivo**:
   - Si el archivo tiene contenido, úsalo como base para la traducción.
   - Si el archivo está vacío, pide al usuario el contenido (o una imagen) para transcribirlo.

2. **Escribir el bloque de traducción al español**:
   - Abre un comentario HTML en la primera línea del archivo.
   - Agrega el encabezado `INSTRUCCIONES EN ESPAÑOL`.
   - Traduce TODO el contenido al español, incluyendo el frontmatter
     (traduce las claves: `name` a `nombre`, `description` a `descripción`, etc.).
   - Cierra el bloque con la nota IMPORTANTE y el cierre del comentario HTML.

3. **Escribir el contenido original en inglés**:
   - Después del comentario, coloca el contenido en inglés.
   - El frontmatter funcional (YAML entre `---`) debe quedar en la versión
     en inglés, FUERA del comentario, para que VS Code lo reconozca.
   - Conserva bloques de código, comandos y nombres técnicos sin traducir
     en ambas versiones (ej. `git status`, `feat:`, nombres de archivos).

4. **Verificar el resultado**:
   - El comentario HTML debe estar bien cerrado.
   - El frontmatter visible debe ser YAML válido.
   - Ambas versiones deben tener el mismo contenido estructural.

## Nota IMPORTANTE (va al final del comentario, antes de cerrarlo)

    IMPORTANTE:
    Estas instrucciones están comentadas para que no aparezcan en la
    visualización normal del Markdown. El contenido original en inglés
    se conserva a continuación.

## Ejemplo de estructura

    [comentario HTML de apertura]
    INSTRUCCIONES EN ESPAÑOL

    {contenido traducido al español}

    {nota IMPORTANTE}
    [cierre del comentario HTML]

    {contenido original en inglés, incluyendo el frontmatter funcional}

## Checklist de salida

- [ ] El comentario HTML abre y cierra correctamente
- [ ] La traducción al español está completa (incluido el frontmatter)
- [ ] La nota IMPORTANTE está al final del comentario
- [ ] El contenido en inglés está fuera del comentario
- [ ] El frontmatter funcional está en la versión en inglés
- [ ] Código, comandos y nombres técnicos sin traducir en ambas versiones

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
name: translate-format
description: Applies the bilingual translation format to an instructions file.
agent: agent
model: GPT-5 mini (copilot)
tools: ['read', 'edit/editFiles', 'search']
---
# Apply Translation Format

## Role

Act as a software developer.

## Task

Apply the bilingual translation format to the instructions file specified by the user.

## Context

The project keeps AI agent instruction files (prompts, skills, instructions)
in a bilingual format: Spanish instructions go inside an HTML comment at the
top of the file, and the original English content stays visible below.

## Workflow Rules

1. **Read the target file**:
   - If the file has content, use it as the base for translation.
   - If the file is empty, ask the user for the content (or an image) to transcribe.

2. **Write the Spanish translation block**:
   - Open an HTML comment on the first line of the file.
   - Add the header `INSTRUCCIONES EN ESPAÑOL`.
   - Translate ALL content to Spanish, including the frontmatter
     (translate keys: `name` to `nombre`, `description` to `descripción`, etc.).
   - Close the block with the IMPORTANTE note and the HTML comment closing tag.

3. **Write the original English content**:
   - After the comment, place the English content.
   - The functional frontmatter (YAML between `---`) must be in the English
     version, OUTSIDE the comment, so VS Code can recognize it.
   - Keep code blocks, commands, and technical names untranslated
     in both versions (e.g. `git status`, `feat:`, file names).

4. **Verify the result**:
   - The HTML comment must be properly closed.
   - The visible frontmatter must be valid YAML.
   - Both versions must have the same structural content.

## IMPORTANTE Note (goes at the end of the comment, before closing it)

    IMPORTANTE:
    Estas instrucciones están comentadas para que no aparezcan en la
    visualización normal del Markdown. El contenido original en inglés
    se conserva a continuación.

## Structure Example

    [opening HTML comment]
    INSTRUCCIONES EN ESPAÑOL

    {content translated to Spanish}

    {IMPORTANTE note}
    [closing HTML comment]

    {original English content, including the functional frontmatter}

## Output Checklist

- [ ] The HTML comment opens and closes correctly
- [ ] The Spanish translation is complete (including frontmatter)
- [ ] The IMPORTANTE note is at the end of the comment
- [ ] The English content is outside the comment
- [ ] The functional frontmatter is in the English version
- [ ] Code, commands, and technical names untranslated in both versions
