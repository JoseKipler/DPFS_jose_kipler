const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

// Motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Archivos estáticos (CSS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Importar las rutas
const mainRoutes = require('./src/routes/main');
const productsRoutes = require('./src/routes/products');
const usersRoutes = require('./src/routes/users');

// Conectar las rutas
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
