
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

const mainRoutes = require('./src/routes/main');
const productsRoutes = require('./src/routes/products');
const usersRoutes = require('./src/routes/users');

const app = express();

// Motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Lectura de formularios y method-override
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Sesión y cookies (primero la sesión)
app.use(session({
  secret: 'nexus-secreto-de-desarrollo',
  resave: false,
  saveUninitialized: false
}));

app.use(cookieParser('nexus-secreto-de-desarrollo'));

// Middleware de aplicación: después de la sesión
app.use(userLoggedMiddleware);

// Rutas
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
