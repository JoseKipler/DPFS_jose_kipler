const express = require('express');
const path = require('path');

const app = express();

// Motor de templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Archivos estáticos (CSS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('NEXUS funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});