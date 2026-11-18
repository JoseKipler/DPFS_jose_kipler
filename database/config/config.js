require('dotenv').config();

const base = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'nexus_db',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false,
    underscored: true
  }
};

module.exports = {
  development: base,
  test: base,
  production: base
};