# FP Quiz App - Tests de repaso para el módulo Desarrollo de Aplicaciones Multiplataforma (DAM)

Una aplicación web sencilla, rápida e interactiva diseñada para ayudar a estudiantes de DAM a repasar algunos de los conceptos clave de las asignaturas que se ven en el módulo.

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


## Características Principales
* **Rendimiento Extremo:** Construido con Astro para una carga instantánea.
* **Preguntas Aleatorias:** Cada sesión selecciona 10 preguntas al azar de un banco de datos extenso para evitar la memorización por repetición.
* **Lógica de Estudio Realista:** * Navegación entre preguntas (Anterior/Siguiente).
    * Feedback visual inmediato en aciertos y errores.
    * Las respuestas incorrectas resaltan la opción correcta para facilitar el aprendizaje.
* **Cuadro de Mando:** Seguimiento en tiempo real de aciertos, fallos y preguntas omitidas.
* **Diseño Responsive:** Totalmente adaptado para móviles, tablets y escritorio con un modo oscuro elegante.


## Tecnologías Utilizadas
* [Astro](https://astro.build/) - Framework web para contenido rápido.
* [Tailwind CSS](https://tailwindcss.com/) - Estilizado mediante clases de utilidad.
* [JSON](https://www.json.org/) - Gestión de base de datos de preguntas local.
* **JavaScript (ES6+):** Lógica dinámica en el cliente para el manejo del estado del test.


## Estructura del Proyecto

```text
/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes modulares (QuizHeader, TestContainer, etc.)
│   ├── layouts/         # Plantillas de página
│   ├── pages/           # Rutas de la aplicación (Home, Tests por asignatura)
│   └── data/            # Bancos de preguntas en formato JSON
└── package.json
