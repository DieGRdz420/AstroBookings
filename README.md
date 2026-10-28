# AstroBookings

Una API backend para gestionar reservaciones de lanzamientos de cohetes.

Este proyecto es una práctica del curso Programación Inteligente, desarrollo profesional con IA, orientada al aprendizaje y la aplicación de conceptos de programación mediante el uso de inteligencia artificial.

El sistema simula una empresa ficticia de viajes espaciales y contempla las siguientes funcionalidades:
- Los lanzamientos se programan para cohetes específicos, con precios y un número mínimo de pasajeros requerido.
- Los cohetes tienen una capacidad limitada de asientos. Las solicitudes de reservación se validan para evitar superar dicha capacidad.
- Los lanzamientos siguen un ciclo de vida: programado → confirmado → exitoso, con alternativas para su cancelación o suspensión.
- Los clientes se identifican mediante su correo electrónico y cuentan con nombre y número de teléfono.
- Un cliente puede reservar varios asientos para un mismo lanzamiento, siempre que no supere la cantidad disponible.
- Los cobros se realizan al momento de reservar y los pagos se procesan mediante una pasarela de pago simulada.
Advertencia
AstroBookings es una empresa ficticia creada exclusivamente con fines educativos.

Este proyecto forma parte de las prácticas del curso y está diseñado para demostrar y ejercitar conceptos de programación y desarrollo de software con apoyo de inteligencia artificial.

No está destinado para uso en producción. En esta etapa inicial, no se requiere implementar mecanismos de seguridad ni una base de datos real.

## Desarrollo con IA

Este proyecto aplica buenas prácticas para el desarrollo de software asistido por inteligencia artificial:

- **Especificación antes que código**: cada funcionalidad parte de una especificación escrita (ver [specs/rockets.spec.md](specs/rockets.spec.md)) con historias de usuario, resumen de la solución y criterios de aceptación en formato EARS.
- **Prompts versionados**: las instrucciones dadas a la IA se conservan como archivos de prompt en el repositorio (`*.promp.md`), de modo que el proceso es reproducible y auditable.
- **Trabajo en ramas de feature**: cada funcionalidad se desarrolla en su propia rama (por ejemplo `feat/rockets`) y se integra mediante pull requests.
- **Commits atómicos y descriptivos**: cada commit representa un cambio coherente (scaffold, especificación, implementación) con mensajes que explican el qué y el por qué.
- **Tipado estricto**: TypeScript en modo `strict`, sin `any`, usando `types` para estructuras de datos e `interfaces` para contratos, lo que permite a la IA razonar sobre el código con mayor precisión.
- **Arquitectura por capas**: separación en rutas, controladores, servicios, modelos y tipos, facilitando que los cambios generados sean pequeños y localizados.
- **Verificación continua**: el código generado se valida compilando (`tsc --noEmit`) y probando los endpoints antes de cada commit.

## Estructura

```
├── src/
│   ├── config/        # Configuración (variables de entorno, etc.)
│   ├── controllers/   # Controladores (manejo de requests)
│   ├── middlewares/   # Middlewares de Express
│   ├── models/        # Modelos de datos
│   ├── routes/        # Definición de rutas
│   ├── services/      # Lógica de negocio
│   ├── types/         # Tipos e interfaces de TypeScript
│   ├── utils/         # Utilidades
│   ├── app.ts         # Configuración de Express
│   └── index.ts       # Punto de entrada
├── tests/             # Pruebas
├── .env.example       # Ejemplo de variables de entorno
├── package.json
└── tsconfig.json
```

## Comandos

```bash
npm install     # Instalar dependencias
npm run dev     # Desarrollo con recarga automática
npm run build   # Compilar a JavaScript (dist/)
npm start       # Ejecutar versión compilada
npm test        # Ejecutar pruebas
```
