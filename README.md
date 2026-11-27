<!-- # DPFS_Jose_Kipler

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
├── .env.example            (plantilla de variables de entorno)
├── .sequelizerc
├── README.md
├── retro.md
├── daily.md
├── database/
│   ├── config/             (configuración de Sequelize)
│   ├── models/             (modelos y relaciones)
│   ├── structure.sql
│   ├── data.sql
│   └── DER_nexus.pdf
├── scripts/                (hashPasswords, generateDataSql y pruebas)
├── wireframes/              (wireframes del Sprint 1)
├── public/
│   ├── css/
│   ├── js/                 (validaciones del front-end)
│   └── images/
│       ├── users/           (fotos de perfil)
│       └── products/        (fotos de producto)
└── src/
    ├── data/                (products.json y users.json de origen)
    ├── middlewares/          (uploadUserImage, userLogged, guest, auth)
    ├── utils/
    ├── validations/          (reglas de Express Validator)
    ├── routes/               (main, products, users)
    ├── controllers/           (main, products, users)
    └── views/
        ├── index.ejs
        ├── partials/          (head, header, footer, productCard, productForm, pagination)
        ├── products/          (productList, productDetail, productCart, productCreate, productEdit)
        └── users/             (register, login, profile, profileEdit)
```



## Tablero de trabajo:
Seguimiento del Sprint 2 en Trello: https://trello.com/b/BF3Fr8pY/nexus-store-sprint-2 
Seguimiento en trello: https://trello.com/b/BF3Fr8pY/nexus-tecnologia-gaming

## Estado del proyecto: 

El proyecto se encuentra en desarrollo. Durante el Sprint 3 se incorporaron Node.js, Express y EJS, reorganizando la aplicación mediante rutas, controladores y vistas.

Se implementaron parciales reutilizables para el encabezado, pie de página, etiquetas del documento y tarjetas de productos. También se incorporaron formularios de creación y edición de productos.

Actualmente, los formularios son visuales y todavía no cuentan con persistencia de datos.

Sprint 4: los productos se guardan en `src/data/products.json` y cuentan con un CRUD completo (listado, detalle, creación, edición y eliminación). Los datos de usuarios de prueba están en `src/data/users.json`.


Sprint 5: registro con foto de perfil (Multer) y contraseña encriptada (bcrypt), login, logout, perfil, función "Recordarme" con cookie firmada y rutas separadas para huéspedes y usuarios con sesión.
**Pendiente:** el carrito todavía no guarda productos, aunque las tablas `carts` y `cart_items` ya existen.

Sprint 6: los datos pasaron a una base MySQL, con diagrama de entidades y relaciones, scripts SQL de estructura y de datos, y modelos de Sequelize. Productos: crear, editar, eliminar, listar, ver detalle, buscar y paginado. Usuarios: registro, login, perfil y edición del perfil.


Sprint 7: validaciones de formularios en el servidor (Express Validator) y en el navegador (JavaScript): registro, login, creación y edición de productos y edición del perfil. La imagen del producto ahora se sube como archivo, y se valida su tipo (JPG, JPEG, PNG o GIF).


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



-------------- -->


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

1. **[Compra Gamer](https://compragamer.com/)**: se eligió por pertenecer al mismo rubro que NEXUS y estar orientado al público argentino. Se tomará como referencia la organización de las categorías, los filtros de productos y la presentación del catálogo de hardware y gaming.

2. **[Mercado Libre](https://www.mercadolibre.com.ar/)**: se eligió como referencia de comercio electrónico por la forma de presentar las fichas de producto y organizar el proceso de compra. Se analizarán aspectos como la información del producto, el carrito y la navegación, con el objetivo de ofrecer una experiencia clara e intuitiva.

3. **[Venex](https://www.venex.com.ar/)**: se seleccionó por ser una tienda de tecnología orientada al mercado argentino. Servirá como referencia para analizar la estructura del catálogo, la variedad de productos y la comunicación de las condiciones comerciales, como las opciones de financiación y los envíos.

4. **[Logitech G](https://www.logitechg.com/es-ar)**: se eligió por la presentación visual de sus productos, el uso de imágenes de calidad y la organización de las especificaciones técnicas. También se tomará como inspiración su identidad visual, el uso del color, el contraste y la estética moderna orientada al gaming para definir el estilo de NEXUS.

5. **[Razer](https://www.razer.com/latam-es)**: se eligió como referencia internacional por su identidad visual orientada al gaming, el uso del color verde característico de la marca y la presentación de sus productos. Se analizarán sus imágenes, la organización de las especificaciones técnicas y la estética de sus páginas para inspirar el diseño de NEXUS, adaptándolo a una tienda de tecnología dirigida al mercado argentino.

## Wireframes

Los wireframes del Sprint 1 están en la carpeta [`/wireframes`](./wireframes):

- `Home.png`: página principal
- `Detalle de producto.png`: detalle de producto
- `Carrito.png`: carrito de compras
- `Formulario de registro.png`: formulario de registro
- `Formulario de Login.png`: formulario de login

## Identidad visual

**Colores**

| Nombre | Código | Uso |
|---|---|---|
| Medianoche | `#0F0D1A` | Fondo general |
| Panel | `#1C1933` | Tarjetas y header |
| Violeta pixel | `#7B5CFF` | Enlaces y bordes |
| Menta láser | `#35F2C0` | Botones principales |
| Humo | `#ECEAF6` | Texto principal |
| Niebla | `#9A97B5` | Texto secundario |

