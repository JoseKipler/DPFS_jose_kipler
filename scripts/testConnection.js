const db = require('../database/models');

db.sequelize.authenticate()
  .then(() => console.log('Conexión con nexus_db establecida.'))
  .catch(error => console.error('No se pudo conectar:', error.message))
  .finally(() => db.sequelize.close());