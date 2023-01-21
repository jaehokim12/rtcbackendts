import * as mysql from 'mysql2';
import config from './config';
const pool = mysql.createPool({
    host: config.dbhost,
    user: config.dbuser,
    database: config.db,
    password: config.dbpassword,
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 10,
    rowsAsArray: false,
});
export const promisePool = pool.promise();
