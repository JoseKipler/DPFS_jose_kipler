const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

const User = {
  getAll() {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  },

  save(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  },

  findById(id) {
    return this.getAll().find(user => user.id === Number(id));
  },

  findByEmail(email) {
    return this.getAll().find(user => user.email === email);
  },

  create(data) {
    const users = this.getAll();
    const lastId = users.length ? Math.max(...users.map(u => u.id)) : 0;
    const newUser = { id: lastId + 1, ...data };

    users.push(newUser);
    this.save(users);
    return newUser;
  }
};

module.exports = User;