const db = require('../utils/database');

const Clothing_49 = class Clothing_49 {
  constructor(id, name, cat_id, price, remote_url, local_url) {
    this.id = id;
    this.name = name;
    this.cat_id = cat_id;
    this.price = price;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  static fetchHomePage() {
    return db.execute('SELECT * FROM clothing_49 where cat_id = 0');
  }
};

// testFetchHomePage();

module.exports = Clothing_49;
