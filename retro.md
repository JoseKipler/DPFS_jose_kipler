# Retrospectiva Sprint 1

Dinámica: estrella de mar.

## Comenzar a hacer
- Organizar las tareas en un tablero desde el inicio del sprint.
- Ponerme objetivos de tiempo para cada tarea.
- Hacer commits chicos y frecuentes en el repositorio.

## Hacer más
- Investigar referentes con más detalle antes de diseñar.
- Revisar mi trabajo contra la consigna antes de darlo por terminado.
- Reutilizar componentes en Figma (header, footer, cards) para ahorrar tiempo.
- Pedir ayuda y revisar los avances con feedback.

## Continuar haciendo
- Planificar antes de empezar a desarrollar: tener temática, wireframes y paleta definidos me da una guía clara.
- Mantener un estilo consistente entre todas las pantallas.

## Hacer menos
- Dejar detalles para el final (como las correcciones de textos y colores).
- Probar cambios de color o estructura sin un criterio previo.

## Dejar de hacer
- Trabajar sin un orden claro de tareas.
- Dejar elementos de prueba (como colores fuertes) sin limpiar antes de revisar.

## Conclusiones
Aprendí a usar Figma y a pensar la estructura del sitio antes de programar. Para el Sprint 2 quiero organizarme con un tablero y avanzar página por página, con commits regulares.


# Retrospectiva Sprint 2

## Comenzar a hacer

- Revisar el funcionamiento de cada página en el navegador antes de darla por terminada.
- Organizar mejor los tiempos para distribuir el trabajo durante todo el sprint.
- Documentar los avances y las decisiones importantes del proyecto.

## Hacer más

- Reutilizar estructuras y estilos para mantener la consistencia entre las páginas.
- Probar el diseño responsive en diferentes tamaños de pantalla.
- Realizar commits frecuentes para mantener actualizado el repositorio.
- Revisar los detalles de HTML y CSS para mejorar la calidad del código.

## Continuar haciendo

- Mantener una estructura visual consistente en todas las páginas de NEXUS.
- Trabajar siguiendo los wireframes y el diseño definido previamente en Figma.
- Avanzar de manera progresiva, revisando cada sección antes de continuar.
- Consultar documentación y buscar soluciones cuando aparecen errores o dificultades.

## Hacer menos

- Dejar ajustes visuales y correcciones para último momento.
- Repetir código cuando podría resolverse mediante estructuras reutilizables.
- Realizar cambios sin comprobar cómo afectan al resto de las páginas.

## Dejar de hacer

- Avanzar con secciones sin probarlas previamente.
- Acumular varios cambios antes de revisar el resultado.
- Dejar tareas pendientes sin registrarlas u organizarlas.

## Conclusiones

Durante el Sprint 2 avancé en la construcción de NEXUS, pasando del diseño realizado en Figma a la implementación con HTML y CSS. Pude desarrollar las principales páginas del ecommerce y trabajar en su estructura visual y adaptación a distintos dispositivos.

Como aspecto a mejorar, considero que necesito organizar mejor los tiempos y realizar pruebas más frecuentes para detectar errores antes de avanzar.

Para el Sprint 3, mi objetivo es incorporar Node.js, Express y EJS, organizar mejor el código mediante rutas, controladores y parciales reutilizables, y continuar mejorando la estructura del proyecto.

---

# Retrospectiva Sprint 3


## Comenzar a hacer
- Probar cada cambio en el navegador apenas lo hago, en vez de acumular varios.
- Mirar primero el mensaje de la terminal cuando algo falla: casi siempre dice qué archivo o ruta está mal.

## Hacer más
- Commits más chicos: este sprint subí muchos cambios juntos.
- Usar los partials para cualquier bloque que se repita.

## Continuar haciendo
- Partir de una estructura de carpetas clara (`routes`, `controllers`, `views`).
- Mantener el tablero al día, con dificultad y dependencias en cada tarea.

## Hacer menos
- Dejar carpetas viejas sin borrar (`Views/`, `styles/`): me generaron confusión.

## Dejar de hacer
- Poner nombres con espacios y mayúsculas a los archivos, como los wireframes.

