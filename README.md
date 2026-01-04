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

### Aplicación de las Leyes de Gestakt en UrbanStore

  1- Ley de Proximidad: Establece que los elementos que se encuentran cerca entre sí, suelen percibirse como parte de un mismo grupo.

  En la página de productos, cada producto se muestra en una tarjeta propia donde la imagen, nombre y precio estan agrupados.

  <img width="1249" height="701" alt="image" src="https://github.com/user-attachments/assets/b2b32ad1-7bbf-465a-8b24-dcf049976b0a" />


  Los controles de filtrado (categoría, búsqueda y ordenación) se encuentran próximos entre sí en la parte superior, lo que permite al usuario entender que forman parte de un mismo bloque de acciones.

  <img width="2495" height="309" alt="image" src="https://github.com/user-attachments/assets/be67cdd9-f512-4348-acc9-4b9fb85532c7" />

  Beneficio:
  El usuario identifica rápidamente qué información pertenece a cada producto y qué elementos están relacionados entre sí, reduciendo la carga cognitiva.


  2- Ley de Similitud: Indica que los elementos que comparten características visuales (formas, colores, estilos) se interpretan como de un mismo grupo.

  El layput general respeta una paleta de colores consistente (fondos oscuros, texto claro y tonos de color rojo) reforzando la identidad visual de la tienda con una paleta de colores adecuada.

  <img width="2493" height="1302" alt="image" src="https://github.com/user-attachments/assets/dd79b809-22ba-4833-b655-230a9806d7ee" />

-----------------------------------------------

### Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS (layout y estilos personalizados)
- React Router DOM
- Axios
- Git & GitHub

-----------------------------------------------

### Estructura del proyecto

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

### Características clave del proyecto

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

### Cómo ejecutar el proyecto

1. Clonar el repositorio:

git clone https://github.com/Nallepuz/UrbanStore.git

npm install
npm run dev

