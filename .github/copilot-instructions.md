<!--
INSTRUCCIONES EN ESPAÑOL

---
descripción: Buenas prácticas para el estilo de código TypeScript.
aplicaA: '**/*.ts, **/*.tsx'
---

# Buenas prácticas de estilo de código TypeScript

## Variables y nomenclatura
- Usa nombres descriptivos para variables, funciones y clases.
- Prefiere constantes con nombre sobre valores mágicos (números o cadenas literales).

## Funciones y complejidad
- Escribe funciones pequeñas que hagan una sola tarea.
- Evita el anidamiento profundo; usa retornos tempranos (early returns).

## Clases y módulos
- Evita la obsesión por los primitivos; usa tipos para modelar el dominio.
- Prefiere la composición sobre la herencia.
- Mantén las dependencias al mínimo.
- Usa el patrón adaptador (adapter) para integrar servicios externos.
- Centraliza utilidades y tipos comunes en un módulo compartido.

## Manejo de errores y comentarios
- Usa bloques try-catch con mensajes de error significativos.
- Comenta el "por qué", no el "qué".

## Principios generales
- Mantén la simplicidad; evita la sobre-ingeniería.
- No te repitas (DRY: Don't Repeat Yourself).

## Guías específicas de TypeScript
- Usa módulos ES en lugar de CommonJS.
- Prefiere exportaciones con nombre sobre exportaciones por defecto.
- Usa nombres de archivo en kebab-case (ej. `user-login.service.ts`).
- Usa tipado estricto; evita `any`.
- Define los `types` de estructuras de datos en su propio archivo.
- Usa `as const` para tipos literales.
- Define `interfaces` para contratos de clases en su propio archivo.
- Evita `null`/`undefined`; prefiere propiedades opcionales.
- Usa tipos utilitarios: `Partial`, `Pick`, `Omit`.
- Usa async/await con try/catch para errores estructurados.

IMPORTANTE:
Estas instrucciones están comentadas para que no aparezcan en la
visualización normal del Markdown. El contenido original en inglés
se conserva a continuación.
-->

---
description: Best practices for TypeScript code style.
applyTo: '**/*.ts, **/*.tsx'
---

# TypeScript Code Style Best Practices

## Variables and naming

- Use descriptive names for variables, functions, and classes.
- Prefer named constants over magic values (literal numbers or strings).

## Functions and complexity

- Write small functions that do a single task.
- Avoid deep nesting; use early returns.

## Classes and modules

- Avoid primitive obsession; use types to model the domain.
- Prefer composition over inheritance.
- Keep dependencies to a minimum.
- Use the adapter pattern to integrate external services.
- Centralize common utilities and types in a shared module.

## Error handling and comments

- Use try-catch blocks with meaningful error messages.
- Comment the "why", not the "what".

## General principles

- Keep it simple; avoid over-engineering.
- Don't repeat yourself (DRY).

## TypeScript specific guidelines

- Use ES modules instead of CommonJS.
- Prefer named exports over default exports.
- Use kebab-case file names (e.g. `user-login.service.ts`).
- Use strict typing; avoid `any`.
- Define `types` for data structures in their own file.
- Use `as const` for literal types.
- Define `interfaces` for class contracts in their own file.
- Avoid `null`/`undefined`; prefer optional properties.
- Use utility types: `Partial`, `Pick`, `Omit`.
- Use async/await with try/catch for structured errors.
