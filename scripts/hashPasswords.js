const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const filePath = path.join(__dirname, '../src/data/users.json');
const users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const updated = users.map(user => {
  // Si ya está encriptada, no la toca
  if (user.password.startsWith('$2')) return user;
  return { ...user, password: bcrypt.hashSync(user.password, 10) };
});

fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
console.log(`Contraseñas encriptadas: ${updated.length} usuarios`);