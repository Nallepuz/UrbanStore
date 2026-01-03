UrbanStore

UrbanStore es una aplicación web desarrollada con **React + TypeScript** que simula una tienda de moda urbana.

Este repositorio corresponde a la **segunda versión del proyecto**, centrada en el layout inicial y la página Home.

**En desarrollo**

Actualmente implementado:

  ### Navegación y layout
    - Header con logo
    - Barra de navegación (Navbar)
    - Footer fijo
    - Layout consistente en todas las páginas
    - Enrutado mediante **React Router DOM**

  ### Home
    - Carrusel de imágenes promocionales:
      - Autoplay
      - Controles manuales
      - Indicadores (dots)
    - Sección visual orientada a destacar productos y marca

  ### Página Products
    - Listado de productos obtenidos desde API real (**DummyJSON**)
    - Tarjetas de producto reutilizables
    - Búsqueda por texto
    - Filtro por categoría
    - Ordenación por precio:
      - Ascendente
      - Descendente
    - Manejo de estados:
      - Cargando (`loading`)
      - Error
      - Datos cargados correctamente

  ### Página Product Detail
    - Ruta dinámica `/products/:id`
    - Carga de producto por ID desde la API
    - Vista detallada del producto con:
      - Imagen principal
      - Galería de imágenes
      - Nombre
      - Categoría
      - Precio
      - Descripción
    - Enlace para volver al listado de productos
    - Manejo de estados de carga y error

  ### API
    Conexión a **API real DummyJSON** usando Axios.

    Endpoints utilizados:
    - Obtener todos los productos
    - Obtener producto por ID
    - Obtener categorías

-----------------------------------------------

Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS (layout y estilos personalizados)
- React Router DOM
- Axios
- Git & GitHub

-----------------------------------------------

Estructura del proyecto

src/
├── components/
│   ├── Header.tsx
│   ├── NavBar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── Search.tsx
│   └── SortOrder.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductsDetail.tsx
│   └── ProductsDetail.css
│
├── data/
│   └── DummyJSON.ts
│
├── images/
│   ├── Carousel-1.jpg
│   ├── Carousel-2.jpg
│   ├── Carousel-3.jpg
│   ├── Home-image1.jpg
│   ├── Home-image2.webp
│   ├── Home-image3.webp
│   └── Logo.png
│
├── App.tsx
├── main.tsx
└── index.css


-----------------------------------------------

## Características clave del proyecto

- Arquitectura basada en **componentes reutilizables**
- Separación clara entre:
  - Componentes
  - Páginas
  - Lógica de datos
- Gestión de estados (`loading`, `error`, datos)
- Enrutado dinámico con parámetros
- Consumo de API externa real
- Código organizado y mantenible

-----------------------------------------------

Cómo ejecutar el proyecto

1. Clonar el repositorio:

git clone https://github.com/Nallepuz/UrbanStore.git

npm install
npm run dev

