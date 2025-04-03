const mysql = require("mysql");

// MySQL 연결 풀 생성
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testdb",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool;