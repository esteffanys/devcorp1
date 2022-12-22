const mssql = require('mssql/msnodesqlv8');

const conn = new mssql.ConnectionPool({
     server: 'localhost',
    database: 'DEVCORP1',
     password: 'Sql2@19',
    driver: "msnodesqlv8",
    user: 'sa'
})

module.exports = conn;