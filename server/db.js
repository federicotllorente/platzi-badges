require('dotenv').config();
const mysql = require('mysql');
const { promisify } = require('util');

const database = {
    host: process.env.HOST_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') console.error('[db] The database connection was closed');
        if (err.code === 'ER_CON_COUNT_ERROR') console.error('[db] The database has too many connections');
        if (err.code === 'ECONNREFUSED') console.error('[db] The database connection was refused');
    }
    if (connection) connection.release();
    console.log('[db] The database was connected');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;