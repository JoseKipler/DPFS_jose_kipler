const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/products.json');

const Product = {
  getAll() {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  },

  save(products) {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
  },

  findById(id) {
    return this.getAll().find(product => product.id === Number(id));
  },

  create(data) {
    const products = this.getAll();
    const lastId = products.length ? Math.max(...products.map(p => p.id)) : 0;
    const newProduct = { id: lastId + 1, ...data };

    products.push(newProduct);
    this.save(products);
    return newProduct;
  },

  update(id, data) {
    const products = this.getAll();
    const index = products.findIndex(product => product.id === Number(id));

    if (index === -1) return null;

    products[index] = { ...products[index], ...data };
    this.save(products);
    return products[index];
  },

  delete(id) {
    const products = this.getAll().filter(product => product.id !== Number(id));
    this.save(products);
  }
};

module.exports = Product;