## Conclusiones
Aprendí a organizar una aplicación con Express y EJS, y que los partials evitan repetir código. Lo que más me costó fueron las rutas de los `include` y el ajuste del layout con flex. Para el Sprint 4 quiero trabajar el CRUD con JSON paso a paso, probando cada ruta antes de pasar a la siguiente.


# Retrospectiva Sprint 4

## Comenzar a hacer
- Cerrar `products.json` y `users.json` en el editor mientras pruebo, porque el servidor los modifica y VS Code me avisó de un conflicto al guardar.
- Anotar en el tablero los errores que me llevan más tiempo, para encontrarlos más rápido la próxima vez.

## Hacer más
- Probar cada ruta del CRUD apenas la termino, en lugar de armar varias y probarlas juntas.
- Separar la lógica de leer y guardar datos en un modelo (`Product.js`), que dejó el controlador mucho más limpio.


## Hacer menos
- Probar con la pestaña del JSON abierta. users.json y products.json se modifican solos con el servidor, y tenerlos abiertos en el editor generó un conflicto al guardar.
- Resolver los errores por intuición. Fijarme primero en el mensaje de la terminal me ahorra tiempo.

## Dejar de hacer
- Dejar tareas terminadas sin marcar en el tablero.

## Conclusiones
Aprendí a guardar y leer datos desde archivos JSON y a armar las siete rutas de un CRUD con `method-override` para usar PUT y DELETE. Lo que más me costó fue el `enctype` del formulario y que `nodemon` reiniciara el servidor al guardar el JSON. Para el Sprint 5 quiero entender bien cómo funcionan las sesiones, antes de conectar el login.

---

# Retrospectiva Sprint 5

## Comenzar a hacer
- Revisar el orden de los `app.use` en `app.js` cuando agrego un middleware nuevo: me falló `req.session` porque lo puse antes de configurar la sesión.
- Probar cada pieza del flujo de usuarios por separado (registro, login, logout, perfil) antes de pasar a la siguiente.

## Hacer más
- Pensar los casos de error de los formularios (campos vacíos, email repetido, contraseñas distintas) y mostrarlos en pantalla.

## Continuar haciendo
- Avanzar por pasos y subir cada avance con su commit.
- Probar el sitio con distintos usuarios (admin y usuario común) con y sin sesión.

## Hacer menos
- Tener abiertos `users.json` y `products.json` en el editor mientras pruebo: el servidor los modifica y VS Code me avisó de un conflicto al guardar.

## Dejar de hacer
- Dejar datos de prueba (usuarios y fotos) mezclados con los que voy a entregar.

## Conclusiones
Aprendí cómo funcionan las sesiones y las cookies, a encriptar contraseñas con bcrypt, a subir imágenes con Multer y a proteger rutas con middlewares. Lo que más me costó fue entender en qué orden se ejecutan los middlewares. Para el Sprint 6 quiero diseñar bien la base de datos antes de escribir código.


# Retrospectiva Sprint 6

## Comenzar a hacer
- Verificar que un archivo de configuración tenga contenido antes de ejecutar un comando que depende de él: el `.sequelizerc` estaba vacío y `sequelize-cli init` creó las carpetas en el lugar equivocado.
- Probar el proyecto clonándolo en una carpeta nueva antes de entregar: así detecté que `.env.example` tenía `DB_USER` vacío, algo que no veía en mi compu.

## Hacer más
- Diseñar la base de datos antes de escribir código: tener el diagrama y el `structure.sql` me ahorró cambios después.
- Comprobar los datos en Workbench con consultas, para confirmar que lo que hace la aplicación quedó bien guardado.

## Continuar haciendo
- Mantener los datos originales en los JSON como respaldo hasta que todo funcione con la base.

## Hacer menos
- Ejecutar varias consultas juntas en Workbench (puede llegar a confundirte)

## Dejar de hacer
- Dar por sentado que un archivo viejo ya no se usa: antes de borrar los modelos del JSON, un `grep` mostró que tres archivos todavía los referenciaban.

## Conclusiones
Aprendí a diseñar una base relacional (relaciones 1 a N y N a N), a escribir los scripts SQL y a usar Sequelize con sus modelos y asociaciones. Lo que más me costó fue la configuración inicial de `sequelize-cli`. 

