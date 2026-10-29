
<!--
INSTRUCCIONES EN ESPAÑOL

ROL:
Actúa como un ingeniero de software.

TAREA:
Crea un conjunto de instrucciones para que los agentes de IA comprendan el proyecto.

CONTEXTO:
Navega y lee los archivos del proyecto para reunir contexto.

PLANTILLA DE INSTRUCCIONES:
Asegura un archivo corto (<= 100 oraciones) y oraciones cortas (<= 100 caracteres).
Sigue esta plantilla y guárdala en un archivo markdown `AGENTS.md`:

# Agents Instructions

## Product Overview
- {De qué trata el producto en 2-3 oraciones cortas.}

## Technical Implementation

### Tech Stack
- Language: **{lenguaje y versión}**
- Framework: **{framework y versión}**
- Database: **{base de datos}**
- Security: **{estrategia de seguridad}**
- Testing: **{framework de pruebas}**
- Logging: **{herramienta de logging}**

### Development workflow
```bash
# Set up the project
# Build/Compile the project
# Run the project
# Test the project
# Deploy the project
```

### Folder structure
```text
.
├── AGENTS.md           # Este archivo con instrucciones para agentes de IA
├── README.md           # El archivo principal de documentación humana
├── {other_files}       # Otros archivos relevantes
├── {other_folders}/    # Otras carpetas relevantes
```

## Environment
- El código y la documentación deben estar en inglés.
- Las respuestas del chat deben estar en el idioma del prompt del usuario.
- Sacrifica la gramática por concisión en las respuestas.
- Este es un entorno Windows usando terminal git bash.
- Mi rama por defecto es `main`.

PASOS A SEGUIR:

1. Resumen del producto:
   - Resume el producto en 2-3 oraciones cortas.

2. Implementación técnica:
   - Tech Stack: Lista las tecnologías principales usadas.
   - Development workflow: Comandos para configurar, compilar, ejecutar, probar y desplegar.
   - Folder structure: Describe las carpetas y archivos principales.
   - Environment: Lista los detalles relevantes del entorno y copia la sección por defecto.

3. Escribir las instrucciones:
   - Sigue la plantilla y mantenla concisa.

LISTA DE VERIFICACIÓN DEL RESULTADO:
- El resultado debe ser un archivo markdown llamado `AGENTS.md`.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

# Create Agents Instructions

## Role

Act as a software engineer.

## Task

Create a set of instructions for AI agents to understand the project.

## Context

Browse and read the project files to gather context.

### Instructions Template

Ensure a short file (<= 100 sentences) and short sentences (<= 100 characters).
Follow this template and save in a markdown file `AGENTS.md`:

````markdown
# Agents Instructions

## Product Overview
- {What the product is about in 2-3 short sentences.}

## Technical Implementation

### Tech Stack
- Language: **{language and version}**
- Framework: **{framework and version}**
- Database: **{database}**
- Security: **{security strategy}**
- Testing: **{testing framework }**
- Logging: **{logging tool }**

### Development workflow
```bash
# Set up the project
# Build/Compile the project
# Run the project
# Test the project
# Deploy the project
```

### Folder structure
```text
.
├── AGENTS.md           # This file with instructions for AI agents
├── README.md           # The main human documentation file
├── {other_files}       # Other relevant files
├── {other_folders}/    # Other relevant folders
```

## Environment
- Code and documentation must be in English.
- Chat responses must be in the language of the user prompt.
- Sacrifice grammar for conciseness in responses.
- This is a Windows environment using git bash terminal.
- My default branch is `main`.
````

## Steps to follow:

1. **Product Overview**:
   - Summarize the product in 2-3 short sentences.
2. **Technical Implementation**:
   - Tech Stack: List main technologies used.
   - Development workflow: Commands to set up, build, run, test, and deploy.
   - Folder structure: Outline main folders and files.
   - Environment: List relevant environment details and copy default section.
3. **Write the Instructions**:
   - Follow the template and keep it concise.

## Output Checklist

- [ ] The output should be a markdown file named `AGENTS.md`.