**Tipografías:** Chakra Petch (títulos, precios y logo) y DM Sans (textos, formularios y botones).

## Tecnologías

Node.js, Express, EJS, HTML y CSS, con JavaScript en el navegador para las validaciones. Base de datos MySQL, manejada con Sequelize. Paquetes: `method-override`, `multer` (subida de imágenes), `bcryptjs` (encriptado de contraseñas), `express-session`, `cookie-parser`, `express-validator` y `dotenv`.

## Cómo ejecutar el proyecto

1. Clonar el repositorio e instalar las dependencias:

```bash
git clone https://github.com/JoseKipler/DPFS_jose_kipler.git
cd DPFS_jose_kipler
npm install
```

2. Crear la base de datos. En MySQL Workbench, abrir y ejecutar en este orden:
   1. `database/structure.sql`: crea la base `nexus_db` y todas las tablas.
   2. `database/data.sql`: carga productos, usuarios, categorías y colores de prueba.

3. Crear un archivo `.env` en la raíz, copiando `.env.example` y completando la contraseña de MySQL:

```
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=nexus_db
DB_HOST=127.0.0.1
DB_PORT=3306
```

4. Iniciar el servidor:

```bash
npm run dev
```

El sitio queda disponible en `http://localhost:3000`.

> `data.sql` vacía las tablas antes de cargar los datos, por lo que no debe ejecutarse sobre una base con información que se quiera conservar.

## Usuarios de prueba

Las contraseñas están encriptadas en la base, por eso se listan acá. Son datos de prueba, no de personas reales.

| Email | Contraseña | Tipo |
|---|---|---|
| admin@nexus.com | Nexus1234 | Administrador |
| lucia.fernandez@example.com | Clave1234 | Usuario |

## Rutas principales

| Método | Ruta | Acceso | Qué hace |
|---|---|---|---|
| GET | `/` | Todos | Home |
| GET | `/products` | Todos | Listado con búsqueda (`?q=`) y paginado (`?page=`) |
| GET | `/products/:id` | Todos | Detalle de producto |
| GET | `/products/cart` | Todos | Carrito |
| GET | `/products/create` | Con sesión | Formulario de creación |
| POST | `/products` | Con sesión | Crea un producto |
| GET | `/products/:id/edit` | Con sesión | Formulario de edición |
| PUT | `/products/:id` | Con sesión | Edita un producto |
| DELETE | `/products/:id` | Con sesión | Elimina un producto |
| GET | `/users/register` | Solo huéspedes | Formulario de registro |
| POST | `/users/register` | Solo huéspedes | Crea un usuario |
| GET | `/users/login` | Solo huéspedes | Formulario de login |
| POST | `/users/login` | Solo huéspedes | Inicia sesión |
| GET | `/users/profile` | Con sesión | Perfil del usuario |
| GET | `/users/profile/edit` | Con sesión | Formulario de edición del perfil |
| PUT | `/users/profile` | Con sesión | Edita el perfil |
| POST | `/users/logout` | Con sesión | Cierra la sesión |

## Validaciones

Todos los formularios se validan en dos capas: en el servidor con Express Validator (`src/validations/`), que es la protección que no se puede desactivar, y en el navegador con JavaScript (`public/js/`), para avisar al visitante antes de enviar.

