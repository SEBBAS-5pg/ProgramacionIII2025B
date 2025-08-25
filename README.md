# Proyecto Base para Programación III - 2025B

Este repositorio contiene un proyecto base desarrollado con **Next.js 14 (App Router)** como plantilla inicial para el curso de Programación III del semestre 2025B. El objetivo principal es demostrar conceptos clave y buenas prácticas en el desarrollo de aplicaciones web modernas.

El proyecto está configurado para mostrar cómo estructurar una aplicación con diferentes secciones que tienen sus propios diseños y tipografías, una necesidad común en aplicaciones reales que tienen una parte pública y una parte privada (como un dashboard).

## ✨ Características Principales

-   **Next.js App Router**: Utiliza la última arquitectura de enrutamiento basada en directorios para una organización intuitiva y potente.
-   **Layouts Anidados (Nested Layouts)**: Demuestra cómo aplicar diferentes diseños y tipografías a distintas secciones de la aplicación.
-   **Grupos de Rutas (Route Groups)**: Organiza las rutas dentro del directorio `(general)` sin que este afecte a la URL final, manteniendo el proyecto ordenado a medida que crece.
-   **Optimización de Fuentes con `next/font`**: Implementa la carga eficiente de fuentes de Google Fonts para evitar el *Cumulative Layout Shift* (CLS) y mejorar el rendimiento web.
-   **TypeScript**: Desarrollado con TypeScript para un código más robusto, escalable y fácil de mantener.

## 🛠️ Tecnologías Utilizadas

-   [**Next.js 14**](https://nextjs.org/) - El framework de React para producción.
-   [**React 18**](https://react.dev/) - La librería para construir interfaces de usuario.
-   [**TypeScript**](https://www.typescriptlang.org/) - JavaScript con superpoderes.
-   [**next/font**](https://nextjs.org/docs/basic-features/font-optimization) - Para la optimización automática de fuentes.

## 📂 Estructura del Proyecto

La estructura de carpetas está diseñada para ser escalable y fácil de entender, separando las rutas principales en un grupo para mayor claridad.
```text
.
├── app/
│   ├── (general)/              # Grupo de rutas para organizar sin afectar la URL
│   │   ├── contact/          # Contendrá la página de contacto (ruta /contact)
│   │   ├── pricing/          # Contendrá la página de precios (ruta /pricing)
│   │   └── layout.tsx        # Layout que envuelve a las rutas del grupo (general)
│   │
│   ├── layout.tsx            # Layout Raíz (principal) que define <html> y <body>
│   └── page.tsx              # Página de inicio (ruta '/')
│
├── public/                     # Carpeta para archivos estáticos
├── package.json
└── ... (otros archivos de configuración)
```

-   **`app/layout.tsx`**: Es el layout raíz que envuelve toda la aplicación. Aquí se definen las etiquetas `<html>` y `<body>` y se aplica la tipografía global.
-   **`app/(general)/`**: Es un [Grupo de Rutas](https://nextjs.org/docs/app/building-your-application/routing/route-groups). Permite organizar los archivos sin cambiar la URL. Todas las carpetas dentro (como `contact` y `pricing`) se comportarán como si estuvieran en el nivel superior.
-   **`app/(general)/layout.tsx`**: Este es un layout anidado que se aplicará a todas las páginas dentro del grupo `(general)`, como `/contact` y `/pricing`.

## 🚀 Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Prerrequisitos

-   Tener instalado [Node.js](https://nodejs.org/) (versión 18.17 o superior).
-   Un gestor de paquetes como `npm`, `yarn` o `pnpm`.

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/jaquimbayoc7/ProgramacionIII2025B.git
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd ProgramacionIII2025B
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 👨‍💻 Autor

-   **Ing. Julián Quimbayo**
-   **GitHub**: [@jaquimbayoc7](https://github.com/jaquimbayoc7)
