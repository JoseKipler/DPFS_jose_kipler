const fs = require('fs');
const path = require('path');

const products = require('../src/data/products.json');
const users = require('../src/data/users.json');

const esc = value => `'${String(value).replace(/\\/g, '\\\\').replace(/'/g, "''")}'`;
const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
const pretty = slug => capitalize(slug.replace(/-/g, ' '));

// Tablas secundarias, armadas a partir de los datos
const userCategories = ['admin', 'user', ...users.map(u => u.category)]
  .filter((name, index, list) => list.indexOf(name) === index);

const categories = [...new Set(products.map(p => p.category))].sort();
const colors = [...new Set(products.flatMap(p => p.colors))].sort();

const lines = [];

lines.push('USE nexus_db;');
lines.push('');
lines.push('SET FOREIGN_KEY_CHECKS = 0;');
['cart_items', 'carts', 'product_color', 'products', 'colors', 'categories', 'users', 'user_categories']
  .forEach(table => lines.push(`TRUNCATE TABLE ${table};`));
lines.push('SET FOREIGN_KEY_CHECKS = 1;');
lines.push('');

lines.push('INSERT INTO user_categories (id, name) VALUES');
lines.push(userCategories.map((name, i) => `(${i + 1}, ${esc(name)})`).join(',\n') + ';');
lines.push('');

lines.push('INSERT INTO users (id, first_name, last_name, email, password, image, user_category_id) VALUES');
lines.push(users.map(u =>
  `(${u.id}, ${esc(u.firstName)}, ${esc(u.lastName)}, ${esc(u.email)}, ${esc(u.password)}, ${esc(u.image)}, ${userCategories.indexOf(u.category) + 1})`
).join(',\n') + ';');
lines.push('');

lines.push('INSERT INTO categories (id, name) VALUES');
lines.push(categories.map((name, i) => `(${i + 1}, ${esc(pretty(name))})`).join(',\n') + ';');
lines.push('');

lines.push('INSERT INTO colors (id, name) VALUES');
lines.push(colors.map((name, i) => `(${i + 1}, ${esc(capitalize(name))})`).join(',\n') + ';');
lines.push('');

lines.push('INSERT INTO products (id, name, description, image, price, category_id) VALUES');
lines.push(products.map(p =>
  `(${p.id}, ${esc(p.name)}, ${esc(p.description)}, ${esc(p.image)}, ${Number(p.price)}, ${categories.indexOf(p.category) + 1})`
).join(',\n') + ';');
lines.push('');

const productColors = products.flatMap(p =>
  p.colors.map(color => `(${p.id}, ${colors.indexOf(color) + 1})`)
);
lines.push('INSERT INTO product_color (product_id, color_id) VALUES');
lines.push(productColors.join(',\n') + ';');
lines.push('');

const outPath = path.join(__dirname, '../database/data.sql');
fs.writeFileSync(outPath, lines.join('\n'));

console.log(`data.sql generado: ${users.length} usuarios, ${products.length} productos, ` +
  `${categories.length} categorías, ${colors.length} colores, ${productColors.length} relaciones producto-color.`);