| Formulario | Reglas principales |
|---|---|
| Registro | Nombre y apellido (mínimo 2 caracteres), email válido y no repetido, contraseña de al menos 8 caracteres, imagen JPG, JPEG, PNG o GIF |
| Login | Email válido y contraseña obligatoria; el servidor verifica que coincidan con lo guardado |
| Productos | Nombre (mínimo 5 caracteres), descripción (mínimo 20), precio mayor a cero, categoría y colores existentes en la base, imagen JPG, JPEG, PNG o GIF |
| Editar perfil | Nombre y apellido (mínimo 2 caracteres), imagen JPG, JPEG, PNG o GIF |

## Base de datos

El diagrama de entidades y relaciones está en [`database/DER_nexus.pdf`](./database/DER_nexus.pdf).

| Tabla | Contenido |
|---|---|
| `users` | Usuarios, con su categoría y contraseña encriptada |
| `user_categories` | Tipos de usuario (admin y user) |
| `products` | Productos, con su categoría |
| `categories` | Categorías de productos |
| `colors` | Colores disponibles |
| `product_color` | Relación muchos a muchos entre productos y colores |
| `carts` y `cart_items` | Carritos de compra y sus ítems |

Los modelos de Sequelize están en `database/models/`, con todas sus relaciones.

## Estructura del proyecto

```
DPFS_jose_kipler/
├── app.js                  (servidor Express)
├── package.json
├── .env.example            (plantilla de variables de entorno)
├── .sequelizerc
├── README.md
├── retro.md
├── daily.md
├── database/
│   ├── config/             (configuración de Sequelize)
│   ├── models/             (modelos y relaciones)
│   ├── structure.sql
│   ├── data.sql
│   └── DER_nexus.pdf
├── scripts/                (hashPasswords, generateDataSql y pruebas)
├── wireframes/             (wireframes del Sprint 1)
├── public/
│   ├── css/
│   ├── js/                 (validaciones del front-end)
│   └── images/
│       ├── users/          (fotos de perfil)
│       └── products/       (fotos de producto)
└── src/
    ├── data/               (products.json y users.json de origen)
    ├── middlewares/        (subida de imágenes, sesión, huéspedes y usuarios)
    ├── utils/
    ├── validations/        (reglas de Express Validator)
    ├── routes/             (main, products, users)
    ├── controllers/        (main, products, users)
    └── views/
        ├── index.ejs
        ├── partials/       (head, header, footer, productCard, productForm, pagination)
        ├── products/       (productList, productDetail, productCart, productCreate, productEdit)
        └── users/          (register, login, profile, profileEdit)
```

## Estado del proyecto

El proyecto se encuentra en desarrollo.

- Sprint 3: se incorporaron Node.js, Express y EJS, reorganizando la aplicación mediante rutas, controladores y vistas, con parciales reutilizables para el encabezado, el pie de página, las etiquetas del documento y las tarjetas de productos.
- Sprint 4: CRUD de productos con los datos en archivos JSON.
- Sprint 5: registro con foto de perfil (Multer) y contraseña encriptada (bcrypt), login, logout, perfil, función "Recordarme" con cookie firmada y rutas separadas para huéspedes y usuarios con sesión.
- Sprint 6: los datos pasaron a una base MySQL, con diagrama de entidades y relaciones, scripts SQL de estructura y de datos, y modelos de Sequelize. Productos: crear, editar, eliminar, listar, ver detalle, buscar y paginado. Usuarios: registro, login, perfil y edición del perfil.
- Sprint 7: validaciones de formularios en el servidor (Express Validator) y en el navegador (JavaScript): registro, login, creación y edición de productos y edición del perfil. La imagen del producto se sube como archivo, y se valida su tipo (JPG, JPEG, PNG o GIF).
- Pendiente: el carrito todavía no guarda productos, aunque las tablas `carts` y `cart_items` ya existen.

## Tablero de trabajo

Seguimiento del proyecto en Trello: [Tablero de NEXUS](https://trello.com/b/BF3Fr8pY/nexus-tecnologia-gaming)

## Documentos del equipo

- Retrospectivas de cada sprint: [`retro.md`](./retro.md)
- Opinión sobre las dailies: [`daily.md`](./daily.md)
