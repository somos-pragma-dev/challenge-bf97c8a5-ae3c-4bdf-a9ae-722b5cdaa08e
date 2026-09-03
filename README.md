# Desarrollo de una API REST para gestión de usuarios

La empresa necesita una API REST que gestione la información de usuarios para un sistema de banca en línea. La API debe permitir la creación, lectura, actualización y eliminación de usuarios, así como la validación de datos y manejo de errores. Los usuarios tienen atributos como nombre, email, contraseña y rol. La API debe asegurar que los emails sean únicos y que las contraseñas cumplan con ciertos criterios de seguridad. El sistema debe ser capaz de manejar un volumen de 100 solicitudes por segundo durante horas pico.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Node.js Express |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición y configuración del proyecto

**Objetivo:** Configurar el proyecto y definir la estructura básica de la API.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configurar el proyecto con las dependencias necesarias.
- Definir la estructura básica de la API con rutas para creación, lectura, actualización y eliminación de usuarios.

**Entregable:** Proyecto configurado con estructura básica de API.

<details>
<summary>Pistas de conocimiento</summary>

- Identificar las dependencias necesarias para una API REST en Node.js.
- Establecer una estructura de proyecto que permita una fácil expansión y mantenimiento.

</details>

### Fase 2: Implementación de endpoints básicos

**Objetivo:** Implementar los endpoints para creación, lectura, actualización y eliminación de usuarios.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear endpoints para POST, GET, PUT y DELETE de usuarios.
- Implementar validación básica de datos en los endpoints.

**Entregable:** Endpoints básicos implementados y funcionando.

<details>
<summary>Pistas de conocimiento</summary>

- Utilizar métodos HTTP apropiados para cada operación.
- Implementar validación de datos para asegurar la integridad de la información.

</details>

### Fase 3: Aseguramiento de unicidad y seguridad de datos

**Objetivo:** Asegurar que los emails sean únicos y que las contraseñas cumplan con criterios de seguridad.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementar lógica para verificar la unicidad de emails.
- Aplicar criterios de seguridad para las contraseñas (longitud mínima, caracteres especiales, etc.).

**Entregable:** Lógica de unicidad y seguridad de datos implementada.

<details>
<summary>Pistas de conocimiento</summary>

- Utilizar consultas a la base de datos para verificar la unicidad de emails.
- Aplicar expresiones regulares para validar contraseñas.

</details>

### Fase 4: Manejo de errores y respuestas

**Objetivo:** Implementar un manejo adecuado de errores y respuestas estandarizadas.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Crear un middleware para manejar errores comunes.
- Estandarizar las respuestas de la API para facilitar el consumo por parte de los clientes.

**Entregable:** Middleware de manejo de errores y respuestas estandarizadas implementadas.

<details>
<summary>Pistas de conocimiento</summary>

- Utilizar middlewares para centralizar la lógica de manejo de errores.
- Establecer un formato estándar para las respuestas de la API.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una API REST y por qué se usa en este contexto?
- **paraQueSirve**: ¿Para qué sirve cada endpoint implementado en esta API?
- **comoSeUsa**: ¿Cómo se usa la validación de datos en los endpoints de la API?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al implementar una API REST y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica asegurar la unicidad de emails y la seguridad de las contraseñas en la API?

## Criterios de Evaluacion

- Configuración correcta del proyecto con las dependencias necesarias.
- Implementación de endpoints básicos para creación, lectura, actualización y eliminación de usuarios.
- Aplicación de validación de datos para asegurar la integridad de la información.
- Implementación de lógica para verificar la unicidad de emails y aplicar criterios de seguridad para las contraseñas.
- Manejo adecuado de errores y respuestas estandarizadas.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
