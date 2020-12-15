const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'dbdemo_39'
});

// test
pool.query(
  'SELECT * FROM dbdemo_39.clothing_39 where cat_id =0',
  (err, result) => {
    console.log(JSON.stringify(result));
    console.log('database connection successful');
  }
);

module.exports = pool.promise();
