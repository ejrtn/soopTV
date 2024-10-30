const mariadb = require("mariadb/callback");
require('dotenv').config();
pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port:process.env.DB_PORT,
    connectionLimit: 100,
    charset:'utf8mb4',
    multipleStatements : true
});
pool.getConnection((err) => {
    if (err) {
        console.error('Error connecting to MariaDB pool:', err);
    } else {
        console.log('Connected to MariaDB pool');
    }
});

module.exports = pool;