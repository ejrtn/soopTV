const mariadb = require("mariadb/callback");
pool = mariadb.createPool({
    host: "192.168.56.1",
    user: "root",
    password: "root",
    database: "soop",
    port:3306,
    connectionLimit: 100,
});
pool.getConnection((err) => {
    if (err) {
        console.error('Error connecting to MariaDB pool:', err);
    } else {
        console.log('Connected to MariaDB pool');
    }
});

module.exports = pool;