# DPFS_Jose_Kipler

# NEXUS - Tecnología & Gaming

## Sobre el proyecto

NEXUS es un e-commerce especializado en productos de tecnología y gaming, pensado para ofrecer una experiencia de compra simple, moderna y segura. El sitio permitirá explorar diferentes categorías de productos, consultar información detallada de cada artículo, registrarse como usuario y realizar compras mediante un carrito.

### Productos ofrecidos

- Periféricos: mouse, teclados y auriculares.
- Componentes para PC: memorias RAM, unidades SSD y placas de video.
- Monitores: diferentes opciones para gaming, trabajo y uso cotidiano.
- Accesorios gamer: joysticks, mousepads e iluminación para setups.
- Sillas y accesorios para escritorio: productos para mejorar la comodidad y personalizar el espacio de trabajo o juego.

## Público objetivo

NEXUS está dirigido a personas de todas las edades interesadas en la tecnología, el gaming y la informática, ya sea para jugar, trabajar, estudiar o desarrollar proyectos personales. La propuesta busca adaptarse a las distintas necesidades de los usuarios mediante una interfaz moderna e intuitiva, categorías bien organizadas e información clara sobre cada producto, facilitando la búsqueda y la decisión de compra tanto para quienes tienen experiencia en tecnología como para quienes están dando sus primeros pasos.

## Sobre mí

Mi nombre es Kipler José y soy estudiante de Desarrollo Web Full Stack en Digital House. Este proyecto forma parte de mi trabajo final de la carrera y tiene como objetivo aplicar los conocimientos adquiridos durante la formación para desarrollar un e-commerce funcional, desde la planificación y el diseño de la interfaz hasta la implementación de sus funcionalidades y la gestión de datos.


## Sitios de referencia

Para el desarrollo de NEXUS se analizaron sitios de comercio electrónico y plataformas relacionadas con la tecnología, el hardware y el gaming. Estas referencias permiten identificar buenas prácticas de diseño, organización de productos y experiencia de usuario que pueden servir como inspiración para el proyecto.


1. Compra Gamer

Sitio web: https://compragamer.com/

Se eligió por pertenecer al mismo rubro que NEXUS y estar orientado al público argentino. Se tomará como referencia la organización de las categorías, los filtros de productos y la presentación del catálogo de hardware y gaming.

2. Mercado Libre

Sitio web: https://www.mercadolibre.com.ar/

Se eligió como referencia de comercio electrónico por la forma de presentar las fichas de producto y organizar el proceso de compra. Se analizarán aspectos como la información del producto, el carrito y la navegación, con el objetivo de ofrecer una experiencia clara e intuitiva.

3. Venex

Sitio web: https://www.venex.com.ar/

Se seleccionó por ser una tienda de tecnología orientada al mercado argentino. Servirá como referencia para analizar la estructura del catálogo, la variedad de productos y la comunicación de las condiciones comerciales, como las opciones de financiación y los envíos.

4. Logitech G

Sitio web: https://www.logitechg.com/es-ar

Se eligió por la presentación visual de sus productos, el uso de imágenes de calidad y la organización de las especificaciones técnicas. También se tomará como inspiración su identidad visual, el uso del color, el contraste y la estética moderna orientada al gaming para definir el estilo de NEXUS.

5. Razer

Sitio web: https://www.razer.com/latam-es  (https://www.razer.com) 

Se eligió como referencia internacional por su identidad visual orientada al gaming, el uso del color verde característico de la marca y la presentación de sus productos. Se analizarán sus imágenes, la organización de las especificaciones técnicas y la estética de sus páginas para inspirar el diseño de NEXUS, adaptándolo a una tienda de tecnología dirigida al mercado argentino.


## Estructura del proyecto

```
DPFS_jose_kipler/
├── app.js                  (servidor Express)
├── package.json
├── README.md
├── retro.md
├── wireframes/             (wireframes del Sprint 1)
│   ├── Home.png
│   ├── Detalle de producto.png
│   ├── Carrito.png
│   ├── Formulario de registro.png
│   └── Formulario de Login.png
├── public/
│   ├── css/                (style, home, productDetail, cart, forms)
│   └── images/             (favico.svg)
└── src/
    ├── routes/             (main, products, users)
    ├── controllers/        (main, products, users)
    └── views/
        ├── index.ejs
        ├── partials/       (head, header, footer, productCard)
        ├── products/       (productList, productDetail, productCart, productCreate, productEdit)
        └── users/          (register, login)
```


## Tablero de trabajo:
Seguimiento del Sprint 2 en Trello: https://trello.com/b/BF3Fr8pY/nexus-store-sprint-2 

## Estado del proyecto: 

El proyecto se encuentra en desarrollo. Durante el Sprint 3 se incorporaron Node.js, Express y EJS, reorganizando la aplicación mediante rutas, controladores y vistas.

Se implementaron parciales reutilizables para el encabezado, pie de página, etiquetas del documento y tarjetas de productos. También se incorporaron formularios de creación y edición de productos.

Actualmente, los formularios son visuales y todavía no cuentan con persistencia de datos.


## Identidad visual

**Colores**

| Nombre | Código | Uso |

| Medianoche | `#0F0D1A` | Fondo general |
| Panel | `#1C1933` | Tarjetas y header |
| Violeta pixel | `#7B5CFF` | Enlaces y bordes |
| Menta láser | `#35F2C0` | Botones principales |
| Humo | `#ECEAF6` | Texto principal |
| Niebla | `#9A97B5` | Texto secundario |

**Tipografías:** Chakra Petch (títulos, precios y logo) y DM Sans (textos, formularios y botones).